# OpenHands

## 1. 工具簡介
OpenHands 是一個開源的自主 AI 代理平台，專為自動化軟體開發與複雜任務設計。它提供彈性且以開發者為核心的框架，讓代理能規劃、執行並與程式碼、檔案、終端機及網頁互動，大幅減少重複性工作並提升生產力。

## 2. 主要功能
- 開源且可擴充的代理框架，支援軟體自動化
- 規劃器-執行器（Planner-Executor）架構，能分解並執行複雜任務
- 整合多種工具：網頁瀏覽器、檔案系統、終端機、API 等
- 支援 CLI、無頭模式與雲端服務
- 高度自訂：可打造領域專屬或通用型代理
- 代理行為透明且可控
- 支援多種 LLM（如 Anthropic Claude、OpenAI 等）
- Docker 化與本地執行環境
- 活躍的開源社群與頻繁更新

## 3. 常見應用情境
- 軟體開發自動化：自動修復錯誤、實作新功能、程式碼審查
- 研究與報告：自動網路研究、摘要與報告產生
- 資料處理：自動化資料輸入、清理與轉換
- DevOps 與腳本：執行 Shell 指令、檔案管理、CI/CD 任務
- AI 代理能力實驗與基準測試

## 4. 價格方案
- **開源版**：MIT 授權，完全免費，可自由自架與修改。自架與 API 使用會產生基礎設施或 LLM 供應商費用。
- **OpenHands Cloud**：商業雲端服務，新用戶享有 $20 美元免費額度，超出部分依雲端儀表板計價。
- **企業/商業方案**：如需多租戶或進階部署，請聯絡官方團隊洽詢。

## 5. 安裝與設定

### Docker（推薦）
```bash
docker pull docker.all-hands.dev/all-hands-ai/runtime:0.48-nikolaik

docker run -it --rm --pull=always \
    -e SANDBOX_RUNTIME_CONTAINER_IMAGE=docker.all-hands.dev/all-hands-ai/runtime:0.48-nikolaik \
    -e LOG_ALL_EVENTS=true \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v ~/.openhands:/.openhands \
    -p 3000:3000 \
    --add-host host.docker.internal:host-gateway \
    --name openhands-app \
    docker.all-hands.dev/all-hands-ai/openhands:0.48
```
啟動後瀏覽 [http://localhost:3000](http://localhost:3000)

### OpenHands Cloud
- 直接註冊 [https://app.all-hands.dev/](https://app.all-hands.dev/)，免安裝即可使用。

### CLI（本地）
- 詳細 CLI 與無頭模式安裝請參考[官方文件](https://docs.all-hands.dev/usage/installation)。

## 6. 基本用法與範例

- 首次啟動時，請選擇 LLM 供應商並輸入 API 金鑰（如 Anthropic Claude、OpenAI）。
- 可透過網頁介面或 CLI 輸入任務（如：「修正此專案所有 lint 錯誤」）。
- 代理會自動規劃、執行並逐步回報進度。

```bash
# 範例：用 Docker 啟動 OpenHands 並執行任務
openhands --task "彙整本專案所有 GitHub open issue 並摘要"

# 範例：無頭模式執行（詳見官方文件）
openhands --headless --task "重構資料處理流程程式碼"
```

## 7. 官方資源
- [官方網站](https://all-hands.dev/)
- [官方文件](https://docs.all-hands.dev/)
- [GitHub 原始碼](https://github.com/All-Hands-AI/OpenHands)
- [OpenHands Cloud](https://app.all-hands.dev/)
- [Slack 社群](https://join.slack.com/t/openhands-ai/shared_invite/zt-3847of6xi-xuYJIPa6YIPg4ElbDWbtSA)
- [Discord 社群](https://discord.gg/ESHStjSjD4)

> 本文件依據 2024/07 官方資訊整理，功能與價格如有異動請以[官方網站](https://all-hands.dev/)為準。
