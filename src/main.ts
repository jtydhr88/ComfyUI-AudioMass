import { createApp, type App as VueApp } from 'vue'
import { app } from "../../../scripts/app.js"
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Root from "@/Root.vue"
import { i18n } from "@/i18n"

const { ComfyButton } = window.comfyAPI.button

let vueApp: VueApp | null = null
let mountContainer: HTMLElement | null = null
let rootInstance: InstanceType<typeof Root> | null = null

function openAudioMass() {
    if (mountContainer) {
        rootInstance?.open()
        return
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
})