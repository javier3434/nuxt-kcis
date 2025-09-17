<script setup>
definePageMeta({
  layout: "default",
});
useHead({
  title: useI18n().t("nav.about"),
});

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

// 团队成员数据
const team = [
  {
    name: "楊博翔 Ennio",
    title: "總經理",
    photo: "/placeholder-team.jpg",
    description: "水文地工，建築設計，建築管理",
  },
  {
    name: "謝琪烽",
    title: "法務顧問",
    photo: "/placeholder-team.jpg",
    description: "行政訴訟、智慧財產訴訟、民商訴訟",
  },
  {
    name: "魏毓彥",
    title: "土木技師顧問",
    photo: "/placeholder-team.jpg",
    description: "工程管理、土木工程",
  },
  {
    name: "范氏翠蓉",
    title: "建築設計顧問",
    photo: "/placeholder-team.jpg",
    description: "建築設計、室內設計",
  },
  // {
  //   name: "謝琪烽",
  //   title: "法務顧問",
  //   photo: "/placeholder-team.jpg",
  //   description: "行政訴訟、智慧財產訴訟、民商訴訟",
  // },
  // {
  //   name: "魏毓彥",
  //   title: "土木技師顧問",
  //   photo: "/placeholder-team.jpg",
  //   description: "工程管理、土木工程",
  // },
];

// 公司历史里程碑
const milestones = [
  {
    year: "2010",
    title: "公司成立",
    description: "KCIS在越南成立，開始提供專業服務。",
  },
  {
    year: "2015",
    title: "取得資質",
    description: "取得3級能力證(五個類別)",
  },
  {
    year: "2018",
    title: "迅速成長",
    description: "增加資本額達30億",
  },
  {
    year: "2022",
    title: "更上一層",
    description: "取得2級能力證(兩個類別)",
  },
  {
    year: "2025",
    title: "持續發展",
    description: "取得3級能力證(七個類別)",
  },
  {
    year: "2026",
    title: "繼續進取",
    description: "取得ISO 9001:2015",
  },
];

// 当前激活的区域
const activeSection = ref("company-story");

// 锚点跳转函数
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// 滚动监听函数
const handleScroll = () => {
  const sections = ["company-story", "company-history", "team-introduction"];

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      // 如果元素顶部在视窗上半部分，则认为该区域处于活跃状态
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        activeSection.value = sectionId;
        break;
      }
    }
  }
};

// 组件挂载时添加滚动监听
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // 初始化检查
  handleScroll();
});

// 组件卸载时移除监听
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div>
    <!-- 关于我们横幅 -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">
          {{ $t("nav.about") }}
        </h1>
        <p class="text-xl text-gray-600">了解KCIS的发展历程和企业使命</p>
      </div>
    </section>

    <!-- 主要内容区域 - 左右布局 -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- 左侧固定导航菜单 -->
          <aside class="lg:w-1/4 lg:sticky lg:top-8 lg:self-start">
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
  </div>
</template>
