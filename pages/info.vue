<script setup>
definePageMeta({
  layout: 'default',
})
useHead({
  title: useI18n().t('nav.info')
})

// 资讯中心数据
const news = [
  {
    id: 1,
    title: 'KCIS獲得2025年行業創新獎',
    category: '公司新聞',
    date: '2025-08-25',
    summary: 'KCIS憑藉在智能建築領域的創新解決方案，榮獲2025年度行業創新獎。',
    content: '近日，KCIS憑藉在智能建築領域的創新解決方案，榮獲2025年度行業創新獎。該獎項是對公司在技術創新和服務品質方面卓越表現的認可。KCIS的解決方案在提高建築能源效率和用戶體驗方面取得了顯著成效，受到了行業專家的一致好評。',
    image: '/placeholder-news.jpg',
    tags: ['獎項', '創新', '智能建築']
  },
  {
    id: 2,
    title: 'KCIS與越南科技大學展開技術合作',
    category: '合作夥伴',
    date: '2025-07-15',
    summary: 'KCIS與越南科技大學簽署合作協議，共同推進建築技術創新研究。',
    content: 'KCIS與越南科技大學工程學院正式簽署合作協議，雙方將在建築技術創新領域展開深入合作。此次合作將結合KCIS的行業實踐經驗和越南科技大學的學術研究優勢，共同推進建築技術的創新發展，培養相關領域的人才。',
    image: '/placeholder-news.jpg',
    tags: ['合作', '教育', '技術研發']
  },
  {
    id: 3,
    title: '綠色建築：KCIS的可持續發展方案',
    category: '技術文章',
    date: '2025-06-10',
    summary: 'KCIS分享綠色建築解決方案，助力行業可持續發展。',
    content: '隨著環保意識的增強，綠色建築成為行業發展的重要方向。KCIS基於多年的項目經驗，開發了一系列綠色建築解決方案，包括能源管理系統、智能控制平台等，有效降低建築能耗，減少碳排放，為行業可持續發展做出貢獻。',
    image: '/placeholder-news.jpg',
    tags: ['綠色建築', '可持續發展', '技術方案']
  },
  {
    id: 4,
    title: 'KCIS完成九龍灣大型商業項目',
    category: '項目新聞',
    date: '2025-05-20',
    summary: 'KCIS成功完成九龍灣大型商業項目，展現專業實力。',
    content: 'KCIS近日成功完成位於九龍灣的大型商業項目，該項目包括智能建築系統、能源管理平台等多項創新技術的應用，不僅提高了建築的運營效率，還為用戶創造了舒適、便捷的環境。項目的順利完成再次展現了KCIS的專業實力和項目管理能力。',
    image: '/placeholder-news.jpg',
    tags: ['項目', '商業建築', '案例分享']
  },
  {
    id: 5,
    title: '數字化轉型：建築行業的新機遇',
    category: '行業趨勢',
    date: '2025-04-15',
    summary: 'KCIS解析建築行業數字化轉型趨勢及機遇。',
    content: '數字化轉型正在重塑建築行業的發展模式和競爭格局。KCIS基於對行業趨勢的深入分析，認為數字化轉型將為建築行業帶來效率提升、成本降低和用戶體驗改善等多方面的機遇。企業應積極擁抱數字化技術，推動業務模式創新和服務升級。',
    image: '/placeholder-news.jpg',
    tags: ['數字化', '行業趨勢', '技術創新']
  },
  {
    id: 6,
    title: 'KCIS參加2025越南建築技術展',
    category: '活動新聞',
    date: '2025-03-10',
    summary: 'KCIS亮相2025越南建築技術展，展示最新解決方案。',
    content: 'KCIS作為行業領先企業參加了2025越南建築技術展，展示了公司最新的智能建築解決方案和技術成果。展會期間，KCIS的展台吸引了眾多參觀者的關注，公司代表還應邀在技術論壇上發表演講，分享了對行業發展趨勢的見解。',
    image: '/placeholder-news.jpg',
    tags: ['展會', '技術展示', '行業活動']
  }
]

// 筛选选项
const categories = ['全部', '公司新聞', '項目新聞', '技術文章', '行業趨勢', '活動新聞', '合作夥伴']
const selectedCategory = ref('全部')

// 根据分类筛选新闻
const filteredNews = computed(() => {
  if (selectedCategory.value === '全部') {
    return news
  }
  return news.filter(item => item.category === selectedCategory.value)
})
</script>

<template>
  <div>
    <!-- 资讯中心横幅 -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ $t('nav.info') }}</h1>
        <p class="text-xl text-gray-600">了解KCIS的最新动态和行业资讯</p>
      </div>
    </section>

    <!-- 资讯筛选 -->
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

    <!-- 资讯列表 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="item in filteredNews" 
            :key="item.id"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="h-48 bg-gray-200 flex items-center justify-center">
              <p class="text-gray-500">新聞圖片</p>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <span class="bg-red-100 text-red-600 text-sm px-2 py-1 rounded">{{ item.category }}</span>
                <span class="text-gray-500 text-sm">{{ item.date }}</span>
              </div>
              <h3 class="text-xl font-bold mb-3">{{ item.title }}</h3>
              <p class="text-gray-600 mb-4">{{ item.summary }}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="(tag, index) in item.tags" 
                  :key="index"
                  class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                >
                  #{{ tag }}
                </span>
              </div>
              
              <button class="text-red-600 hover:text-red-700 font-medium flex items-center">
                閱讀更多
                <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 订阅信息 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">訂閱我們的資訊</h2>
          <p class="text-gray-600 mb-8">
            訂閱KCIS的電子通訊，獲取最新的公司動態、行業趨勢和技術資訊。
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="您的電子郵件" 
              class="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
              訂閱
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 资源下载 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">資源中心</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-red-600 mb-4">
              <Icon name="heroicons:document-text" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-bold mb-3">技術白皮書</h3>
            <p class="text-gray-600 mb-4">
              下載我們的技術白皮書，了解行業最新技術發展和應用案例。
            </p>
            <button class="text-red-600 hover:text-red-700 font-medium flex items-center">
              下載白皮書
              <Icon name="heroicons:arrow-down-tray" class="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-red-600 mb-4">
              <Icon name="heroicons:presentation-chart-line" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-bold mb-3">案例研究</h3>
            <p class="text-gray-600 mb-4">
              查看我們的成功案例研究，了解我們如何幫助客戶解決實際問題。
            </p>
            <button class="text-red-600 hover:text-red-700 font-medium flex items-center">
              查看案例
              <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-red-600 mb-4">
              <Icon name="heroicons:video-camera" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-bold mb-3">視頻資料</h3>
            <p class="text-gray-600 mb-4">
              觀看我們的技術演示和專家訪談視頻，獲取更直觀的信息。
            </p>
            <button class="text-red-600 hover:text-red-700 font-medium flex items-center">
              觀看視頻
              <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center">常見問題</h2>
          
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-3">如何獲取KCIS的最新資訊？</h3>
              <p class="text-gray-600">
                您可以通過訂閱我們的電子通訊、關注社交媒體賬號或定期訪問本網站的資訊中心頁面獲取KCIS的最新資訊。
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-3">如何下載技術資料？</h3>
              <p class="text-gray-600">
                您可以在本頁面的「資源中心」部分找到各類技術資料，點擊相應的下載按鈕即可獲取資料。部分專業資料可能需要填寫簡單的表單後才能下載。
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-3">如何聯繫KCIS獲取更多信息？</h3>
              <p class="text-gray-600">
                如需獲取更多信息，您可以通過「聯繫我們」頁面填寫表單，或直接致電我們的客戶服務熱線。我們的團隊將很樂意為您提供幫助。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
