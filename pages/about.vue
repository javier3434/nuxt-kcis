<script setup>
definePageMeta({
  layout: 'default',
})
useHead({
  title: useI18n().t('nav.about')
})

// 团队成员数据
const team = [
  {
    name: '陳文杰',
    title: '執行總監',
    photo: '/placeholder-team.jpg',
    description: '擁有超過15年的行業經驗，負責公司整體戰略規劃和業務發展。'
  },
  {
    name: '李明德',
    title: '技術總監',
    photo: '/placeholder-team.jpg',
    description: '專業工程師，擁有多個領域的專業資質，負責項目技術管理。'
  },
  {
    name: '黃詩婷',
    title: '市場總監',
    photo: '/placeholder-team.jpg',
    description: '擅長市場策略和客戶關係管理，負責公司品牌推廣和市場拓展。'
  }
]

// 公司历史里程碑
const milestones = [
  {
    year: '2010',
    title: '公司成立',
    description: 'KCIS在香港成立，開始提供專業服務。'
  },
  {
    year: '2015',
    title: '業務擴展',
    description: '擴展業務範圍，增加多項專業服務，客戶群體持續擴大。'
  },
  {
    year: '2018',
    title: '國際合作',
    description: '與國際夥伴建立戰略合作關係，開始承接跨國項目。'
  },
  {
    year: '2022',
    title: '技術創新',
    description: '引入新技術和解決方案，提升服務品質和效率。'
  },
  {
    year: '2025',
    title: '持續發展',
    description: '繼續擴大業務範圍，為更多客戶提供優質服務。'
  }
]
</script>

<template>
  <div>
    <!-- 关于我们横幅 -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ $t('nav.about') }}</h1>
        <p class="text-xl text-gray-600">了解KCIS的发展历程和企业使命</p>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">公司簡介</h2>
          
          <div class="bg-white p-8 rounded-lg shadow-md mb-8">
            <p class="text-gray-700 mb-6">
              KCIS成立於2010年，是一家專注於提供高品質專業服務的企業。我們擁有豐富的行業經驗和專業知識，致力於為客戶提供創新、高效的解決方案。
            </p>
            
            <p class="text-gray-700 mb-6">
              我們的業務範圍包括多個專業領域，透過整合各種資源和技術，為客戶提供全面的服務支持。我們的目標是成為行業內值得信賴的合作夥伴，與客戶共同成長和發展。
            </p>
            
            <p class="text-gray-700">
              多年來，KCIS已成功為眾多客戶提供了優質服務，贏得了良好的口碑和信譽。我們將繼續秉持專業、誠信、創新的理念，為客戶創造更大的價值。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 愿景和使命 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center">願景與使命</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <div class="text-red-600 mb-4">
                <Icon name="heroicons:eye" class="w-12 h-12" />
              </div>
              <h3 class="text-2xl font-bold mb-4">我們的願景</h3>
              <p class="text-gray-700">
                成為行業領先的專業服務提供者，以創新技術和優質服務贏得客戶的信任和認可，為社會發展做出積極貢獻。
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-lg shadow-md">
              <div class="text-red-600 mb-4">
                <Icon name="heroicons:flag" class="w-12 h-12" />
              </div>
              <h3 class="text-2xl font-bold mb-4">我們的使命</h3>
              <p class="text-gray-700">
                以客戶需求為導向，提供創新、高效的專業解決方案，協助客戶實現業務目標，同時促進行業標準的提升和可持續發展。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心价值观 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center">核心價值觀</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="text-red-600 mb-4 flex justify-center">
                <Icon name="heroicons:star" class="w-10 h-10" />
              </div>
              <h3 class="text-xl font-bold mb-3">專業卓越</h3>
              <p class="text-gray-700">
                堅持高標準的專業服務，不斷提升技術能力和服務品質。
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="text-red-600 mb-4 flex justify-center">
                <Icon name="heroicons:light-bulb" class="w-10 h-10" />
              </div>
              <h3 class="text-xl font-bold mb-3">創新思維</h3>
              <p class="text-gray-700">
                鼓勵創新思維和解決方案，適應不斷變化的市場需求。
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="text-red-600 mb-4 flex justify-center">
                <Icon name="heroicons:heart" class="w-10 h-10" />
              </div>
              <h3 class="text-xl font-bold mb-3">誠信合作</h3>
              <p class="text-gray-700">
                以誠信為基礎，與客戶、合作夥伴建立長期互利的合作關係。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center">發展歷程</h2>
          
          <div class="space-y-8">
            <div v-for="(item, index) in milestones" :key="index" class="flex flex-col md:flex-row">
              <div class="md:w-1/4 flex items-center justify-center mb-4 md:mb-0">
                <div class="bg-red-600 text-white text-xl font-bold py-3 px-6 rounded-lg">
                  {{ item.year }}
                </div>
              </div>
              <div class="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                <p class="text-gray-700">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">核心團隊</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(member, index) in team" :key="index" class="bg-white rounded-lg overflow-hidden shadow-md">
            <div class="h-64 bg-gray-200 flex items-center justify-center">
              <p class="text-gray-500">團隊成員照片</p>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-1">{{ member.name }}</h3>
              <p class="text-red-600 mb-4">{{ member.title }}</p>
              <p class="text-gray-700">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
