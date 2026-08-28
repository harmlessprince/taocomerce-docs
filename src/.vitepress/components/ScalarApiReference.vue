<template>
  <ClientOnly>
    <div v-if="ApiReferenceComponent" class="scalar-api-container">
      <component :is="ApiReferenceComponent" :configuration="configuration" />
    </div>
    <div v-else class="scalar-loading">
      <p>Loading Interactive API Sandbox...</p>
    </div>
  </ClientOnly>
</template>

<script setup>
import { shallowRef, onMounted } from 'vue'
import '@scalar/api-reference/style.css'

const ApiReferenceComponent = shallowRef(null)
const configuration = {
  url: '/openapi.json',
  theme: 'purple',
  showSidebar: true,
  isEditable: false,
}

onMounted(async () => {
  const mod = await import('@scalar/api-reference')
  ApiReferenceComponent.value = mod.ApiReference
})
</script>

<style>
.scalar-api-container {
  height: calc(100vh - 64px);
  width: 100%;
  overflow: hidden;
  position: relative;
}
/* Override VitePress default doc layout margins for Scalar page */
.VPContent.is-sub-nav {
  padding-top: 0 !important;
}
.scalar-app {
  height: 100% !important;
}
</style>
