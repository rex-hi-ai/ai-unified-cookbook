# Open WebUI

Open WebUI 是一個可擴充、功能豐富且用戶友善的自架 AI 平台，支援多種 LLM 執行器（如 Ollama、OpenAI API），具備內建 RAG 推理引擎，完全可離線運作，適合個人與企業部署。

---

## 主要功能

- **多模型支援**：同時整合本地 Ollama、OpenAI 相容 API 及多種 LLM，並可於單一對話中切換或合併多模型回應。
- **RAG 文件檢索**：支援本地與遠端文件的檢索式增強生成（RAG），可直接於對話中引用、摘要、搜尋文件、網頁、YouTube 影片等。
- **自訂模型與角色**：內建 Model Builder，可自訂模型、角色、代理人，支援 GGUF 檔案上傳與 Hugging Face 下載。
- **權限與群組管理**：細緻的 RBAC 權限控管，支援多用戶、群組、LDAP、API 金鑰、模型白名單等。
- **豐富 UI/UX**：支援 Markdown、LaTeX、程式碼高亮、主題切換、PWA、行動裝置最佳化、即時通知、快捷鍵、聊天分頁、資料夾、標籤、複製/匯出/匯入對話等。
- **插件與管線（Pipelines）**：可擴充 Python 管線，支援 Function Calling、RAG、Langfuse 監控、Rate Limit、Detoxify、LLM-Guard、LibreTranslate 等。
- **語音與多媒體**：語音輸入、TTS、視訊通話（支援 LLaVA、GPT-4o）、圖片生成、SVG/網頁嵌入、音訊壓縮與轉錄。
- **高可用性與擴展性**：支援多節點、Redis、S3、Postgres、ChromaDB、Milvus、Kubernetes、Helm、Docker Compose 部署。
- **企業級功能**：自訂品牌、SLA、LTS、專屬工程師支援、白標、專屬功能開發、合規（SOC2、HIPAA、GDPR、ISO 27001）、備份與災難復原。

---

## 價格方案

- **免費社群版**：
  - 完全免費、無功能限制、可自架於本地或雲端。
  - 適合個人、開發者、小型團隊。
- **企業版（Enterprise）**：
  - 需聯絡官方報價（[sales@openwebui.com](mailto:sales@openwebui.com)）。
  - 提供專屬 SLA、LTS、品牌客製、專屬工程師、進階安全、合規、訓練與顧問服務。
- **Elestio 雲端託管**：
  - 由 Elestio 提供全託管雲端部署，按月計費，價格依主機規格與地區而異。
  - 適合無自架經驗或需快速上線的用戶。

> 免費版功能完整，企業用戶可依需求選擇進階支援與服務。

---

## 安裝方式

### 1. Docker 一鍵安裝

- **Ollama 內建版（CPU）：**
  ```bash
  docker run -d -p 3000:8080 -v ollama:/root/.ollama -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:ollama
  ```
- **Ollama 內建版（GPU）：**
  ```bash
  docker run -d -p 3000:8080 --gpus=all -v ollama:/root/.ollama -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:ollama
  ```
- **連接本機 Ollama：**
  ```bash
  docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
  ```

安裝完成後，瀏覽 [http://localhost:3000](http://localhost:3000) 開始使用。

### 2. Python/pip 安裝

- 安裝：
  ```bash
  pip install open-webui
  ```
- 啟動：
  ```bash
  open-webui serve
  ```
- 預設網址：[http://localhost:8080](http://localhost:8080)

### 3. 其他安裝方式

- 支援 uv、Kubernetes、Helm、Podman、Docker Compose 等，詳見[官方文件](https://docs.openwebui.com/getting-started/)。

---

## 使用方式

1. **首次啟動**：依指示建立管理員帳號。
2. **新增模型**：可直接拉取 Ollama 模型或設定 OpenAI API。
3. **文件上傳與 RAG**：於 Workspace > Documents 上傳文件，或於對話中以 `#` 指令引用。
4. **多用戶/權限管理**：於管理後台設定用戶、群組、權限。
5. **自訂插件/管線**：於 Admin Panel > Settings > Pipelines 上傳自訂 Python 管線。
6. **進階功能**：如語音、視訊、API 整合、Webhook、LDAP、S3、Redis、備份等，詳見[官方文件](https://docs.openwebui.com/features/)。

---

## 官方資源

- [官方網站](https://openwebui.com/)
- [文件中心](https://docs.openwebui.com/)
- [GitHub](https://github.com/open-webui/open-webui)
- [Discord 社群](https://discord.gg/5rJgQTnV4s)
- [企業方案](https://docs.openwebui.com/enterprise/)
- [Elestio 雲端託管](https://elest.io/open-source/openwebui)

---

> 本文件依據 2024/07 官方網站與文件整理，功能與價格如有異動請以[官方資訊](https://openwebui.com/)為準。
