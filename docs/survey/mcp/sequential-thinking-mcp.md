# Sequential Thinking MCP

## 1. 總覽
Sequential Thinking MCP 是一套基於 Model Context Protocol（MCP）標準的開源 AI 工具伺服器，專為「逐步推理」與「結構化思考」設計。它能協助 AI 助理將複雜問題拆解為多個可管理步驟，支援動態修正、分支推理與多步驗證，適用於規劃、分析、設計等多種場景。

## 2. 關鍵功能
- 將複雜問題拆解為多個思考步驟
- 支援動態修正、分支與多路徑推理
- 可根據需求調整總步驟數量
- 支援解決方案假設的產生與驗證
- 適用於需要多步推理、規劃與分析的任務
- 完全開源，支援本地部署

## 3. 常見使用案例
- 軟體設計與系統規劃的逐步推理
- 複雜問題的分解與多路徑分析
- AI 助理協作時的結構化思考
- 需要動態修正與驗證的決策流程

## 4. 定價方案
- 完全開源，採用 MIT 授權，可自由商用與修改

## 5. 安裝與設定
### 以 npx 快速啟動
```bash
npx -y @modelcontextprotocol/server-sequential-thinking
```

### 以 Docker 部署
```bash
docker run --rm -i mcp/sequentialthinking
```

### VS Code/Claude Desktop MCP 整合設定範例
於 `.vscode/mcp.json` 或 `claude_desktop_config.json` 加入：
```json
{
  "servers": {
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}
```

## 6. 基本用法與範例
- 啟動 MCP 伺服器後，於支援 MCP 的 AI 編輯器（如 VS Code、Claude Desktop）選用 Sequential Thinking 工具
- 於 AI 對話框輸入：「請逐步推理解決 XXX 問題」
- 進階用法：可於 MCP 請求中指定步驟、分支、修正等參數

## 7. 官方資源
- [Sequential Thinking MCP Server - GitHub](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking)
- [技術視野洞察：Sequential Thinking MCP 與推理型大模型功能實現](https://most.tw/posts/blog/sequential-thinking-mcp/)
- [Smithery Sequential Thinking](https://smithery.ai/server/@smithery-ai/server-sequential-thinking)
- [PulseMCP Sequential Thinking MCP Server](https://www.pulsemcp.com/servers/anthropic-sequential-thinking)

---
> *本文件依據 2025/07 官方資訊編寫。如需最新功能與授權，請參考官方網站與 GitHub。*
