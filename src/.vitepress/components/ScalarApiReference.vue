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
  spec: {
    url: '/openapi.json',
  },
  theme: 'purple',
  showSidebar: true,
  router: 'hash',
}

onMounted(async () => {
  const mod = await import('@scalar/api-reference')
  ApiReferenceComponent.value = mod.ApiReference
})
</script>

<style scoped>
.scalar-api-container {
  min-height: 80vh;
  margin-top: 1rem;
}
.scalar-loading {
  padding: 2rem;
  text-align: center;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-2);
}
</style>
