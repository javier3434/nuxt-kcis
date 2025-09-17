<script setup>
definePageMeta({
  layout: 'default',
})
useHead({
  title: useI18n().t('nav.services')
})
// 导航菜单数据
const navigationItems = [
  {
    id: "company-story",
    title: "公司創立故事",
    icon: "i-heroicons-sparkles",
  },
  {
    id: "company-history",
    title: "公司成立史",
    icon: "i-heroicons-clock",
  },
  {
    id: "team-introduction",
    title: "團隊介紹",
    icon: "i-heroicons-user-group",
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
                  @click="scrollToSection(item.id)"
                  class="w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors group"
                  :class="
                    activeSection === item.id
                      ? 'bg-red-600 text-white'
                      : 'hover:bg-red-50 hover:text-red-600'
                  "
                >
                  <UIcon
                    :name="item.icon"
                    class="w-5 h-5 mr-3 transition-colors"
                    :class="
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-gray-400 group-hover:text-red-600'
                    "
                  />
                  <span class="font-medium">{{ item.title }}</span>
                </button>
              </nav>
            </div>
          </aside>

          <!-- 右侧内容区域 -->
          <main class="lg:w-3/4">
            <div class="space-y-16">
              <!-- 公司创立故事 -->
              <section id="company-story" class="scroll-mt-8">
                <div class="bg-white rounded-lg shadow-md p-8">
                  <h2
                    class="text-3xl font-bold mb-8 text-gray-800 flex items-center"
                  >
                    <UIcon
                      name="i-heroicons-sparkles"
                      class="w-8 h-8 mr-3 text-red-600"
                    />
                    公司創立故事
                  </h2>

                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-700 mb-6 leading-relaxed">
                      創辦人的話：
                    </p>

                    <p class="text-gray-700 mb-6 leading-relaxed">
                      KCIS 的誕生創立 KCIS，不是為了趕上市場，而是為了改變它。
                      我長期走在越南各地的工地與會議室之間，看到無數建築拔地而起，也看到太多品質失控、責任模糊、角色被邊緣化的工程現場。圖紙與現場不符，預算不透明，監造成了「在不在都一樣」的裝飾。
                    </p>

                    <p class="text-gray-700 mb-6 leading-relaxed">
                      我常想，這真的是工程應有的樣子嗎？
                      我問自己：「如果我們能堅持把每件事做對，會不會讓工程變得不一樣？」
                      這個念頭，成為我創立 KCIS 的起點。
                      我們相信，品質不是用錢堆出來的，而是來自
                      堅持（Keep）——對細節的堅持、對原則的堅持。我們也相信，監造人不能只是站在一邊看，而要有
                      自信（Confidence）
                      提出專業判斷，甚至幫助業主做決定。在這個變化快速的時代，我們更不能墨守成規，創新（Innovation）
                      是我們與錯誤對抗的工具。而一切的核心，都是為了
                      服務（Server）——服務業主、服務建築本身，也服務未來可能在這棟建築裡生活、工作的人。
                    </p>

                    <p class="text-gray-700 mb-6 leading-relaxed">
                      KCIS
                      是這四個詞的縮寫，也是一種信念的縮寫。KCIS，不追求最大，但我們選擇最正直的那條路。用四個字——Keep,
                      Confidence, Innovation,
                      Serve，我們蓋出每一個值得信任的工程。
                    </p>
                    <p>KCIS 創辦人楊博翔 Ennio</p>
                  </div>
                </div>
              </section>

              <!-- 公司成立史 -->
              <section id="company-history" class="scroll-mt-8">
                <div class="bg-white rounded-lg shadow-md p-8">
                  <h2
                    class="text-3xl font-bold mb-8 text-gray-800 flex items-center"
                  >
                    <UIcon
                      name="i-heroicons-clock"
                      class="w-8 h-8 mr-3 text-red-600"
                    />
                    公司成立史
                  </h2>

                  <div class="space-y-8">
                    <div
                      v-for="(milestone, index) in milestones"
                      :key="index"
                      class="flex items-start"
                    >
                      <div class="flex-shrink-0 w-20 text-center mr-6">
                        <div
                          class="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mx-auto mb-2"
                        >
                          {{ milestone.year }}
                        </div>
                        <div
                          v-if="index < milestones.length - 1"
                          class="w-px h-16 bg-gray-300 mx-auto"
                        ></div>
                      </div>
                      <div class="flex-grow">
                        <div class="bg-gray-50 p-6 rounded-lg">
                          <h3 class="text-xl font-bold mb-3 text-gray-800">
                            {{ milestone.title }}
                          </h3>
                          <p class="text-gray-700 leading-relaxed">
                            {{ milestone.description }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <!-- 团队介绍 -->
              <section id="team-introduction" class="scroll-mt-8">
                <div class="bg-white rounded-lg shadow-md p-8">
                  <h2
                    class="text-3xl font-bold mb-8 text-gray-800 flex items-center"
                  >
                    <UIcon
                      name="i-heroicons-user-group"
                      class="w-8 h-8 mr-3 text-red-600"
                    />
                    團隊介紹
                  </h2>

                  <div
                    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    <div
                      v-for="(member, index) in team"
                      :key="index"
                      class="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div
                        class="h-48 bg-gray-200 flex items-center justify-center"
                      >
                        <UIcon
                          name="i-heroicons-user-circle"
                          class="w-16 h-16 text-gray-400"
                        />
                      </div>
                      <div class="p-6">
                        <h3 class="text-lg font-bold mb-2 text-gray-800">
                          {{ member.name }}
                        </h3>
                        <p class="text-red-600 font-medium mb-3 text-sm">
                          職位: {{ member.title }}
                        </p>
                        <p class="text-gray-600 text-sm leading-relaxed">
                          專長: {{ member.description }}
                        </p>
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
