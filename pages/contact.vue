<script setup>
definePageMeta({
  layout: 'default',
})
useHead({
  title: useI18n().t('nav.contact')
})

// 表单数据
const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

// 表单提交状态
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const hasError = ref(false)

// 提交表单方法
const submitForm = () => {
  // 实际项目中这里应该有表单验证和发送数据的逻辑
  isSubmitting.value = true
  
  // 模拟API请求
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    // 清空表单
    Object.keys(form).forEach(key => form[key] = '')
  }, 1000)
}
</script>

<template>
  <div>
    <!-- 联系我们横幅 -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ $t('nav.contact') }}</h1>
        <p class="text-xl text-gray-600">我們期待聽到您的聲音</p>
      </div>
    </section>

    <!-- 联系信息和表单 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- 联系信息 -->
          <div>
            <h2 class="text-2xl font-bold mb-8">聯絡資訊</h2>
            
            <div class="space-y-8">
              <div class="flex items-start">
                <div class="bg-red-100 p-3 rounded-lg mr-4">
                  <Icon name="heroicons:map-pin" class="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">辦公地址</h3>
                  <p class="text-gray-600">香港九龍灣企業廣場123號</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-red-100 p-3 rounded-lg mr-4">
                  <Icon name="heroicons:envelope" class="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">電子郵件</h3>
                  <p class="text-gray-600">info@kcis.com</p>
                  <p class="text-gray-600">support@kcis.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-red-100 p-3 rounded-lg mr-4">
                  <Icon name="heroicons:phone" class="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">電話</h3>
                  <p class="text-gray-600">+852 1234 5678</p>
                  <p class="text-gray-600">+852 8765 4321</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-red-100 p-3 rounded-lg mr-4">
                  <Icon name="heroicons:clock" class="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">營業時間</h3>
                  <p class="text-gray-600">週一至週五: 9:00 AM - 6:00 PM</p>
                  <p class="text-gray-600">週六、週日: 休息</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 联系表单 -->
          <div>
            <h2 class="text-2xl font-bold mb-8">給我們留言</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-gray-700 mb-2">姓名</label>
                <input 
                  id="name" 
                  v-model="form.name" 
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              
              <div>
                <label for="email" class="block text-gray-700 mb-2">電子郵件</label>
                <input 
                  id="email" 
                  v-model="form.email" 
                  type="email" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              
              <div>
                <label for="phone" class="block text-gray-700 mb-2">電話</label>
                <input 
                  id="phone" 
                  v-model="form.phone" 
                  type="tel" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              
              <div>
                <label for="subject" class="block text-gray-700 mb-2">主題</label>
                <input 
                  id="subject" 
                  v-model="form.subject" 
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              
              <div>
                <label for="message" class="block text-gray-700 mb-2">訊息</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors w-full"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting">提交中...</span>
                  <span v-else>提交</span>
                </button>
              </div>
              
              <div v-if="isSubmitted" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                謝謝您的訊息！我們會盡快回覆您。
              </div>
              
              <div v-if="hasError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                提交失敗，請稍後再試。
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 地图部分，实际项目中可以使用Google Maps或其他地图服务 -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="h-96 bg-gray-200 flex items-center justify-center">
          <p class="text-gray-500">地圖位置</p>
        </div>
      </div>
    </section>

    <!-- FAQ部分 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center">常見問題</h2>
          
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-3">我需要提前預約嗎？</h3>
              <p class="text-gray-600">是的，為了更好地為您服務，建議提前預約。您可以通過電話或電子郵件與我們聯繫，安排合適的時間。</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-3">您提供哪些服務？</h3>
              <p class="text-gray-600">我們提供多種專業服務，包括但不限於技術諮詢、項目管理、數據分析等。您可以查看我們的「服務」頁面了解更多詳情。</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-3">如何成為您的合作夥伴？</h3>
              <p class="text-gray-600">我們歡迎各種形式的合作。請通過聯繫表單或直接發送郵件至 partnerships@kcis.com，我們的團隊會與您聯繫討論合作細節。</p>
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
