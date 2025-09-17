<script setup>
// 页脚组件
</script>

<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 公司信息 -->
        <div>
          <h4 class="text-lg font-medium mb-4">公司名稱</h4>
          <div class="space-y-2 text-sm">
            <p>KCIS工程顧問責任有限公司</p>
            <p>KCIS CONSTRUCTION CONSULTING CO.,LTD</p>
            <p>CÔNG TY TNHH TƯ VẤN CÔNG TRÌNH XÂY DỰNG KCIS</p>
          </div>
          <p class="mt-6">© 2025 KCIS. All rights reserved.</p>
        </div>
        
        <!-- 联系信息 -->
        <div>
          <h4 class="text-lg font-medium mb-4">聯繫資訊</h4>
          <div class="space-y-3">
            <div class="flex items-start">
              <UIcon name="i-heroicons-map-pin" class="mr-2 w-5 h-5 mt-0.5 flex-shrink-0" />
              <div class="text-sm">
                <p>胡志明市 7區 新興坊 D4 路 83號 Florita 公寓 B 棟 TM37</p>
                <p class="text-gray-300 mt-1">BS8 Trệt+Lửng (Số nhà 37 Tầng 1+2), Block B, Chung cư Florita, Số 83, Đường D4, P.Tân Hưng, Q7, TP.Hồ Chí Minh, VN</p>
              </div>
            </div>
            <p class="flex items-center">
              <UIcon name="i-heroicons-phone" class="mr-2 w-5 h-5" />
              <span>0399149143</span>
            </p>
            <p class="flex items-center">
              <UIcon name="i-heroicons-envelope" class="mr-2 w-5 h-5" />
              <span>kcis@kcisgroup.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* 添加需要的样式 */
</style>
