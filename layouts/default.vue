<script setup>
// 默认布局组件
import NavHeader from '~/components/layout/NavHeader.vue'
import NavFooter from '~/components/layout/NavFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <NavFooter />
  </div>
</template>
