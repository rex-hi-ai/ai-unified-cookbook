# Gemini CLI

## 1. 總覽
Gemini CLI 是 Google 官方開源的命令列 AI 工作流工具，讓你直接在終端機與 Gemini 互動，查詢/編輯大型程式碼庫、生成應用、執行自動化任務，並支援多模態（文字、圖片、PDF、程式碼等）輸入。

## 2. 關鍵功能
- 直接於終端機與 Gemini 互動，無需瀏覽器
- 查詢、編輯、重構大型程式碼庫（支援 100 萬 tokens 以上上下文）
- 生成新應用、腳本、文件、簡報等
- 多模態支援：文字、圖片、PDF、程式碼
- 內建 Google Search、MCP 工具、第三方插件
- 支援自動化工作流與本地工具整合
- 可用於個人、團隊、企業協作

## 3. 常見使用案例
- 探索/理解大型程式碼庫
- 生成/重構/修正程式碼
- 自動化日常開發與運維任務
- 產生簡報、文件、報告
- 團隊協作與知識管理
- 多模態內容生成與分析

## 4. 定價方案
- 免費層：
  - 以 Google 帳號登入：每分鐘 60 次、每日 1,000 次免費請求（Gemini 2.5 Pro）
  - 以 API 金鑰：每日 100 次免費請求（Gemini 2.5 Pro）
- 付費層：依 API 金鑰/帳號升級，享更高速率與額度
- 詳細與最新價格請參考 [官方定價頁](https://ai.google.dev/gemini-api/docs/pricing)

## 5. 安裝與設定
### 安裝 Node.js（需 v20 以上）
[Node.js 下載](https://nodejs.org/en/download)

### 直接執行（推薦）
```bash
npx https://github.com/google-gemini/gemini-cli
```

### 全域安裝
```bash
npm install -g @google/gemini-cli
gemini
```

### 登入與 API 金鑰設定
- **首次啟動時可直接以 Google 帳號登入**，無需 API 金鑰，享有每分鐘 60 次、每日 1,000 次免費請求額度。
- 亦可選擇使用 Gemini API 金鑰：
  1. 申請金鑰：[Google AI Studio](https://aistudio.google.com/apikey)
  2. 設定環境變數：
```bash
export GEMINI_API_KEY="<你的 API 金鑰>"
```
- （如使用 Vertex AI，請參考官方文件設定 GOOGLE_API_KEY 與 GOOGLE_GENAI_USE_VERTEXAI）

## 6. 基本用法與範例
### 啟動 CLI
```bash
gemini
```
或
```bash
npx https://github.com/google-gemini/gemini-cli
```

### 互動範例
- 啟動後直接輸入指令，例如：
  - `請幫我摘要這個 repo 的架構`  
  - `幫我產生一個 Python 爬蟲腳本`  
  - `分析這份 PDF 並列出重點`
- 可於專案目錄下執行，針對本地程式碼進行查詢、重構、生成

### 常用指令
- `gemini`：啟動互動式 CLI
- `gemini --help`：顯示所有可用參數與指令
- 更多進階指令與自動化用法，請參考[官方指令文件](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/commands.md)

## 7. 官方資源
- [GitHub Repo](https://github.com/google-gemini/gemini-cli)
- [官方文件](https://github.com/google-gemini/gemini-cli/blob/main/docs/index.md)
- [常見問題/疑難排解](https://github.com/google-gemini/gemini-cli/blob/main/docs/troubleshooting.md)
- [API 金鑰申請](https://aistudio.google.com/apikey)
- [定價頁](https://ai.google.dev/gemini-api/docs/pricing)
- [官方 Roadmap](https://github.com/google-gemini/gemini-cli/blob/main/ROADMAP.md)
- [CLI 指令大全](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/commands.md)
- [貢獻指南](https://github.com/google-gemini/gemini-cli/blob/main/CONTRIBUTING.md)
