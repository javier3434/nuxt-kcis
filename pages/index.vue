<script setup>
definePageMeta({
  layout: 'default',
})
useHead({
  title: useI18n().t('nav.home')
})

// 首页服务项目数据
const services = [
  {
    icon: 'heroicons:code-bracket',
    title: '服務 1',
    description: '專業的服務項目描述，提供優質的解決方案。'
  },
  {
    icon: 'heroicons:rectangle-stack',
    title: '服務 2',
    description: '專業的服務項目描述，提供優質的解決方案。'
  },
  {
    icon: 'heroicons:chart-bar',
    title: '服務 3',
    description: '專業的服務項目描述，提供優質的解決方案。'
  },
  {
    icon: 'heroicons:light-bulb',
    title: '服務 4',
    description: '專業的服務項目描述，提供優質的解決方案。'
  }
]

// 工程實績數據
const projects = [
  {
    id: 1,
    title: '工程項目 1',
    description: '專案簡介說明，包含地點及完成時間。',
    image: '/placeholder-image.jpg'
  },
  {
    id: 2,
    title: '工程項目 2',
    description: '專案簡介說明，包含地點及完成時間。',
    image: '/placeholder-image.jpg'
  },
  {
    id: 3,
    title: '工程項目 3',
    description: '專案簡介說明，包含地點及完成時間。',
    image: '/placeholder-image.jpg'
  }
]
</script>

<template>
  <div>
    <!-- 首页横幅 -->
    <section class="bg-gray-100 py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl">
          <h1 class="text-5xl font-bold mb-6 text-gray-800">KCIS</h1>
          <p class="text-xl text-gray-600 mb-8">{{ $t('site.description') }}</p>
          <NuxtLink to="/contact" class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block">
            {{ $t('nav.contact') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 关于我们简介 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-10">
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold mb-6 text-gray-800">{{ $t('nav.about') }}</h2>
            <p class="text-gray-600 mb-6">
              KCIS是一家專業的企業，提供高質量的服務和解決方案。我們擁有多年的行業經驗，致力於為客戶提供最佳的服務體驗。
            </p>
            <p class="text-gray-600 mb-6">
              我們的團隊由經驗豐富的專業人員組成，能夠為各種規模的項目提供專業支持和建議。
            </p>
            <NuxtLink to="/about" class="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
              了解更多
              <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
            </NuxtLink>
          </div>
          <div class="md:w-1/2 bg-gray-200 h-80 flex items-center justify-center">
            <p class="text-gray-500">公司圖片位置</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务项目 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">{{ $t('nav.services') }}</h2>
          <p class="text-gray-600 mt-4">我們提供多樣化的專業服務，滿足您的各種需求</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="text-red-600 mb-4">
              <Icon :name="service.icon" class="w-10 h-10" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/services" class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block">
            查看所有服務
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 工程实绩 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">{{ $t('nav.projects') }}</h2>
          <p class="text-gray-600 mt-4">我們成功完成的項目案例</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="project in projects" 
            :key="project.id"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="h-48 bg-gray-200 flex items-center justify-center">
              <p class="text-gray-500">項目圖片位置</p>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">{{ project.title }}</h3>
              <p class="text-gray-600">{{ project.description }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/projects" class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block">
            查看所有項目
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">{{ $t('nav.contact') }}</h2>
          <p class="text-gray-600 mt-4">隨時聯繫我們，了解更多信息或獲取專業建議</p>
        </div>
        
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
              <h3 class="text-xl font-semibold mb-4">聯繫信息</h3>
              <div class="space-y-4">
                <p class="flex items-start">
                  <Icon name="heroicons:map-pin" class="mr-3 w-5 h-5 text-red-600 mt-1" />
                  <span>香港九龍灣企業廣場123號</span>
                </p>
                <p class="flex items-start">
                  <Icon name="heroicons:phone" class="mr-3 w-5 h-5 text-red-600 mt-1" />
                  <span>+852 1234 5678</span>
                </p>
                <p class="flex items-start">
                  <Icon name="heroicons:envelope" class="mr-3 w-5 h-5 text-red-600 mt-1" />
                  <span>info@kcis.com</span>
                </p>
              </div>
            </div>
            
            <div class="md:w-1/2">
              <NuxtLink to="/contact" class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block w-full text-center">
                聯繫我們
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
