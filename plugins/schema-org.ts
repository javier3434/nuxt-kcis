// 添加全站結構化數據
export default defineNuxtPlugin((nuxtApp) => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KCIS',
    url: 'https://kcis.com',
    logo: 'https://kcis.com/logo.png',
    sameAs: [
      'https://www.facebook.com/kcis',
      'https://www.linkedin.com/company/kcis'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+852-1234-5678',
        contactType: 'customer service',
        availableLanguage: ['Chinese', 'English', 'Vietnamese']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '企業廣場123號',
      addressLocality: '九龍灣',
      addressRegion: '香港',
      addressCountry: 'HK'
    },
    description: 'KCIS 工程顧問 | 越南專業工程監造與顧問服務，提供廠房建設、機電監理、法規合規與專案管理，協助台資與中資企業在越南推動工業工程專案'
  };

  // 添加結構化數據到頁面
  nuxtApp.hook('app:mounted', () => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(script);
  });
});
