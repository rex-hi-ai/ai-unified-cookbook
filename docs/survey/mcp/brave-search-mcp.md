# Brave Search MCP

## 工具簡介
Brave Search MCP 是 Brave Search 官方針對 Claude Desktop、Context7 MCP 等 AI 助手所推出的搜尋整合方案。透過 MCP（Model Context Protocol）標準，能讓 AI 助手直接存取 Brave Search API，獲得即時、隱私保護的網頁搜尋結果。

## 主要特色
- 無追蹤、重視隱私的搜尋體驗
- 支援 Claude Desktop、Context7 MCP 等多種 AI 助手
- 透過 API 金鑰授權，快速整合
- 支援多語言查詢

## API 金鑰申請方式
1. 前往 [Brave Search API 申請頁面](https://search.brave.com/api)
2. 註冊或登入 Brave 帳號
3. 依照指示申請 API 金鑰（免費方案每日有查詢上限，亦可升級付費方案）
4. 取得 API 金鑰後，妥善保存

## Brave Search MCP 整合步驟（以 Claude Desktop 為例）
1. 於 Claude Desktop 設定頁面，找到「MCP 插件」或「外部搜尋」相關設定
2. 新增 Brave Search MCP，並貼上剛剛取得的 API 金鑰
3. 儲存設定後，Claude Desktop 即可透過 MCP 協議呼叫 Brave Search API

## 設定範例
```json
{
  "provider": "brave-search",
  "api_key": "你的 API 金鑰",
  "endpoint": "https://api.search.brave.com/res/v1/web/search"
}
```

## 常見用法
- 於 Claude 對話框輸入「@brave 搜尋 關鍵字」即可觸發 Brave Search MCP
- 可用於即時查詢新聞、技術文件、網頁內容等
- 支援多語言查詢與過濾

## 常見問題
- **API 金鑰失效/查詢額度用盡**：請至 Brave Search API 後台檢查金鑰狀態或升級方案
- **查無結果/回應慢**：請確認網路連線與 API 金鑰設定正確
- **安全性疑慮**：Brave Search 強調隱私保護，不會追蹤用戶查詢紀錄

## 7. 官方資源
- [Brave Search API 官方指南](https://brave.com/zh-tw/search/api/guides/use-with-claude-desktop-with-mcp/)
- [Brave Search API 文件](https://search.brave.com/api/docs)

## 8. 相關參考
- [搜索技術探討](https://github.com/topics/search-technology)
- [Brave 社群動態](https://news.ycombinator.com/from?site=brave.com)
- [MCP 使用反饋](https://www.reddit.com/r/bravesearch)

---

> 本文件依據 Brave 官方指南與 API 文件整理，聚焦於 MCP 整合與實際用法，適用於 Claude Desktop、Context7 MCP 等支援 MCP 標準的 AI 助手。
