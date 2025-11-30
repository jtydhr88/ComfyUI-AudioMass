import { createApp, type App as VueApp } from 'vue'
import { app } from "../../../scripts/app.js"
import { api } from "../../../scripts/api.js"
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Root from "@/Root.vue"
import { i18n } from "@/i18n"

const { ComfyButton } = window.comfyAPI.button

let vueApp: VueApp | null = null
let mountContainer: HTMLElement | null = null
let rootInstance: InstanceType<typeof Root> | null = null

// Track the current node being edited
let currentEditingNode: any = null
let currentEditingFilename: string = ''
let currentEditingIsInputNode: boolean = false

// Node types that support audio editing
const INPUT_AUDIO_NODES = ['LoadAudio']
const OUTPUT_AUDIO_NODES = ['PreviewAudio', 'SaveAudio', 'SaveAudioMP3', 'SaveAudioOpus']

function ensureAudioMassInstance(): InstanceType<typeof Root> {
    if (mountContainer && rootInstance) {
        return rootInstance
    }

    mountContainer = document.createElement('div')
    mountContainer.id = 'audiomass-root'
    document.body.appendChild(mountContainer)

    vueApp = createApp(Root)
    vueApp.use(i18n)
    vueApp.use(PrimeVue, {
        theme: {
        }
    })
    rootInstance = vueApp.mount(mountContainer) as InstanceType<typeof Root>

    // Set up the save callback
    rootInstance.setSaveCallback(handleSaveToComfyUI)

    return rootInstance
}

function openAudioMass() {
    currentEditingNode = null
    currentEditingFilename = ''
    currentEditingIsInputNode = false
    const instance = ensureAudioMassInstance()
    instance.open()
}

async function openAudioMassWithAudio(audioPath: string, node: any, isInputNode: boolean, audioType: string = 'input') {
    currentEditingNode = node
    currentEditingFilename = audioPath
    currentEditingIsInputNode = isInputNode
    const instance = ensureAudioMassInstance()
    instance.open()

    // Fetch the audio file and load it into AudioMass
    const audioUrl = api.apiURL(`/view?filename=${encodeURIComponent(audioPath)}&type=${audioType}`)
    instance.loadAudioFromUrl(audioUrl, audioPath)
}

async function handleSaveToComfyUI(blob: Blob, format: string) {
    // Generate new filename with timestamp
    const timestamp = Date.now()
    let baseName = currentEditingFilename || 'audio'

    // Remove extension from base name
    const lastDotIndex = baseName.lastIndexOf('.')
    if (lastDotIndex > 0) {
        baseName = baseName.substring(0, lastDotIndex)
    }

    // Remove subfolder path if present
    const lastSlashIndex = baseName.lastIndexOf('/')
    if (lastSlashIndex >= 0) {
        baseName = baseName.substring(lastSlashIndex + 1)
    }

    const newFilename = `${baseName}_audiomass_${timestamp}.${format}`

    try {
        // Create a File object from the Blob
        const file = new File([blob], newFilename, { type: blob.type })

        // Upload to ComfyUI
        const body = new FormData()
        body.append('image', file)

        const resp = await api.fetchApi('/upload/image', {
            method: 'POST',
            body
        })

        if (resp.status === 200) {
            const data = await resp.json()
            let path = data.name
            if (data.subfolder) path = data.subfolder + '/' + path

            // Update the node widget only for input nodes (LoadAudio)
            if (currentEditingNode && currentEditingIsInputNode) {
                const audioWidget = currentEditingNode.widgets?.find((w: any) => w.name === 'audio')
                const audioUIWidget = currentEditingNode.widgets?.find((w: any) => w.name === 'audioUI')

                if (audioWidget) {
                    // Add the file to the dropdown list
                    if (!audioWidget.options.values.includes(path)) {
                        audioWidget.options.values.push(path)
                    }
                    // Update the widget value
                    audioWidget.value = path
                    // Trigger callback to update UI
                    audioWidget.callback?.(path)
                }

                if (audioUIWidget?.element) {
                    // Update the audio preview
                    const audioUrl = api.apiURL(`/view?filename=${encodeURIComponent(path)}&type=input`)
                    audioUIWidget.element.src = audioUrl
                }
            }

            return { success: true, path }
        } else {
            return { success: false, error: `${resp.status} - ${resp.statusText}` }
        }
    } catch (error) {
        return { success: false, error: String(error) }
    }
}

app.registerExtension({
    name: 'ComfyUI.AudioMass.TopMenu',
    setup() {
        app.menu?.settingsGroup.append(
            new ComfyButton({
                icon: 'image',
                tooltip: 'comfyui-audiomass',
                content: 'AudioMass',
                action: openAudioMass,
            }),
        )
    },
    getNodeMenuItems(node: any) {
        const nodeClass = node.constructor.comfyClass
        const isInputNode = INPUT_AUDIO_NODES.includes(nodeClass)
        const isOutputNode = OUTPUT_AUDIO_NODES.includes(nodeClass)

        if (!isInputNode && !isOutputNode) return []

        if (isInputNode) {
            // LoadAudio node - get audio from widget
            const audioWidget = node.widgets?.find((w: any) => w.name === 'audio')
            if (!audioWidget?.value) return []

            return [
                null,
                {
                    content: 'Open in AudioMass',
                    callback: () => {
                        openAudioMassWithAudio(audioWidget.value, node, true, 'input')
                    }
                }
            ]
        } else {
            // Output nodes - get audio from audioUI widget src
            const audioUIWidget = node.widgets?.find((w: any) => w.name === 'audioUI')
            const audioSrc = audioUIWidget?.element?.src
            if (!audioSrc) return []

            // Extract filename from src URL
            // URL format: /api/view?filename=xxx&subfolder=xxx&type=output
            try {
                const url = new URL(audioSrc, window.location.origin)
                const filename = url.searchParams.get('filename')
                const subfolder = url.searchParams.get('subfolder')
                const type = url.searchParams.get('type') || 'output'

                if (!filename) return []

                const fullPath = subfolder ? `${subfolder}/${filename}` : filename

                return [
                    null,
                    {
                        content: 'Open in AudioMass',
                        callback: () => {
                            openAudioMassWithAudio(fullPath, node, false, type)
                        }
                    }
                ]
            } catch {
                return []
            }
        }
    }
})