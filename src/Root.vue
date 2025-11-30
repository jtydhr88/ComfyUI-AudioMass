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
    <App />
  </Dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Dialog from 'primevue/dialog'
import App from './App.vue'

const visible = ref(false)

const open = () => {
  visible.value = true
}

const close = () => {
  visible.value = false
}

onMounted(() => {
  visible.value = true
})

defineExpose({ open, close })
</script>

<style>
.p-dialog-content {
  flex: 1;
  overflow: hidden;
  padding: 0 !important;
}
</style>
