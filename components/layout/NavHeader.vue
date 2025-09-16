<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const navItems = computed(() => [
  { name: 'nav.home', path: '/', active: route.path === '/' },
  { name: 'nav.about', path: '/about', active: route.path.startsWith('/about') },
  { name: 'nav.services', path: '/services', active: route.path.startsWith('/services') },
  { name: 'nav.projects', path: '/projects', active: route.path.startsWith('/projects') },
  { name: 'nav.info', path: '/info', active: route.path.startsWith('/info') },
  { name: 'nav.careers', path: '/careers', active: route.path.startsWith('/careers') },
  { name: 'nav.contact', path: '/contact', active: route.path.startsWith('/contact') },
])

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="font-bold text-xl">LOGO</NuxtLink>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center space-x-6">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            class="px-2 py-1 hover:text-red-600 transition-colors"
            :class="{ 'text-red-600 font-medium': item.active }"
          >
            {{ $t(item.name) }}
          </NuxtLink>

          <!-- Language Switcher -->
          <div class="relative group">
            <button class="flex items-center">
              {{ $t(`lang.${locale}`) }}
              <UIcon name="i-heroicons-chevron-down" class="ml-1 w-4 h-4" />
            </button>
            <div class="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <div class="py-1">
                <NuxtLink
                  v-for="loc in availableLocales"
                  :key="loc.code"
                  :to="switchLocalePath(loc.code)"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {{ $t(`lang.${loc.code}`) }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </nav>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="md:hidden">
          <UIcon v-if="!isMenuOpen" name="i-heroicons-bars-3" class="w-6 h-6" />
          <UIcon v-else name="i-heroicons-x-mark" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.path"
          @click="closeMenu"
          class="block py-2 hover:text-red-600 transition-colors"
          :class="{ 'text-red-600 font-medium': item.active }"
        >
          {{ $t(item.name) }}
        </NuxtLink>

        <!-- Mobile Language Switcher -->
        <div class="py-2 mt-2 border-t">
          <p class="text-gray-500 mb-2">{{ $t('lang.title') }}</p>
          <NuxtLink
            v-for="loc in locales"
            :key="loc.code"
            :to="switchLocalePath(loc.code)"
            @click="closeMenu"
            class="block py-2 hover:text-red-600 transition-colors"
            :class="{ 'text-red-600 font-medium': loc.code === locale }"
          >
            {{ loc.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* 添加需要的样式 */
</style>
