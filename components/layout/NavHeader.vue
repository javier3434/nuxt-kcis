<script setup>
import logoEn from '~/assets/images/logo-en.JPG'
import logoVi from '~/assets/images/logo-vi.JPG'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const route = useRoute()

const isMenuOpen = ref(false)
const isDesktopMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleDesktopMenu = () => {
  isDesktopMenuOpen.value = !isDesktopMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const closeDesktopMenu = () => {
  isDesktopMenuOpen.value = false
}

const handleClickOutside = (event) => {
  if (isDesktopMenuOpen.value && !event.target.closest('.relative')) {
    closeDesktopMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const navItems = computed(() => [
  { name: 'nav.home', path: localePath('/'), active: route.path === localePath('/') },
  { name: 'nav.about', path: localePath('/about'), active: route.path.startsWith(localePath('/about')) },
  { name: 'nav.services', path: localePath('/services'), active: route.path.startsWith(localePath('/services')) },
  // { name: 'nav.projects', path: localePath('/projects'), active: route.path.startsWith(localePath('/projects')) },
  // { name: 'nav.info', path: localePath('/info'), active: route.path.startsWith(localePath('/info')) },
  { name: 'nav.careers', path: localePath('/careers'), active: route.path.startsWith(localePath('/careers')) },
  { name: 'nav.contact', path: localePath('/contact'), active: route.path.startsWith(localePath('/contact')) },
])

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

// 根据当前语言选择对应的logo
const currentLogo = computed(() => {
  switch (locale.value) {
    case 'vi':
      return logoVi
    case 'en':
      return logoEn
    case 'zh-Hant':
    default:
      return logoEn
  }
})
</script>

<template>
  <header class="bg-white shadow-sm !fixed !top-0 !left-0 !right-0 !z-50">
    <div class="container mx-auto py-0 px-4 md:px-0">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img :src="currentLogo" alt="KCIS Logo" class="h-16 md:h-24 w-auto object-contain" />
        </NuxtLink>

        <!-- Desktop Menu - Large screens (1300px+) -->
        <nav class="hidden xl:flex items-center space-x-6">
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
              <UIcon name="i-heroicons-language" class="w-4 h-4 mr-2" />
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

        <!-- Medium Desktop Menu - Medium screens (768px-1299px) -->
        <div class="hidden md:flex xl:hidden items-center space-x-4">

          <!-- Menu Toggle Button -->
          <div class="relative group">
            <button 
              @click="toggleDesktopMenu"
              class="flex items-center px-3 py-2 hover:text-red-600 transition-colors"
            >
              <UIcon name="i-heroicons-bars-3" class="w-5 h-5 mr-1" />
              菜單
            </button>
            
            <!-- Dropdown Menu -->
            <div class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
              <div class="py-1">
                <NuxtLink
                  v-for="item in navItems"
                  :key="item.name"
                  :to="item.path"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  :class="{ 'text-red-600 bg-red-50': item.active }"
                >
                  {{ $t(item.name) }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- Language Switcher - Always visible -->
          <div class="relative group">
            <button class="flex items-center">
              <UIcon name="i-heroicons-language" class="w-4 h-4 mr-2" />
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

        </div>

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
          <p class="text-gray-500 mb-2 flex items-center">
            <UIcon name="i-heroicons-language" class="w-4 h-4 mr-2" />
            {{ $t('lang.title') }}
          </p>
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
