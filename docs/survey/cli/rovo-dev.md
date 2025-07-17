# Rovo Dev CLI

## 1. 工具簡介
Rovo Dev CLI 是 Atlassian 推出的 AI 編碼代理，專為開發者設計，將 AI 助理能力帶入終端機。它能理解整個專案上下文，協助程式碼生成、重構、除錯、審查與文件產生，並與 Jira、Confluence、Bitbucket 等 Atlassian 生態系統無縫整合，提升開發效率與團隊協作。

## 2. 主要功能
- AI 助理開發：於終端機直接進行 AI 輔助程式設計、重構、除錯、審查與文件生成
- 全域程式碼理解與跨檔案變更
- 自然語言互動與查詢專案結構
- Jira、Confluence、Bitbucket 整合，支援 MCP Server 擴充
- 自適應記憶系統，保留專案知識並調整行為
- 企業級安全控管、資源監控與安全協議
- SWE-bench Full Benchmark 取得 41.98% 解決率（2025/6 排名第一）

## 3. 常見應用情境
- 複雜程式碼庫探索與理解
- Jira 任務、Confluence 文件、Bitbucket 版本控制一站式處理
- Pull Request 自動化審查與建議
- 自動生成與優化專案文件
- CI/CD 故障自動分析與解決
- 大型程式碼遷移與重構輔助
- 過時功能標記自動清理

## 4. 價格方案
- **Beta 期間完全免費**：目前所有功能皆免費。
- **限量用戶**：達到上限後將進入候補名單。
- **未來收費**：正式版收費模式尚未公布。

## 5. 安裝與設定
1. 安裝 Atlassian CLI (ACLI)：
   - [macOS 安裝教學](https://developer.atlassian.com/cloud/acli/guides/install-macos/)
   - [Linux 安裝教學](https://developer.atlassian.com/cloud/acli/guides/install-linux/)
   - [Windows 安裝教學](https://developer.atlassian.com/cloud/acli/guides/install-windows/)
2. 申請 Beta：[Rovo Dev Beta 申請](https://www.atlassian.com/try/cloud/signup?bundle=devai)
3. 產生 API Token：[Atlassian 個人檔案](https://id.atlassian.com/manage-profile/security/api-tokens)
4. 終端機登入與啟動：

```bash
acli rovodev auth login
acli rovodev run
```

## 6. 基本用法與範例
- 啟動互動模式後，直接以自然語言描述需求（如「重構此函式」、「產生文件」等）
- 於專案目錄下查詢、生成、修改程式碼
- 整合 Jira、Confluence、Bitbucket 流程

```bash
# 登入 Atlassian 帳號
acli rovodev auth login

# 啟動 Rovo Dev 互動模式
acli rovodev run
```

## 7. 官方資源
- [官方網站（AI 開發解決方案）](https://www.atlassian.com/solutions/devops/ai-innovation)
- [Rovo Dev CLI 官方公告](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)
- [Rovo Dev CLI 介紹與安裝指南](https://community.atlassian.com/forums/Rovo-for-Software-Teams-Beta/Introducing-Rovo-Dev-CLI-AI-Powered-Development-in-your-terminal/ba-p/3043623)
- [SWE-bench 排行榜](https://www.swebench.com/#full)
- [ACLI 官方文件](https://developer.atlassian.com/cloud/acli/guides/introduction/)
- [Rovo Dev Beta 申請](https://www.atlassian.com/try/cloud/signup?bundle=devai)
- [Rovo Dev 社群](https://community.atlassian.com/forums/Rovo-Dev-AI-Agents-Beta/gh-p/rovo-dev-ai-agents)
- [問題回報表單](https://rovodevagents.atlassian.net/servicedesk/customer/portal/1/group/1/create/45)

> 本文件依據 2025/07 官方資訊整理，功能與價格如有異動請以官方網站為準。
