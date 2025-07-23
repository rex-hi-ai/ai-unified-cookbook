/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir is enabled by default in Next.js 13.4+
  },
  // 啟用靜態匯出，方便部署到 GitHub Pages
  output: 'export',
  // 確保輸出目錄與 GitHub Actions 匹配
  distDir: 'out',
  // 禁用影像最佳化（靜態匯出不支援）
  images: {
    unoptimized: true
  }
  // 不加 basePath、不加 assetPrefix
}

module.exports = nextConfig
