<script setup>
import { onMounted } from 'vue'
import ImageWithFallback from '~/components/ui/ImageWithFallback.vue'

definePageMeta({
  layout: 'default',
})
useHead({
  title: useI18n().t('nav.services')
})

// 用于追踪当前活动菜单项
const activeSection = ref('architecture-design');

// 处理导航点击事件
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = sectionId;
  }
};

// 监听滚动事件以更新活动菜单项
const setupScrollSpy = () => {
  if (process.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      },
      { threshold: 0.5 } // 当元素有50%进入视口时触发
    );

    // 监听所有内容区域
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });
  }
};

// 在组件挂载后设置滚动监听
onMounted(() => {
  setupScrollSpy();
});

// 导航菜单数据
const navigationItems = [
  {
    id: "architecture-design",
    title: "建築及室內設計",
    icon: "i-heroicons-home",
    children: [
      { title: "設計方案檢討與優化建議", image: "https://via.placeholder.com/500x300", alt: "住宅建築設計" },
      { title: "細部設計繪製與施工建議", image: "https://via.placeholder.com/500x300", alt: "商業空間設計" },
      { title: "室內與展場空間設計", image: "https://via.placeholder.com/500x300", alt: "辦公空間設計" },
      { title: "工業廠房與住宅建築設計", image: "https://via.placeholder.com/500x300", alt: "景觀設計" }
    ]
  },
  {
    id: "engineering-consulting",
    title: "工程顧問",
    icon: "i-heroicons-academic-cap",
    children: [
      { title: "招標文件編制", image: "https://via.placeholder.com/500x300", alt: "結構工程" },
      { title: "協助採購招標", image: "https://via.placeholder.com/500x300", alt: "機電工程" },
      { title: "工程顧問諮詢", image: "https://via.placeholder.com/500x300", alt: "土木工程" },
      { title: "政府許可申請及法規合規諮詢", image: "https://via.placeholder.com/500x300", alt: "環境工程" }
    ]
  },
  {
    id: "project-management",
    title: "專案管理",
    icon: "i-heroicons-clipboard-document-list",
    children: [
      { title: "專案整合規劃與管理", image: "https://via.placeholder.com/500x300", alt: "進度管理" },
      { title: "合約協調與管理", image: "https://via.placeholder.com/500x300", alt: "資源協調" },
      { title: "工程技術諮詢管理", image: "https://via.placeholder.com/500x300", alt: "質量控制" },
      // { title: "風險管理", image: "https://via.placeholder.com/500x300", alt: "風險管理" }
    ]
  },
  {
    id: "cost-control",
    title: "成本控管",
    icon: "i-heroicons-banknotes",
    children: [
      { title: "單價分析與成本估算", image: "https://via.placeholder.com/500x300", alt: "預算規劃" },
      { title: "工程量計算與預算編列", image: "https://via.placeholder.com/500x300", alt: "成本估算" },
      { title: "工程請款計價審核", image: "https://via.placeholder.com/500x300", alt: "支出監控" },
      { title: "竣工結算與成本控管", image: "https://via.placeholder.com/500x300", alt: "價值工程" }
    ]
  },
  {
    id: "construction-supervision",
    title: "施工監造",
    icon: "i-heroicons-wrench-screwdriver",
    children: [
      { title: "施工進度管控", image: "https://via.placeholder.com/500x300", alt: "施工現場監督" },
      { title: "現場施工監督與品質管控", image: "https://via.placeholder.com/500x300", alt: "品質檢驗" },
      { title: "隱蔽工程檢查與驗收", image: "https://via.placeholder.com/500x300", alt: "安全管理" },
      { title: "安全管理與跨單位協調", image: "https://via.placeholder.com/500x300", alt: "竣工驗收" }
    ]
  },
];
// 服务项目数据
const services = [
  {
    id: 1,
    icon: 'heroicons:code-bracket',
    title: '技術諮詢服務',
    description: '提供專業的技術諮詢服務，針對各類技術問題提供解決方案和專業建議。我們的專家團隊擁有豐富的行業經驗，能夠協助客戶解決各種技術挑戰。'
  },
  {
    id: 2,
    icon: 'heroicons:rectangle-stack',
    title: '項目管理服務',
    description: '提供全面的項目管理服務，從項目規劃、執行到監控和交付，確保項目按時、按質、按預算完成。我們採用先進的項目管理方法和工具，確保項目成功實施。'
  },
  {
    id: 3,
    icon: 'heroicons:chart-bar',
    title: '數據分析服務',
    description: '利用先進的數據分析技術，幫助客戶從海量數據中提取有價值的信息，支持決策制定。我們的分析師團隊具備專業的數據處理和分析能力，為客戶提供深入的數據洞察。'
  },
  {
    id: 4,
    icon: 'heroicons:light-bulb',
    title: '創新解決方案',
    description: '開發創新的解決方案，幫助客戶應對業務挑戰，提升競爭力。我們注重將前沿技術與實際業務需求相結合，為客戶提供具有創新性和實用性的解決方案。'
  },
  {
    id: 5,
    icon: 'heroicons:wrench-screwdriver',
    title: '系統優化服務',
    description: '為客戶現有系統提供優化服務，提升系統性能和效率。我們的技術團隊具備豐富的系統優化經驗，能夠識別系統瓶頸並實施有效的優化措施。'
  },
  {
    id: 6,
    icon: 'heroicons:academic-cap',
    title: '培訓與教育',
    description: '提供專業的培訓和教育服務，幫助客戶團隊掌握必要的知識和技能。我們的培訓課程由行業專家設計和授課，內容豐富且實用性強。'
  }
]

// 服务流程
const processes = [
  {
    step: 1,
    title: '需求分析',
    description: '深入了解客戶需求，分析業務流程和挑戰點'
  },
  {
    step: 2,
    title: '方案制定',
    description: '根據需求分析結果，制定專業的解決方案'
  },
  {
    step: 3,
    title: '方案實施',
    description: '按計劃執行解決方案，確保質量和進度'
  },
  {
    step: 4,
    title: '評估優化',
    description: '評估實施效果，進行必要的調整和優化'
  }
]
</script>

<template>
  <div>
    <!-- 服务横幅 -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ $t('nav.services') }}</h1>
        <p class="text-xl text-gray-600">我們為客戶提供專業、高效的服務</p>
      </div>
    </section>
    <!-- 主要内容区域 - 左右布局 -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- 左侧固定导航菜单 -->
          <aside class="lg:w-1/4 lg:sticky lg:top-28 lg:self-start">
            <div class="bg-white rounded-lg shadow-md p-6">
              <!-- <h3 class="text-lg font-bold mb-6 text-gray-800">導航菜單</h3> -->
              <nav class="space-y-2">
                <button
                  v-for="item in navigationItems"
                  :key="item.id"
                  :class="[
                    'flex items-center px-3 py-2 w-full text-left rounded-lg transition-colors',
                    activeSection === item.id 
                      ? 'bg-red-50 text-red-600 font-medium' 
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                  ]"
                  @click="scrollToSection(item.id)"
                >
                  <UIcon
                    :name="item.icon"
                    :class="[
                      'w-5 h-5 mr-2',
                      activeSection === item.id ? 'text-red-600' : 'text-gray-600'
                    ]"
                  />
                  <span class="font-medium">{{ item.title }}</span>
                </button>
              </nav>
            </div>
          </aside>

          <!-- 右侧内容区域 -->
          <main class="lg:w-3/4">
            <div class="space-y-16">
              <!-- 使用v-for循环生成每个服务类别的内容 -->
              <section 
                v-for="item in navigationItems" 
                :key="item.id"
                :id="item.id" 
                class="scroll-mt-8"
              >
                <div class="bg-white rounded-lg shadow-md p-8">
                  <h2 class="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                    <UIcon
                      :name="item.icon"
                      class="w-8 h-8 mr-3 text-red-600"
                    />
                    {{ item.title }}
                  </h2>

                  <div v-if="item.children" class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div 
                      v-for="(child, childIndex) in item.children" 
                      :key="`${item.id}-${childIndex}`"
                      class="mb-6 md:mb-0"
                    >
                      <div class="bg-gray-100 p-4 rounded-lg">
                        <div class="mb-4 rounded-lg overflow-hidden h-48">
                          <ImageWithFallback
                            :src="child.image"
                            :alt="child.alt"
                          />
                        </div>
                        <h3 class="font-semibold text-gray-800 text-center">{{ child.title }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </section>
    <!-- 服务简介 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-bold mb-6">我們的服務</h2>
          <p class="text-gray-600">
            KCIS提供多樣化的專業服務，以滿足客戶的各種需求。我們的服務涵蓋多個領域，從技術諮詢到項目管理，從數據分析到系統優化，我們致力於為客戶提供全方位的支持。
          </p>
        </div>
        
        <!-- 服务项目列表 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="service in services" 
            :key="service.id"
            class="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="text-red-600 mb-6">
              <Icon :name="service.icon" class="w-12 h-12" />
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务流程 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center">服務流程</h2>
          
          <div class="flex flex-col md:flex-row flex-wrap">
            <div 
              v-for="process in processes" 
              :key="process.step"
              class="md:w-1/2 p-4"
            >
              <div class="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <div class="flex items-center mb-4">
                  <div class="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-4">
                    {{ process.step }}
                  </div>
                  <h3 class="text-xl font-bold">{{ process.title }}</h3>
                </div>
                <p class="text-gray-600 flex-grow">{{ process.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 为什么选择我们 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center">為什麼選擇我們</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class="flex items-start mb-4">
                <div class="text-red-600 mr-4">
                  <Icon name="heroicons:check-badge" class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">專業團隊</h3>
                  <p class="text-gray-600">我們的團隊由經驗豐富的專業人員組成，擁有深厚的行業知識和技術專長。</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class="flex items-start mb-4">
                <div class="text-red-600 mr-4">
                  <Icon name="heroicons:check-badge" class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">量身定制</h3>
                  <p class="text-gray-600">我們根據客戶的具體需求，提供量身定制的解決方案，確保最大程度地滿足客戶期望。</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class="flex items-start mb-4">
                <div class="text-red-600 mr-4">
                  <Icon name="heroicons:check-badge" class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">質量保證</h3>
                  <p class="text-gray-600">我們嚴格執行質量控制流程，確保所提供的服務和解決方案達到高標準。</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class="flex items-start mb-4">
                <div class="text-red-600 mr-4">
                  <Icon name="heroicons:check-badge" class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">持續支持</h3>
                  <p class="text-gray-600">我們提供持續的支持和服務，確保解決方案長期有效運行，並根據需要進行調整。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 咨询服务 -->
    <!-- <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">需要專業服務？</h2>
        <p class="text-xl text-gray-600 mb-8">聯繫我們，了解更多關於我們服務的信息</p>
        <NuxtLink to="/contact" class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block">
          立即諮詢
        </NuxtLink>
      </div>
    </section> -->
  </div>
</template>
