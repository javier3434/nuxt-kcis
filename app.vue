<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - KCIS` : 'KCIS'
  }
})

const isLoading = ref(true)

onMounted(() => {
  // 模拟加载时间
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>

<template>
  <div>
    <!-- 自定义加载页面 -->
    <!-- <AppLoading v-show="isLoading" /> -->
    
    <!-- 主要内容 -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
