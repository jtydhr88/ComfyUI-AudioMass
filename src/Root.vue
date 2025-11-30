<template>
  <Dialog
    v-model:visible="visible"
    header="ComfyUI AudioMass"
    :style="{ width: '80vw', height: '80vh' }"
    :maximizable="true"
    :modal="true"
    :closable="true"
    :draggable="false"
    content-class="h-full"
  >
    <App ref="appRef" />
  </Dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import Dialog from 'primevue/dialog'
import App from './App.vue'

type SaveCallback = (blob: Blob, format: string) => Promise<{ success: boolean; path?: string; error?: string }>

const visible = ref(false)
const appRef = ref<InstanceType<typeof App> | null>(null)
const pendingAudioLoad = ref<{ url: string; filename: string } | null>(null)
const saveCallback = ref<SaveCallback | null>(null)

const open = () => {
  visible.value = true
}

const close = () => {
  visible.value = false
}

const loadAudioFromUrl = (url: string, filename: string) => {
  if (appRef.value) {
    appRef.value.loadAudioFromUrl(url, filename)
  } else {
    pendingAudioLoad.value = { url, filename }
  }
}

const setSaveCallback = (callback: SaveCallback) => {
  saveCallback.value = callback
}

const handleSaveToComfyUI = async (blob: Blob, format: string) => {
  if (saveCallback.value) {
    return await saveCallback.value(blob, format)
  }
  return { success: false, error: 'No save callback registered' }
}

// Watch for appRef to become available
watch(appRef, (newAppRef) => {
  if (newAppRef) {
    // Set up save handler
    newAppRef.setSaveHandler(handleSaveToComfyUI)

    if (pendingAudioLoad.value) {
      nextTick(() => {
        newAppRef.loadAudioFromUrl(pendingAudioLoad.value!.url, pendingAudioLoad.value!.filename)
        pendingAudioLoad.value = null
      })
    }
  }
})

onMounted(() => {
  visible.value = true
})

defineExpose({ open, close, loadAudioFromUrl, setSaveCallback })
</script>

<style>
.p-dialog-content {
  flex: 1;
  overflow: hidden;
  padding: 0 !important;
}
</style>
