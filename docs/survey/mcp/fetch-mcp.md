# Fetch MCP

## 1. 總覽
Fetch MCP 是一套基於 Model Context Protocol（MCP）標準的開源伺服器，專為 AI 助理與自動化流程設計，能彈性抓取網頁內容並轉換為多種格式（HTML、JSON、純文字、Markdown）。適合需要即時存取、分析或轉換網頁資料的 AI 應用場景。

## 2. 關鍵功能
- 支援 fetch_html、fetch_json、fetch_txt、fetch_markdown 等多種抓取模式
- 可自訂 HTTP headers，支援多種 API 或網頁存取需求
- 內容可轉換為 HTML、JSON、純文字或 Markdown
- 採用 JSDOM 進行 HTML 解析，TurndownService 轉 Markdown
- 完全開源，支援本地部署與自訂開發

## 3. 常見使用案例
- AI 助理即時抓取網頁、API 或文件內容
- 將網頁內容轉換為純文字或 Markdown 供 AI 處理
- 自動化流程中需要動態存取外部資料
- 研究、監控、數據蒐集等場景

## 4. 定價方案
- 完全開源，採用 MIT 授權，可自由商用與修改

## 5. 安裝與設定
### 以 npm 安裝與啟動
```bash
npm install
yarn build
npm start
```

### 以 MCP 整合（VS Code/Claude Desktop）
於 `.vscode/mcp.json` 或 `claude_desktop_config.json` 加入：
```json
{
  "servers": {
    "fetch": {
      "command": "node",
      "args": ["{ABSOLUTE_PATH}/dist/index.js"]
    }
  }
}
```

## 6. 基本用法與範例
- 於 AI 編輯器選用 fetch MCP 工具，並指定抓取模式與網址
- 例如：
```bash
# 抓取網頁純文字
fetch_txt url=https://example.com

# 抓取 JSON API
fetch_json url=https://api.example.com/data

# 抓取並轉 Markdown
fetch_markdown url=https://example.com/article
```

## 7. 官方資源
- [Fetch MCP Server - GitHub](https://github.com/zcaceres/fetch-mcp)
- [PulseMCP Fetch MCP Server](https://www.pulsemcp.com/servers/modelcontextprotocol-fetch)
- [MCP-get fetch server package](https://mcp-get.com/packages/mcp-server-fetch)

---
> *本文件依據 2025/07 官方資訊編寫。如需最新功能與授權，請參考官方網站與 GitHub。*
