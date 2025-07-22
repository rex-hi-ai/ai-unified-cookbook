import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HI-AI 工具大全 | HI-AI Tools Survey',
  description: '全面的 HI-AI 工具調研和比較平台，幫助您找到最適合的 AI 解決方案、增加人類生產力',
  keywords: 'AI工具, 人工智慧, 工具比較, AI助手, 開發工具, HI工具',
  authors: [{ name: 'HI-AI Tools Survey Team' }],
  openGraph: {
    title: 'HI-AI 工具大全',
    description: '全面的 HI-AI 工具調研和比較平台',
    type: 'website',
    locale: 'zh_TW',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className="min-h-screen bg-gray-50">
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-4">
                  <h1 className="text-xl font-bold text-gray-900">
                    HI-AI 工具大全
                  </h1>
                  <div className="hidden sm:flex items-center space-x-1 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span>持續更新中</span>
                  </div>
                </div>
                <nav className="flex items-center space-x-4">
                  <a 
                    href="https://github.com/rex-hi-ai/ai-unified-cookbook" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                </nav>
              </div>
            </div>
          </header>
          
          <main className="flex-1">
            {children}
          </main>
          
          <footer className="bg-white border-t border-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center text-gray-600">
                <p className="mb-2">
                  © 2025 HI-AI 工具大全 | 開源專案，歡迎貢獻
                </p>
                <p className="text-sm">
                  資料持續更新，如有錯誤或建議請透過 GitHub 回報
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
