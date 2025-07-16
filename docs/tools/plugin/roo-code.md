# Roo Code

## 1. Overview
Roo Code 是一款開源、AI 驅動的自動化程式開發助手，直接整合於 VS Code 編輯器中。它不僅能進行自動補全，還能跨多檔案規劃、撰寫、重構與除錯，並支援多種 AI 模型與本地部署，讓開發者如同擁有一支 AI 開發團隊。

## 2. Key Features
- 多專業模式（Coding、Debug、Architect、Ask、Orchestrator、可自訂模式）
- 深度專案全域上下文理解與多檔案編輯
- 支援多種 AI 模型（OpenAI、Anthropic、本地 LLM 等）
- 開源、可自訂、模型無廠商綁定
- 終端指令與瀏覽器自動化操作
- 嚴格權限控管（所有檔案變更與指令需用戶核准）
- 完全本地運作，保護程式隱私
- 可擴充自訂工具（MCP 協議）

## 3. Common Use Cases
- 以自然語言生成程式碼
- 跨多檔案重構與除錯
- 撰寫與更新專案文件
- 自動化重複性開發任務
- 問答與知識查詢
- 建立新專案或檔案
- 企業級大型專案協作

## 4. Pricing Plan
Roo Code 完全免費且開源。僅當你選用需付費的 AI API（如 OpenAI）時，才需支付模型 API 費用。若使用本地或免費模型，則無任何成本。

## 5. Installation & Setup
安裝 Roo Code 最簡單的方式是透過 VS Code Marketplace：

```bash
# 於 VS Code 指令面板輸入
ext install RooVeterinaryInc.roo-cline
```

或於 CLI 安裝：

```bash
code --install-extension RooVeterinaryInc.roo-cline
```

進階用戶可從 GitHub 下載原始碼自行建置 VSIX 套件安裝。

## 6. Basic Usage & Examples
安裝後，於 VS Code 啟用 Roo Code 面板（火箭圖示），並依指示連接你的 AI 模型金鑰（如 OpenAI、Anthropic 等）。

```bash
# 以 Roo Code 生成程式碼
# 在 Roo 面板輸入：
生成一個 RESTful API 伺服器

# 以 Roo Code 重構多檔案
重構整個 utils 資料夾，優化重複程式碼
```

## 7. Relevant Resources
- [YourAI-PoweredDev Team, Right in Your Editor.](https://www.roocode.com/)
- [Roo Code Docs](https://docs.roocode.com/)
- [RooCodeInc/Roo-Code: GitHub](https://github.com/RooCodeInc/Roo-Code)

---
> *本文件根據官方資訊彙整，編輯於 2025/07。最新功能與價格請以官方網站為準。*
