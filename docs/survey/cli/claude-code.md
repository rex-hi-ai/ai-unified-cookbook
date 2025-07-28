# Claude Code

## 1. 總覽
Claude Code 是 Anthropic 推出的 AI 程式開發助手，專為終端機與現代 IDE 設計，能理解整個專案結構，協助規劃、撰寫、重構、除錯、Git 操作與自動化開發流程。Claude Code 以 Claude Opus 4 為核心，支援多檔案協作、MCP 整合與企業級安全，讓開發者能以自然語言高效驅動軟體開發。

## 2. 關鍵功能
- 以自然語言描述需求，AI 會自動規劃、撰寫、修改程式碼
- 深度理解整個專案結構，支援多檔案協作與跨檔案重構
- 直接於終端機互動，無需切換 IDE 或視窗
- 支援 VS Code、JetBrains IDE 整合
- 內建 Git 操作（分支、提交、合併、衝突解決等）
- 支援 MCP 協議，整合 Google Drive、Figma、Slack 等外部資源
- 企業級安全、隱私與合規設計
- 可自訂行為、權限模式與自動化流程

## 3. 常見使用案例
- 以自然語言生成、重構、除錯程式碼
- 跨多檔案大規模重構與自動化修改
- 問答、專案結構說明、技術棧分析
- 自動化 Git 操作與 PR 流程
- 測試撰寫、文件更新、程式碼審查
- 整合外部工具與資料來源（MCP）

## 4. 定價方案
- Free：$0，基礎功能、網頁/桌面/行動裝置聊天、基本程式碼生成功能
- Pro：$17/月（年繳）或 $20/月（單月），含 Claude Code 終端機功能、無限專案、進階模型、Google Workspace 整合等
- Max 5x：$100/月/人，Pro 全部功能、5 倍用量、Opus 4 模型、優先權限
- Max 20x：$200/月/人，Max 5x 全部功能、20 倍用量、最高級權限
- Team：$25/月/人（年繳），或 $30/月/人（單月），最低 5 人，含 Pro 全部功能與更高用量
- Enterprise：一切 Team 功能，更多用量，需聯絡銷售取得報價
- 詳細與最新價格請參考 [官方定價頁](https://www.anthropic.com/pricing)

## 5. 安裝與設定
安裝前請確認已安裝 Node.js 18 以上版本。

```bash
npm install -g @anthropic-ai/claude-code
cd /path/to/your/project
claude
```

## 6. 基本用法與範例
啟動後可直接於終端機輸入自然語言指令：

```bash
# 問專案結構
claude
> what does this project do?

# 生成程式碼
> add a hello world function to the main file

# Git 操作
> commit my changes with a descriptive message

# 一次性查詢
claude -p "explain this function"
```

## 7. 官方資源
- [Claude Code | Your code’s new collaborator](https://www.anthropic.com/claude-code)
- [Claude Code overview – Anthropic Docs](https://docs.anthropic.com/en/docs/claude-code/overview)
- [Quickstart – Anthropic Docs](https://docs.anthropic.com/en/docs/claude-code/quickstart)
- [CLI reference – Anthropic Docs](https://docs.anthropic.com/en/docs/claude-code/cli-reference)
- [Anthropic Cookbook (GitHub)](https://github.com/anthropics/anthropic-cookbook)
- [Claude.ai pricing plans](https://www.anthropic.com/pricing)

---
> *本文件根據官方資訊彙整，更新日期為 2025/07。最新功能與價格請以官方網站為準。*
