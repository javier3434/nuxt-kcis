<script setup>
definePageMeta({
  layout: 'default',
})
useHead({
  title: useI18n().t('nav.careers')
})

// 职位列表数据
const jobs = [
  {
    id: 1,
    title: '高級工程師',
    department: '工程部',
    type: '全職',
    location: '南越',
    publishDate: '2025-09-20',
    description: '負責主管行程安排聯繫、相關秘書行政事務及主管交辦任務，不用出差。',
    // jobDuties: [
    //   '設計和實施複雜的工程解決方案',
    //   '提供技術指導和支持',
    //   '參與項目規劃和執行',
    //   '進行技術評估和報告',
    //   '維護和更新技術文檔'
    // ],
    requirements: [
      '碩士畢業',
      '具公司總經理級(含)以上秘書工作經驗5年以上者',
      '熟悉OFFICE文書作業軟體',
      '諳國、台語；英文多益成績需達700分以上',
      '工作積極、細心，具良好溝通能力',
    ],
    benefits: [
      '月薪8.4萬元',
      '試用期滿9萬元以上',
      '年終獎金3個月或以上',
      '有相關經驗依年資核加經驗薪或面議'
    ]
  },
]

// 职位类型筛选
const jobTypes = ['全部', '全職', '兼職', '實習']
const selectedType = ref('全部')

// 根据类型筛选职位
const filteredJobs = computed(() => {
  if (selectedType.value === '全部') {
    return jobs
  }
  return jobs.filter(job => job.type === selectedType.value)
})
</script>

<template>
  <div>
    <!-- 企业征才横幅 -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ $t('nav.careers') }}</h1>
        <p class="text-xl text-gray-600">加入KCIS，開啟您的職業新篇章</p>
      </div>
    </section>

    <!-- 公司文化 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-bold mb-6">我們的文化</h2>
          <p class="text-gray-600">
            KCIS致力於創造一個鼓勵創新、尊重多元、促進成長的工作環境。我們相信，只有員工不斷成長，公司才能持續發展。我們重視每一位員工的貢獻，提供各種機會讓員工展現才能，實現職業目標。
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="text-red-600 mb-4 flex justify-center">
              <Icon name="heroicons:light-bulb" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-bold mb-3">創新精神</h3>
            <p class="text-gray-600">
              我們鼓勵員工提出創新想法，挑戰常規，追求卓越。
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="text-red-600 mb-4 flex justify-center">
              <Icon name="heroicons:user-group" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-bold mb-3">團隊合作</h3>
            <p class="text-gray-600">
              我們重視團隊協作，相信通過共同努力可以實現更大的目標。
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="text-red-600 mb-4 flex justify-center">
              <Icon name="heroicons:academic-cap" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-bold mb-3">持續學習</h3>
            <p class="text-gray-600">
              我們提供各種學習和發展機會，幫助員工不斷提升專業能力。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 员工福利 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">員工福利</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-start mb-4">
              <div class="text-red-600 mr-4">
                <Icon name="heroicons:currency-dollar" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">具競爭力的薪酬</h3>
                <p class="text-gray-600">
                  我們提供行業內具競爭力的薪酬待遇，認可員工的貢獻和價值。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-start mb-4">
              <div class="text-red-600 mr-4">
                <Icon name="heroicons:heart" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">醫療保險</h3>
                <p class="text-gray-600">
                  我們為員工提供全面的醫療保險計劃，確保員工的健康與福祉。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-start mb-4">
              <div class="text-red-600 mr-4">
                <Icon name="heroicons:chart-bar" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">職業發展</h3>
                <p class="text-gray-600">
                  我們提供多樣化的培訓和發展機會，幫助員工實現職業目標。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-start mb-4">
              <div class="text-red-600 mr-4">
                <Icon name="heroicons:cake" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">工作生活平衡</h3>
                <p class="text-gray-600">
                  我們鼓勵員工保持健康的工作生活平衡，提供彈性工作安排。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 职位列表 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-6 text-center">職位空缺</h2>
        <p class="text-center text-gray-600 mb-12">
          探索KCIS的職業機會，加入我們的專業團隊
        </p>
        
        <!-- 职位类型筛选 -->
        <div class="flex justify-center mb-8">
          <div class="flex flex-wrap gap-4">
            <button 
              v-for="type in jobTypes" 
              :key="type"
              @click="selectedType = type"
              class="px-4 py-2 rounded-md transition-colors"
              :class="selectedType === type ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            >
              {{ type }}
            </button>
          </div>
        </div>
        
        <!-- 職位列表 -->
        <div class="space-y-6">
          <div 
            v-for="job in filteredJobs" 
            :key="job.id"
            class="bg-white p-6 rounded-lg shadow-md"
          >
            <div class="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <h3 class="text-xl font-bold">{{ job.title }}</h3>
              <div class="flex flex-wrap gap-2 mt-2 md:mt-0">
                <span class="bg-red-100 text-red-600 text-sm px-2 py-1 rounded">{{ job.department }}</span>
                <span class="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded">{{ job.type }}</span>
                <span class="bg-green-100 text-green-600 text-sm px-2 py-1 rounded">{{ job.location }}</span>
                <span class="bg-yellow-100 text-yellow-600 text-sm px-2 py-1 rounded">{{ job.publishDate }}</span>
              </div>
            </div>
            
            <p class="text-gray-600 mb-4">{{ job.description }}</p>
            
            <div class="mb-4">
              <h4 class="font-semibold mb-2">工作內容：</h4>
              <ul class="list-disc list-inside text-gray-600 space-y-1">
                <li v-for="(duty, index) in job.jobDuties" :key="index">{{ duty }}</li>
              </ul>
            </div>
            
            <div class="mb-4">
              <h4 class="font-semibold mb-2">要求：</h4>
              <ul class="list-disc list-inside text-gray-600 space-y-1">
                <li v-for="(requirement, index) in job.requirements" :key="index">{{ requirement }}</li>
              </ul>
            </div>
            
            <div class="mb-6">
              <h4 class="font-semibold mb-2">福利：</h4>
              <ul class="list-disc list-inside text-gray-600 space-y-1">
                <li v-for="(benefit, index) in job.benefits" :key="index">{{ benefit }}</li>
              </ul>
            </div>
            
            <!-- <button class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
              立即應聘
            </button> -->
          </div>
        </div>
      </div>
    </section>

    <!-- 应聘流程 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center">應聘流程</h2>
          
          <div class="relative">
            <!-- 垂直连接线 -->
            <div class="absolute left-4 top-6 bottom-6 w-0.5 bg-red-200 hidden md:block"></div>
            
            <div class="space-y-8">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/6 flex justify-center md:justify-start">
                  <div class="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-10">
                    1
                  </div>
                </div>
                <div class="md:w-5/6 mt-4 md:mt-0">
                  <h3 class="text-xl font-bold mb-2">提交申請</h3>
                  <p class="text-gray-600">
                    選擇適合的職位，提交您的申請，包括簡歷和求職信。
                  </p>
                </div>
              </div>
              
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/6 flex justify-center md:justify-start">
                  <div class="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-10">
                    2
                  </div>
                </div>
                <div class="md:w-5/6 mt-4 md:mt-0">
                  <h3 class="text-xl font-bold mb-2">初步篩選</h3>
                  <p class="text-gray-600">
                    我們的招聘團隊會審核您的申請材料，確認是否符合職位要求。
                  </p>
                </div>
              </div>
              
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/6 flex justify-center md:justify-start">
                  <div class="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-10">
                    3
                  </div>
                </div>
                <div class="md:w-5/6 mt-4 md:mt-0">
                  <h3 class="text-xl font-bold mb-2">面試</h3>
                  <p class="text-gray-600">
                    通過初步篩選後，我們會安排面試，進一步了解您的能力和經驗。
                  </p>
                </div>
              </div>
              
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/6 flex justify-center md:justify-start">
                  <div class="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-10">
                    4
                  </div>
                </div>
                <div class="md:w-5/6 mt-4 md:mt-0">
                  <h3 class="text-xl font-bold mb-2">評估和決定</h3>
                  <p class="text-gray-600">
                    面試後，我們會綜合評估您的表現，做出錄用決定。
                  </p>
                </div>
              </div>
              
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/6 flex justify-center md:justify-start">
                  <div class="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-10">
                    5
                  </div>
                </div>
                <div class="md:w-5/6 mt-4 md:mt-0">
                  <h3 class="text-xl font-bold mb-2">錄用通知</h3>
                  <p class="text-gray-600">
                    如果您被錄用，我們會發出正式的錄用通知，並協助您完成入職流程。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 加入我们 -->
    <section class="py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">準備好加入我們了嗎？</h2>
        <p class="text-xl text-gray-600 mb-8">
          探索KCIS的職業機會，開啟您的專業發展之旅
        </p>
      </div>
    </section>
  </div>
</template>
