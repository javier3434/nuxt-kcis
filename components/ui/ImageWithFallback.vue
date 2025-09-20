<template>
  <div class="relative w-full h-full">
    <!-- 加載器 -->
    <div 
      v-if="isLoading" 
      class="absolute inset-0 bg-gray-100 flex items-center justify-center"
      :style="{ width, height }"
      role="presentation"
    >
      <div class="animate-pulse w-full h-full bg-gray-200"></div>
    </div>
    
    <!-- 實際圖片 -->
    <img
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover transition-opacity duration-300"
      :class="{'opacity-0': isLoading, 'opacity-100': !isLoading && !imageError}"
      v-show="!imageError"
      :loading="eager ? 'eager' : 'lazy'" 
      :fetchpriority="eager ? 'high' : 'auto'"
      :width="imageWidth"
      :height="imageHeight"
      decoding="async"
      :srcset="srcset"
      :sizes="sizes"
      @error="handleImageError"
      @load="handleImageLoaded"
    />
    
    <!-- 占位圖 -->
    <div 
      v-show="imageError" 
      class="absolute inset-0 bg-gray-200 flex items-center justify-center transition-opacity duration-300"
      :style="{ width, height }"
      role="presentation"
    >
      <div class="text-gray-400 flex flex-col items-center">
        <UIcon name="i-heroicons-photo" class="w-12 h-12 mb-2" />
        <span class="text-sm">{{ placeholder || '圖片無法載入' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  // 圖片尺寸和內容框尺寸
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  // 圖片真實尺寸屬性，用於避免佈局偏移
  imageWidth: {
    type: [Number, String],
    default: undefined
  },
  imageHeight: {
    type: [Number, String],
    default: undefined
  },
  // 是否為高優先級圖片，如英雄圖片應設為true
  eager: {
    type: Boolean,
    default: false
  },
  // 體驗式圖片相關屬性
  srcset: {
    type: String,
    default: ''
  },
  sizes: {
    type: String,
    default: ''
  }
});

const imageError = ref(false);
const isLoading = ref(true);

// 處理圖片載入錯誤
const handleImageError = () => {
  imageError.value = true;
  isLoading.value = false;
};

// 處理圖片載入完成
const handleImageLoaded = () => {
  isLoading.value = false;
};

// 在組件銷毀前中斷任何可能的請求
const cleanup = () => {
  imageError.value = false;
  isLoading.value = true;
};

// 當組件卸載時清理
onBeforeUnmount(() => {
  cleanup();
});
</script>
