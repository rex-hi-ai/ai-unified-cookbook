# Jules AI

## 1. 總覽
Jules AI 是 Google 推出的非同步 AI 程式碼代理，專為開發者自動處理瑣碎的程式碼任務（如修 bug、升級套件、重構、測試等），讓你專注於更有價值的開發工作。Jules 透過 Gemini 2.5 Pro 模型驅動，能自動拉取 GitHub 專案、分支、在雲端 VM 上驗證變更並產生 PR，並提供完整的計畫、推理與變更 diff。

## 2. 關鍵功能
- GitHub 整合：自動匯入 repo、分支、建立 PR
- 雲端虛擬機：自動 clone 專案並在雲端 VM 驗證變更
- 測試套件：自動執行現有測試或產生新測試
- 變更計畫與 diff：展示 AI 計畫、推理與所有程式碼差異
- 支援自然語言任務描述
- Gemini 2.5 Pro AI 驅動
- 支援音訊摘要與自動化審查

## 3. 常見使用案例
- 自動修復 bug
- 自動升級依賴（如 Next.js、React 等）
- 重構與優化現有程式碼
- 自動產生與執行測試
- Pull Request 自動化與審查
- 專案快速原型與重構

## 4. 定價方案
- 提供免費試用（需 Google 帳號登入）
- 付費方案與企業版詳見官方網站，需登入查詢最新價格
- 企業版支援團隊協作與進階功能

## 5. 安裝與設定
- 前往 [Jules 官方網站](https://jules.google/) 並以 Google 帳號登入
- 授權 GitHub 帳號以存取專案
- 選擇 repo 與分支，輸入任務描述即可啟用

```bash
# 無需安裝，瀏覽器登入即可用
```

## 6. 基本用法與範例
- 登入後選擇 GitHub 專案與分支，輸入自然語言任務（如「升級 next.js 至 v15 並改用 app 目錄」）
- Jules 會自動拉取專案、分析、產生計畫、執行變更、執行測試並建立 PR
- 可於介面審查 diff、聆聽音訊摘要並快速合併

```bash
# 例：升級 next.js 並重構專案
# 於 Jules 介面輸入：「Bump next.js to v15 and convert to app directory」
```

## 7. 官方資源
- [Jules AI 官方網站](https://jules.google/)
- [Jules AI 文件](https://jules.google/docs)
- [Jules AI 定價頁面](https://jules.google/)
- [Jules AI 體驗入口](https://jules.google.com/)
- [Google Labs](https://labs.google.com/)

## 8. 相關參考
- [Jules AI 相關討論](https://www.reddit.com/r/JulesAI/)

---
> *本文件依據 2025/07 官方資訊整理，功能與價格如有異動請以官方網站為準。*
