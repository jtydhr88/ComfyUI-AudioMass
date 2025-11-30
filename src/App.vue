<template>
  <div
    ref="viewerContentRef"
    class="flex w-full h-full"
  >
    <div ref="mainContentRef" class="flex-1 relative">
      <iframe
      ref="iframeRef"
      src="/audiomass"
      class="demo-iframe h-full w-full">
    </iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch, nextTick } from 'vue'
import {useI18n} from "vue-i18n";

const { t } = useI18n()

type SaveHandler = (blob: Blob, format: string) => Promise<{ success: boolean; path?: string; error?: string }>

const viewerContentRef = ref<HTMLDivElement>()
const mainContentRef = ref<HTMLDivElement>()
const iframeRef = ref<HTMLIFrameElement>()
const maximized = ref(false)
const mutationObserver = ref<MutationObserver | null>(null)
const pendingAudioLoad = ref<{ url: string; filename: string } | null>(null)
const iframeReady = ref(false)
const saveHandler = ref<SaveHandler | null>(null)

const updateParentClass = () => {
  if (viewerContentRef.value?.parentElement) {
    const parentEl = viewerContentRef.value.parentElement
    if (!maximized.value) {
      parentEl.classList.add('h-full')
    } else {
      parentEl.classList.remove('h-full')
    }
  }
}

watch(maximized, () => {
  updateParentClass()
})

const handleIframeMessage = async (event: MessageEvent) => {
  if (event.data?.type === 'audiomass-ready') {
    iframeReady.value = true
    if (pendingAudioLoad.value) {
      sendAudioToIframe(pendingAudioLoad.value.url, pendingAudioLoad.value.filename)
      pendingAudioLoad.value = null
    }
  } else if (event.data?.type === 'save-to-comfyui') {
    const { data, format } = event.data
    if (data && saveHandler.value) {
      const blob = new Blob([data], { type: format === 'mp3' ? 'audio/mpeg' : format === 'wav' ? 'audio/wav' : 'audio/flac' })
      const result = await saveHandler.value(blob, format)
      iframeRef.value?.contentWindow?.postMessage({
        type: 'save-to-comfyui-result',
        success: result.success,
        path: result.path,
        error: result.error
      }, '*')
    }
  }
}

const sendAudioToIframe = async (url: string, filename: string) => {
  if (!iframeRef.value?.contentWindow) return

  try {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    iframeRef.value.contentWindow.postMessage({
      type: 'load-audio',
      data: arrayBuffer,
      filename: filename
    }, '*')
  } catch (error) {
    // Silent fail
  }
}

const loadAudioFromUrl = async (url: string, filename: string) => {
  if (iframeReady.value) {
    sendAudioToIframe(url, filename)
  } else {
    pendingAudioLoad.value = { url, filename }
  }
}

const setSaveHandler = (handler: SaveHandler) => {
  saveHandler.value = handler
}

onMounted(async () => {
  // Listen for messages from iframe
  window.addEventListener('message', handleIframeMessage)

  // Also listen for iframe load event to request ready status
  if (iframeRef.value) {
    iframeRef.value.addEventListener('load', () => {
      iframeRef.value?.contentWindow?.postMessage({ type: 'check-ready' }, '*')
    })
  }

  if (viewerContentRef.value) {
    updateParentClass()

    mutationObserver.value = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'maximized'
        ) {
          maximized.value =
            (mutation.target as HTMLElement).getAttribute('maximized') ===
            'true'
        }
      })
    })

    mutationObserver.value.observe(viewerContentRef.value, {
      attributes: true,
      attributeFilter: ['maximized']
    })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('message', handleIframeMessage)

  if (viewerContentRef.value?.parentElement) {
    viewerContentRef.value.parentElement.classList.remove('h-full')
  }

  if (mutationObserver.value) {
    mutationObserver.value.disconnect()
    mutationObserver.value = null
  }
})

defineExpose({ loadAudioFromUrl, setSaveHandler })
</script>

<style scoped>
.demo-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>