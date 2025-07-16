# n8n

## 1. Overview
n8n 是一套開源、可自託管的工作流程自動化平台，結合 AI 原生能力與 500+ 應用整合，讓技術團隊能以拖拉式介面或程式碼靈活打造自動化流程。n8n 支援多步驟代理、資料整合、API 操作、AI 工具串接，並可部署於本地或雲端，適合需要高度自訂與資料主控權的企業與開發者。

## 2. 主要功能
- 視覺化拖拉式流程編輯器，支援無程式碼與程式碼混合
- 500+ 內建整合（如 Google Sheets、Slack、MySQL、Discord 等）
- 原生 AI 代理與 LangChain 支援，可串接自有 AI 模型與資料
- 支援自訂 Node（JavaScript/Python）、npm 套件擴充
- 可自託管（Docker、npm、雲端 VM）或使用官方雲端託管
- 企業級功能：SSO、LDAP、RBAC 權限、Git 版控、審計日誌
- 多人協作、專案管理、API 控制、CLI 工具
- 1700+ 範本與豐富社群資源

## 3. 常見應用情境
- IT/DevOps：自動化員工入職、事件通知、API 整合
- 資安：自動豐富工單、串接 SIEM/資安工具
- 銷售/行銷：自動化潛在客戶追蹤、評論分析、郵件發送
- 資料處理：文件轉向量資料庫、資料清理與同步
- AI 應用：多步驟 AI 代理、RAG、AI 聊天機器人
- 專案管理：自動化日常任務、跨系統資料流轉

## 4. 收費方案
n8n 採「公平原始碼」授權，提供自託管社群版與雲端訂閱制：

| 方案      | 月繳   | 年繳（每月） | 執行次數/月 | 主要功能             | 託管方式      |
|-----------|--------|--------------|-------------|----------------------|---------------|
| 社群版    | 免費   | 免費         | 無限制      | 基本功能             | 自託管        |
| Starter   | $24    | $20          | 2,500       | 5 active workflows   | n8n 雲端      |
| Pro       | $60    | $50          | 10,000      | 15 active workflows  | n8n 雲端      |
| Enterprise| 聯絡銷售| 聯絡銷售     | 客製        | 進階安全/權限/支援   | 自託管/雲端   |

所有雲端方案皆有 14 天免費試用。

## 5. 安裝與設定
n8n 支援多種安裝方式，最常見為 Docker 或 npm：

```bash
# 以 npx 快速啟動（需先安裝 Node.js）
npx n8n

# Docker 部署
# 建立資料卷
$ docker volume create n8n_data
# 啟動 n8n 容器
$ docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

更多安裝方式請參考官方文件（支援雲端 VM、Docker Compose、npm、各大雲平台等）。

## 6. 基本用法與範例
登入 n8n 編輯器（預設 http://localhost:5678），即可建立自動化流程。

```bash
# 範例：建立一個簡單的 Google Sheets 自動同步流程
1. 新增 Google Sheets 節點，設定認證與資料來源
2. 新增 Slack 節點，設定訊息內容
3. 連接節點，儲存並啟用流程

# 範例：AI 代理自動摘要網頁內容
1. 新增 HTTP Request 節點抓取網頁
2. 新增 AI Transform 節點，選擇摘要任務
3. 輸出結果到 Email/Slack
```

## 7. 官方資源
- [官方網站](https://n8n.io/)
- [官方文件](https://docs.n8n.io/)
- [GitHub 專案](https://github.com/n8n-io/n8n)
- [定價方案](https://n8n.io/pricing/)
- [整合清單](https://n8n.io/integrations/)
- [範本/工作流程](https://n8n.io/workflows/)
- [社群論壇](https://community.n8n.io/)
- [YouTube 頻道](https://www.youtube.com/c/n8n-io)
- [X (Twitter)](https://twitter.com/n8n_io)
- [LinkedIn](https://www.linkedin.com/company/n8n/)
- [Discord](https://discord.gg/n8n)
