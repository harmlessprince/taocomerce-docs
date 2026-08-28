<template>
  <ClientOnly>
    <div
      v-if="ApiReferenceComponent"
      ref="containerRef"
      class="scalar-api-container"
    >
      <component :is="ApiReferenceComponent" :configuration="configuration" />
    </div>
    <div v-else class="scalar-loading">
      <p>Loading Interactive API Sandbox...</p>
    </div>
  </ClientOnly>
</template>

<script setup>
import { shallowRef, ref, onBeforeUnmount, onMounted } from 'vue'
import '@scalar/api-reference/style.css'

const ApiReferenceComponent = shallowRef(null)
const containerRef = ref(null)
const configuration = {
  url: '/openapi.json',
  theme: 'purple',
  showSidebar: true,
  isEditable: false,
}

const isMobileViewport = () => window.matchMedia('(max-width: 767px)').matches

const resolveScalarTarget = (hash) => {
  const id = decodeURIComponent(hash.replace(/^#/, ''))
  return document.getElementById(id) || document.getElementById(`api-1/${id}`)
}

const closeMobileSidebar = () => {
  if (!isMobileViewport()) {
    return
  }

  const scalarApp = containerRef.value?.querySelector('.scalar-api-reference')

  if (!scalarApp?.classList.contains('references-sidebar-mobile-open')) {
    return
  }

  const menuButton = Array.from(containerRef.value.querySelectorAll('button')).find((button) =>
    ['Open Menu', 'Close Menu'].includes(button.textContent?.trim()),
  )

  menuButton?.click()
}

const scrollToScalarTarget = (hash, target) => {
  const scrollTargetIntoView = () => {
    const navHeight = Number.parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height'),
      10,
    ) || 64
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16

    window.scrollTo({ top })
  }

  window.history.pushState({}, '', `${window.location.pathname}${window.location.search}${hash}`)
  scrollTargetIntoView()

  window.setTimeout(() => {
    scrollTargetIntoView()
    window.history.replaceState({}, '', `${window.location.pathname}${window.location.search}${hash}`)
  }, 100)
}

const handleScalarHashClick = (event) => {
  const anchor = event.target?.closest?.('a[href^="#"]')

  if (!anchor || !containerRef.value?.contains(anchor)) {
    return
  }

  const hash = anchor.getAttribute('href')
  const target = hash ? resolveScalarTarget(hash) : null

  if (!target) {
    return
  }

  event.preventDefault()
  event.stopPropagation()
  event.stopImmediatePropagation()
  closeMobileSidebar()
  window.requestAnimationFrame(() => scrollToScalarTarget(hash, target))
}

onMounted(async () => {
  const mod = await import('@scalar/api-reference')
  ApiReferenceComponent.value = mod.ApiReference
  document.addEventListener('click', handleScalarHashClick, true)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleScalarHashClick, true)
})
</script>

<style>
.scalar-api-container {
  min-height: calc(100vh - var(--vp-nav-height, 64px));
  width: 100%;
  position: relative;
}
.scalar-app {
  min-height: calc(100vh - var(--vp-nav-height, 64px)) !important;
}

.scalar-api-container :where(.scalar-app, .references-layout) {
  min-height: calc(100vh - var(--vp-nav-height, 64px));
}

.scalar-api-container [id] {
  scroll-margin-top: calc(var(--vp-nav-height, 64px) + 16px);
}

.scalar-api-container .scalar-app.z-overlay {
  pointer-events: none;
}

.scalar-api-container .scalar-app.z-overlay * {
  pointer-events: auto;
}

.scalar-api-container .open-api-client-button,
.scalar-api-container .darklight-reference {
  display: none !important;
}

.api-reference-page .VPDoc {
  padding: 0 !important;
}

.api-reference-page .VPDoc .container,
.api-reference-page .VPDoc .content,
.api-reference-page .VPDoc .content-container,
.api-reference-page .VPDoc main {
  max-width: none !important;
  width: 100% !important;
}

.api-reference-page .VPDoc .content {
  padding: 0 !important;
}

.api-reference-page .vp-doc {
  padding: 0 !important;
}
</style>
