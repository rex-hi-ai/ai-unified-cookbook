/** @type {import('next').NextConfig} */
const isGhPages = process.env.DEPLOY_GHPAGES === 'true';
const BASE_PATH = isGhPages ? '/ai-unified-cookbook' : '';

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
  },
  basePath: BASE_PATH,
  assetPrefix: isGhPages ? BASE_PATH + '/' : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH
  }
}

module.exports = nextConfig
