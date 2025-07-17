# Claudia

## 1. 總覽
Claudia GUI 是一款專為 Anthropic 的 Claude Code 設計的強大開源圖形化使用者介面。由 Asterisk 開發，Claudia GUI 縮短了命令列操作與視覺化簡化之間的距離，使 AI 輔助編碼更加直觀且高效。Claudia GUI 採用 Tauri、React 和 Rust 等現代技術，為開發者提供無縫的桌面體驗。

## 2. 關鍵功能
- **視覺化專案管理**：直觀的專案瀏覽器，支援智慧搜尋與元數據洞察。
- **自訂 AI 代理**：創建專屬代理，支援沙箱執行與行為記錄。
- **使用分析儀表板**：實時追蹤 Claude API 成本與效能，並提供數據匯出功能。
- **進階沙箱安全性**：作業系統級別的保護（Linux seccomp、macOS Seatbelt）。
- **時間旅行功能**：支援檢查點、分支與視覺化時間軸導航。
- **MCP 伺服器管理**：集中管理模型上下文協議伺服器，支援配置導入與連線測試。

## 3. 常見使用案例
- 使用視覺化介面增強 Claude Code 工作流程。
- 管理多個互動式會話與專案。
- 創建自訂 AI 代理以自動化重複性任務。
- 監控 API 成本並優化 AI 編碼工作流程。

## 4. 定價方案
- **免費且開源**：採用 AGPL 授權。
- **Claude Code 整合**：需使用 Anthropic API，並根據使用量單獨計費。

## 5. 安裝與設定
Claudia GUI 支援 macOS、Linux 和 Windows。請按照以下步驟安裝：

```bash
# 複製儲存庫
git clone https://github.com/getAsterisk/claudia.git

# 安裝前端依賴
bun install

# 構建應用程式
bun run tauri build
```

## 6. 基本用法與範例
1. 啟動 Claudia GUI，選擇「CC Agents」或「CC Projects」。
2. 配置 Claude API 憑證並連接至現有專案。
3. 使用視覺化介面管理會話、創建代理並監控分析。

```bash
# 範例：啟動 Claudia GUI
./src-tauri/target/release/claudia
```

## 7. 相關資源
- [Claudia GUI 官方網站](https://claudia.so/)
- [GitHub 儲存庫](https://github.com/getAsterisk/claudia)
- [貢獻指南](https://github.com/getAsterisk/claudia/blob/main/CONTRIBUTING.md)
- [Claudia GUI 常見問題](https://claudia.so/#faq)

---
> *本文件依據 2025/07 的官方資訊編寫。如需最新功能與定價，請參考官方網站。*
