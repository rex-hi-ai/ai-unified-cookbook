# Context 7 MCP

## 1. 總覽
Context 7 MCP 是由 Upstash 開發的一個伺服器與 API 平台，用於管理模型上下文協議（MCP）。它提供了一個集中化的解決方案，用於整合與管理上下文感知的 AI 模型，實現無縫協作與高效模型部署。

## 2. 關鍵功能
- 集中管理模型上下文協議。
- 與多種工具和庫整合。
- 支援上下文感知 AI 模型操作的 API。
- 由 Upstash 開發與維護。

## 3. 常見使用案例
- 在集中化平台中管理上下文感知 AI 模型。
- 將 MCP 整合到現有的 AI 工具和工作流程中。
- 部署與監控上下文感知 AI 模型。

## 4. 定價方案
- 官方網站未明確提及定價細節。請聯繫 Upstash 獲取更多資訊。

## 5. 安裝與設定
- 透過 MCP 支援的客戶端（如 Claude Desktop、Cursor 等）進行設定
- 參考 [Context7 MCP GitHub 儲存庫](https://github.com/upstash/context7) 進行安裝

## 6. 基本用法與範例
### 主要用法
1. 在 AI 助理或開發工具的 prompt 中加入 `use context7`，即可自動取得最新的程式庫文件與範例。
2. 若已知特定程式庫，可直接指定 Context7 ID，例如 `/supabase/supabase`，以取得該庫的 API 與說明。
3. 可在 MCP 支援的 IDE、CLI 或雲端平台中，透過 MCP 協議自動串接 Context7 取得即時文件。

#### Prompt 範例：
```
# 取得 Next.js JWT 驗證中介軟體範例
Create a Next.js middleware that checks for a valid JWT in cookies and redirects unauthenticated users to /login. use context7

# 直接指定程式庫
implement basic authentication with supabase. use library /supabase/supabase for api and docs
```

### 進階用法
- 可在 MCP 客戶端（如 Cursor、Windsurf、Claude Desktop 等）設定自動規則，讓所有程式碼、API、設定等問題自動呼叫 Context7。
- 也可透過 API 直接查詢文件與範例，或在 MCP Inspector 測試。

## 7. 官方資源
- [Context7 官方網站](https://context7.com/)
- [Context7 MCP GitHub 儲存庫](https://github.com/upstash/context7)
- [Upstash 官方網站](https://upstash.com/)
- [繁體中文官方說明](https://github.com/upstash/context7/blob/master/docs/README.zh-TW.md)

## 8. 相關參考
- [Context7 MCP 討論](https://github.com/upstash/context7/discussions)

---
> *本文件依據 2025/07 的官方資訊編寫。如需最新功能與定價，請參考官方網站。*
