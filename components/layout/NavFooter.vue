<script setup>
// 页脚组件
</script>

<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 公司信息 -->
        <div>
          <h4 class="text-lg font-medium mb-4">KCIS</h4>
          <p class="mb-2">{{ $t('site.description') }}</p>
          <p>© {{ new Date().getFullYear() }} KCIS. All rights reserved.</p>
        </div>
        
        <!-- 快速链接 -->
        <div>
          <h4 class="text-lg font-medium mb-4">{{ $t('footer.quickLinks') }}</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="hover:text-gray-300 transition-colors">{{ $t('nav.home') }}</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-gray-300 transition-colors">{{ $t('nav.about') }}</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-gray-300 transition-colors">{{ $t('nav.services') }}</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-gray-300 transition-colors">{{ $t('nav.contact') }}</NuxtLink></li>
          </ul>
        </div>
        
        <!-- 联系信息 -->
        <div>
          <h4 class="text-lg font-medium mb-4">{{ $t('footer.contact') }}</h4>
          <p class="flex items-center mb-2">
            <UIcon name="i-heroicons-map-pin" class="mr-2 w-5 h-5" />
            <span>123 KCIS Road, Hong Kong</span>
          </p>
          <p class="flex items-center mb-2">
            <UIcon name="i-heroicons-phone" class="mr-2 w-5 h-5" />
            <span>+852 1234 5678</span>
          </p>
          <p class="flex items-center">
            <UIcon name="i-heroicons-envelope" class="mr-2 w-5 h-5" />
            <span>info@kcis.com</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* 添加需要的样式 */
</style>
