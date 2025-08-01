# Warp AI

## 1. 總覽
Warp AI 是一款內建 AI 助理的現代終端機，能將自然語言轉換為指令、協助除錯、解釋指令與輸出，並自動生成工作流程。其設計目標是提升開發者在命令列環境下的效率與體驗。

## 2. 關鍵功能
- AI 功能原生整合於 Warp 終端
- 自然語言轉指令，快速生成可執行命令
- AI 輔助除錯與指令解釋
- 工作流程與腳本自動生成
- 對話式查詢與即時追問
- 支援多主流 AI 模型與多平台

## 3. 常見使用案例
- 提升命令列工作效率
- 即時除錯與指令學習
- 快速生成複雜工作流程或腳本
- 學習與解釋複雜 CLI 工具

## 4. 定價方案
| 方案名稱      | 價格 (月繳)         | 價格 (年繳)         | AI 諮詢次數/月 | 主要功能與限制                                                                                 |
| :------------ | :------------------ | :------------------ | :------------ | :------------------------------------------------------------------------------------------- |
| 免費版        | $0                  | $0                  | 150           | 3 個索引程式庫、5,000 檔案/程式庫、10 個 Workflows、3 個 Notebooks、5 個即時共享 Session、支援多主流模型 |
| Pro 版        | $18/人              | $15/人              | 2,500         | 40 個索引程式庫、10,000 檔案/程式庫、無限 Workflows/Notebooks/Session、支援超額付費               |
| Turbo 版      | $50/人              | $40/人              | 10,000        | 40 個索引程式庫、20,000 檔案/程式庫、無限 Lite AI 諮詢、團隊 3 人以上年繳 $30/人/月                |
| Enterprise 版 | 聯絡銷售            | 聯絡銷售            | 客製           | 客製 AI 限額、Zero Data Retention、SAML SSO、可自帶 LLM、專屬客戶經理                              |

> 詳細方案與功能比較請參考[官方定價頁面](https://www.warp.dev/pricing)

## 5. 安裝與設定
- 前往 [官方網站](https://www.warp.dev/download) 下載對應平台的 Warp 終端
- 安裝後登入帳號並啟用 Warp AI

```bash
# 以 Homebrew 安裝（macOS）
brew install --cask warp
# 下載 Windows/Linux 版請見官方網站
```

## 6. 基本用法與範例
- 啟動 Warp 終端後，於輸入列直接輸入自然語言描述需求
- 例如：「列出目前資料夾所有檔案並顯示詳細資訊」
- Warp AI 會自動轉換為對應指令並可直接執行

```bash
# 例：自然語言轉指令
ls -al

# 例：AI 解釋指令
warp explain "tar -czvf archive.tar.gz folder/"
```

## 7. 官方資源
- [Warp AI 官方網站](https://www.warp.dev/warp-ai)
- [官方定價頁面](https://www.warp.dev/pricing)
- [官方文件](https://docs.warp.dev/)
- [GitHub Repository](https://github.com/warpdotdev/Warp)

> 本文件依據 2025/07 官方資訊整理，功能與價格如有異動請以官方網站為準。
