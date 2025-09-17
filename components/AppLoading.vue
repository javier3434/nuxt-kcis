<template>
  <div class="loading-container">
    <div class="loading-content">
      <!-- KCIS Logo -->
      <div class="logo-container">
        <img src="/favicon.png" alt="KCIS" class="logo" />
      </div>
      
      <!-- 公司名称 -->
      <h1 class="company-name">KCIS</h1>
      <p class="company-subtitle">工程顧問服務</p>
      
      <!-- 加载动画 -->
      <div class="spinner-container">
        <div class="spinner"></div>
      </div>
      
      <!-- 加载文字 -->
      <p class="loading-text">正在加載...</p>
    </div>
  </div>
</template>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
  animation: fadeIn 0.8s ease-in-out;
}

.logo-container {
  margin-bottom: 1.5rem;
}

.logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  animation: pulse 2s infinite;
}

.company-name {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
}

.company-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.spinner-container {
  margin-bottom: 1.5rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #dc2626;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

.loading-text {
  font-size: 1rem;
  color: #6b7280;
  animation: pulse 1.5s infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
</style>
