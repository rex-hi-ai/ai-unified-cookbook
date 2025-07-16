# Task Master MCP

## 1. 總覽
Task Master MCP 是一套專為軟體開發團隊設計的 AI 任務管理與自動化協作系統，支援 MCP（Model Control Protocol）協議。它可與 Cursor、VS Code、Windsurf 等多種編輯器無縫整合，讓開發者能以 AI 助理協助規劃、拆解、追蹤與執行專案任務。

## 2. 關鍵功能
- AI 驅動的 PRD（產品需求文件）解析與任務拆解
- 支援多種 AI 模型（Claude、OpenAI、Gemini、Perplexity、xAI 等）
- 與 Cursor、VS Code、Windsurf、Roo 等 IDE 整合
- 互動式任務規劃、追蹤與研究
- 支援 MCP 協議，可自動串接多種 AI 工具
- 自訂規則與專案範本

## 3. 常見使用案例
- 解析 PRD 並自動產生可執行開發任務
- AI 協助規劃下一步、追蹤進度與任務分配
- 研究最佳實踐、技術遷移策略與自動化重複性任務
- 在 IDE 內直接與 AI 助理互動，提升開發效率

## 4. 定價方案
- 採用 MIT with Commons Clause 授權，開源免費（禁止作為雲端服務銷售）

## 5. 安裝與設定
建議以 MCP 模式整合於支援的編輯器：

1. 於專案或全域 MCP 設定檔（如 `.cursor/mcp.json` 或 `.vscode/mcp.json`）加入：
```json
{
  "servers": {
    "taskmaster-ai": {
      "command": "npx",
      "args": ["-y", "--package=task-master-ai", "task-master-ai"],
      "env": {
        "ANTHROPIC_API_KEY": "YOUR_ANTHROPIC_API_KEY_HERE",
        "OPENAI_API_KEY": "YOUR_OPENAI_KEY_HERE"
        // ...其他支援的金鑰
      },
      "type": "stdio"
    }
  }
}
```
2. 於 AI 編輯器啟用 Task Master MCP，並依需求設定 API 金鑰。

## 6. 基本用法與範例
### 常用指令與互動
- 初始化專案：
```bash
# 全域安裝
npm install -g task-master-ai
# 初始化
task-master init
```
- 解析 PRD 並產生任務：
```bash
task-master parse-prd your-prd.txt
```
- 查詢任務、追蹤進度：
```bash
task-master list
task-master next
task-master show 1,3,5
```
- 研究與自動化：
```bash
task-master research "請查找 JWT 驗證最佳實踐"
```
- 於 AI 聊天視窗互動：
  - 「請解析 scripts/prd.txt 的 PRD」
  - 「下一步該做什麼？」
  - 「請協助我實作第 3 個任務」
  - 「請研究 React Query v5 遷移策略」

## 7. 相關資源
- [Task Master 官方網站](https://www.task-master.dev/)
- [GitHub - claude-task-master](https://github.com/eyaltoledano/claude-task-master)
- [設定指南](https://github.com/eyaltoledano/claude-task-master/blob/main/docs/configuration.md)
- [教學文件](https://github.com/eyaltoledano/claude-task-master/blob/main/docs/tutorial.md)
- [指令參考](https://github.com/eyaltoledano/claude-task-master/blob/main/docs/command-reference.md)
- [互動範例](https://github.com/eyaltoledano/claude-task-master/blob/main/docs/examples.md)

---
> *本文件依據 2025/07 官方資訊編寫。如需最新功能與定價，請參考官方網站。*
