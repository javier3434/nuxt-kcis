<script setup>
definePageMeta({
  layout: 'default',
})
useHead({
  title: useI18n().t('nav.projects')
})

// 工程实绩数据
const projects = [
  {
    id: 1,
    title: '香港中心商業大廈項目',
    category: '商業建築',
    year: '2023',
    location: '香港中環',
    description: '為知名商業大廈提供全面的工程服務，包括系統升級和優化，提升建築整體運營效率。',
    image: '/placeholder-project.jpg',
    highlights: [
      '實施先進的智能建築系統',
      '優化能源管理，降低運營成本',
      '提升用戶體驗和安全標準'
    ]
  },
  {
    id: 2,
    title: '九龍灣科技園區開發',
    category: '工業建築',
    year: '2022',
    location: '香港九龍灣',
    description: '參與九龍灣科技園區的規劃和開發，提供專業技術支持和項目管理服務。',
    image: '/placeholder-project.jpg',
    highlights: [
      '協助規劃和設計現代化科技園區',
      '實施創新的基礎設施解決方案',
      '確保項目按時、按預算完成'
    ]
  },
  {
    id: 3,
    title: '沙田住宅社區項目',
    category: '住宅建築',
    year: '2021',
    location: '香港沙田',
    description: '為大型住宅社區提供全面的工程諮詢和服務，確保項目符合現代生活標準和環保要求。',
    image: '/placeholder-project.jpg',
    highlights: [
      '設計符合可持續發展原則的居住環境',
      '採用環保材料和節能技術',
      '創造舒適、安全的生活空間'
    ]
  },
  {
    id: 4,
    title: '中環辦公樓翻新工程',
    category: '建築翻新',
    year: '2020',
    location: '香港中環',
    description: '為歷史悠久的辦公樓進行全面翻新，保留建築特色的同時提升現代功能和效率。',
    image: '/placeholder-project.jpg',
    highlights: [
      '平衡歷史保護與現代化需求',
      '更新基礎設施和技術系統',
      '提高空間利用率和工作環境質量'
    ]
  },
  {
    id: 5,
    title: '將軍澳數據中心建設',
    category: '特殊建築',
    year: '2019',
    location: '香港將軍澳',
    description: '參與大型數據中心的建設項目，提供專業技術方案和系統集成服務。',
    image: '/placeholder-project.jpg',
    highlights: [
      '設計高效能、高可靠性的數據中心',
      '實施先進的冷卻和電力系統',
      '確保設施符合國際標準和安全要求'
    ]
  },
  {
    id: 6,
    title: '屯門教育設施擴建',
    category: '公共建築',
    year: '2018',
    location: '香港屯門',
    description: '為教育機構提供擴建服務，增加教學空間和設施，提升教育環境質量。',
    image: '/placeholder-project.jpg',
    highlights: [
      '設計現代化的教學空間和設施',
      '確保建設過程不影響正常教學活動',
      '創造激發創造力和學習興趣的環境'
    ]
  }
]

// 项目分类
const categories = ['全部', '商業建築', '工業建築', '住宅建築', '建築翻新', '特殊建築', '公共建築']
const selectedCategory = ref('全部')

// 根据分类筛选项目
const filteredProjects = computed(() => {
  if (selectedCategory.value === '全部') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})
</script>

<template>
  <div>
    <!-- 工程实绩横幅 -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ $t('nav.projects') }}</h1>
        <p class="text-xl text-gray-600">我們成功完成的工程實績案例</p>
      </div>
    </section>

    <!-- 项目筛选 -->
    <section class="py-8 border-b">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            class="px-4 py-2 rounded-md transition-colors"
            :class="selectedCategory === category ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- 项目列表 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="h-48 bg-gray-200 flex items-center justify-center">
              <p class="text-gray-500">項目圖片</p>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-3">
                <h3 class="text-xl font-bold">{{ project.title }}</h3>
                <span class="bg-red-100 text-red-600 text-sm px-2 py-1 rounded">{{ project.year }}</span>
              </div>
              <p class="text-gray-500 mb-3">{{ project.location }} | {{ project.category }}</p>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              
              <div class="mb-4">
                <h4 class="font-semibold mb-2">亮點：</h4>
                <ul class="list-disc list-inside text-gray-600 space-y-1">
                  <li v-for="(highlight, index) in project.highlights" :key="index">{{ highlight }}</li>
                </ul>
              </div>
              
              <button class="text-red-600 hover:text-red-700 font-medium flex items-center">
                查看詳情
                <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户评价 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center">客戶評價</h2>
          
          <div class="space-y-6">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 class="font-bold">陳小姐</h4>
                  <p class="text-gray-500">香港中心商業大廈</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "KCIS的專業團隊為我們提供了出色的服務，他們不僅按時完成了項目，還提供了許多創新的解決方案，大大提升了我們建築的運營效率。"
              </p>
              <div class="flex text-yellow-400 mt-4">
                <Icon name="heroicons:star-solid" class="w-5 h-5" />
                <Icon name="heroicons:star-solid" class="w-5 h-5" />
                <Icon name="heroicons:star-solid" class="w-5 h-5" />
                <Icon name="heroicons:star-solid" class="w-5 h-5" />
                <Icon name="heroicons:star-solid" class="w-5 h-5" />
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-lg shadow-md">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 class="font-bold">李先生</h4>
                  <p class="text-gray-500">沙田住宅社區</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "與KCIS合作是一次非常愉快的經歷。他們的團隊非常專業，能夠理解我們的需求並提供有效的解決方案。最終的項目成果超出了我們的預期。"
              </p>
              <div class="flex text-yellow-400 mt-4">
                <Icon name="heroicons:star-solid" class="w-5 h-5" />
                <Icon name="heroicons:star-solid" class="w-5 h-5" />
                <Icon name="heroicons:star-solid" class="w-5 h-5" />
                <Icon name="heroicons:star-solid" class="w-5 h-5" />
                <Icon name="heroicons:star-solid" class="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作咨询 -->
    <section class="py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">需要我們的專業服務？</h2>
        <p class="text-xl text-gray-600 mb-8">讓我們一起討論您的項目需求</p>
        <NuxtLink to="/contact" class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block">
          聯繫我們
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
