<script setup>
definePageMeta({
  layout: 'default',
})
useHead({
  title: useI18n().t('nav.contact')
})
</script>

<template>
  <div>
    <!-- 联系我们横幅 -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ $t('nav.contact') }}</h1>
        <p class="text-xl text-gray-600">聯繫KCIS工程顧問</p>
      </div>
    </section>

    <!-- 联系信息 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center text-gray-800">聯絡資訊</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- 公司地址 -->
            <div class="bg-white p-8 rounded-lg shadow-md">
              <div class="flex items-start mb-6">
                <div class="bg-red-100 p-3 rounded-lg mr-4">
                  <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-3 text-gray-800">公司地址</h3>
                  <p class="text-gray-600 mb-2">胡志明市 7區 新興坊 D4 路 83號 Florita 公寓 B 棟 TM37</p>
                  <p class="text-gray-500 text-sm">BS8 Trệt+Lửng (Số nhà 37 Tầng 1+2), Block B, Chung cư Florita, Số 83, Đường D4, P.Tân Hưng, Q7, TP.Hồ Chí Minh, VN</p>
                </div>
              </div>
            </div>

            <!-- 联系方式 -->
            <div class="bg-white p-8 rounded-lg shadow-md">
              <div class="space-y-6">
                <div class="flex items-center">
                  <div class="bg-red-100 p-3 rounded-lg mr-4">
                    <UIcon name="i-heroicons-phone" class="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800">電話</h3>
                    <p class="text-gray-600">0399149143</p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="bg-red-100 p-3 rounded-lg mr-4">
                    <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800">電子郵件</h3>
                    <p class="text-gray-600">kcis@kcisgroup.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 社交媒体链接 -->
          <div class="mt-16">
            <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">關注我們</h2>
            <div class="flex justify-center space-x-8">
              <a href="#" class="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <UIcon name="i-simple-icons-facebook" class="w-8 h-8 text-blue-600" />
                </div>
                <span class="text-gray-700 font-medium">Facebook</span>
              </a>
              
              <a href="#" class="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="bg-pink-100 p-4 rounded-full mb-4 group-hover:bg-pink-200 transition-colors">
                  <UIcon name="i-simple-icons-instagram" class="w-8 h-8 text-pink-600" />
                </div>
                <span class="text-gray-700 font-medium">Instagram</span>
              </a>
              
              <a href="#" class="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="bg-red-100 p-4 rounded-full mb-4 group-hover:bg-red-200 transition-colors">
                  <UIcon name="i-simple-icons-youtube" class="w-8 h-8 text-red-600" />
                </div>
                <span class="text-gray-700 font-medium">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* 添加需要的样式 */
</style>
