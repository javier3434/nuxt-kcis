<script setup>
// 默认布局组件
import NavHeader from '~/components/layout/NavHeader.vue'
import NavFooter from '~/components/layout/NavFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavHeader />
    <main class="flex-grow pt-16 md:pt-24">
      <slot />
    </main>
    <NavFooter />
  </div>
</template>
