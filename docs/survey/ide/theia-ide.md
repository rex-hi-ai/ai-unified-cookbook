# Theia IDE

## 1. 總覽
Theia IDE 是一款由 Eclipse 基金會主導、開源且可擴展的現代雲端與桌面整合開發環境（IDE），支援 AI 助理、模組化擴充與多語言開發。其設計目標是提供高度自訂、與 VS Code 擴充相容的開發體驗，並強調隱私、合規與開放性。

## 2. 關鍵功能
- 透明與控制：可自訂 AI 互動方式、選擇 AI 模型、調整提示
- Theia Coder：AI 編碼助理，支援自然語言生成應用程式
- 現代化 UI：彈性工作台佈局、主題、動態工具列
- 完全模組化、可擴展，與 VS Code 擴充 API 相容
- 支援多數主流程式語言（LSP）
- 內建多種 AI 代理（程式碼完成、終端助理、架構師聊天等）
- SCANOSS 整合，確保 AI 生成程式碼的開源授權合規
- 預設不收集遙測數據，重視隱私

## 3. 常見使用案例
- 雲端或桌面現代化開發環境
- AI 輔助程式設計、程式碼生成與重構
- 自動化個人或團隊開發工作流程
- 建立自訂或領域專屬 IDE（如 Arduino IDE、ARM Mbed Studio）
- 企業或教育單位的可擴展開發平台

## 4. 定價方案
- **開源免費**：Theia IDE 本體完全免費，採 Eclipse 公共授權。
- **商業支援**：可聯繫 EclipseSource 或合作夥伴取得專業諮詢與實施服務。

## 5. 安裝與設定
- 以 Node.js/npm 安裝（建議 Node.js 18+）：

```bash
npm install -g @theia/cli
# 建立新專案
theia create my-workspace
# 啟動本地伺服器
cd my-workspace
npx theia start
```
- 亦可透過 Docker、雲端平台或下載桌面版（詳見官方文件）

## 6. 基本用法與範例
- 啟動後於瀏覽器或桌面應用開啟專案，安裝所需擴充套件
- 啟用 Theia Coder 或其他 AI 代理，於編輯器內輸入自然語言描述需求

```bash
# 啟動 Theia IDE 本地伺服器
npx theia start
```

## 7. 官方資源
- [官方網站](https://theia-ide.org/)
- [官方文件](https://theia-ide.org/docs/)
- [GitHub Repository](https://github.com/eclipse-theia/theia)
- [EclipseSource 部落格：AI 驅動的 Theia IDE 介紹](https://eclipsesource.com/blogs/2025/03/13/introducing-the-ai-powered-theia-ide/)
- [EclipseSource 部落格：VS Code vs. Theia IDE](https://eclipsesource.com/blogs/2024/07/12/vs-code-vs-theia-ide/)

> 本文件依據 2025/07 官方資訊整理，功能與價格如有異動請以官方網站為準。
