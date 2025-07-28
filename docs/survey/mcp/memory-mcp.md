# Memory MCP

## 1. 總覽
Memory MCP 是一套基於 Model Context Protocol（MCP）標準的知識圖譜型持久記憶伺服器，專為 AI 助理與自動化流程設計。它能將用戶資訊、事件、關係等以知識圖譜方式儲存，支援跨會話記憶、查詢與動態更新，適合需要長期知識管理與個人化互動的 AI 應用。

## 2. 關鍵功能
- 以知識圖譜（Knowledge Graph）方式儲存實體、關係與觀察（Observation）
- 支援多種操作：建立/刪除實體、關係、觀察，查詢與搜尋節點
- 可用於 AI 助理的長期記憶、個人化、上下文追蹤
- 完全開源，支援本地部署與自訂開發
- 支援 Docker、npx 快速啟動，並可自訂儲存路徑

## 3. 常見使用案例
- AI 助理跨會話記憶用戶資訊、偏好、目標
- 企業知識管理、團隊協作知識圖譜
- 事件追蹤、關係網路分析
- 個人化推薦、行為分析

## 4. 定價方案
- 完全開源，採用 MIT 授權，可自由商用與修改

## 5. 安裝與設定
### 以 npx 快速啟動
```bash
npx -y @modelcontextprotocol/server-memory
```

### 以 Docker 啟動
```bash
docker run -i -v claude-memory:/app/dist --rm mcp/memory
```

### 於 VS Code/Claude Desktop 整合
於 `.vscode/mcp.json` 或 `claude_desktop_config.json` 加入：
```json
{
  "servers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

## 6. 基本用法與範例
- 於 AI 編輯器選用 memory MCP 工具，並依需求操作知識圖譜
- 例如：
```bash
# 啟動伺服器
npx -y @modelcontextprotocol/server-memory

# 設定自訂儲存路徑
MEMORY_FILE_PATH=/path/to/memory.json npx -y @modelcontextprotocol/server-memory
```

## 7. 官方資源
- [Knowledge Graph Memory Server - npm](https://www.npmjs.com/package/@modelcontextprotocol/server-memory)
- [Model Context Protocol servers - GitHub](https://github.com/modelcontextprotocol/servers)
- [Model Context Protocol 官方網站](https://modelcontextprotocol.io/)

## 8. 相關參考
- [Memory MCP 使用者交流](https://github.com/modelcontextprotocol/memory/discussions)

---
> *本文件依據 2025/07 官方資訊編寫。如需最新功能與授權，請參考官方網站與 GitHub。*
