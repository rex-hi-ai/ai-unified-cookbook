# OpenAI Codex CLI

## 1. 總覽
OpenAI Codex CLI 是指透過 OpenAI API（現已整合於 GPT-4o、GPT-4 Turbo、GPT-3.5 Turbo 等模型）以命令列或腳本方式進行程式碼生成、解釋、自然語言處理與多模態任務。可透過官方 Python、Node.js SDK 或直接 HTTP 請求存取。

## 2. 關鍵功能
- 程式碼生成、補全、解釋
- 自然語言轉程式碼
- 多模態支援（文字、圖片、程式碼）
- Function calling 與工具整合
- Agents 與自動化工作流程
- 串流與即時回應
- 官方 Python、Node.js SDK

## 3. 常見使用案例
- 以自然語言生成程式碼
- 程式碼解釋、重構
- 建立 AI 開發者工具
- 自動化重複性程式任務
- 整合 AI 於 CI/CD 流程
- 資料擷取與文件分析

## 4. 定價方案
- **按量計費**：依模型與 tokens 數量計價
  - GPT-4o：輸入 $5/百萬 tokens，輸出 $15/百萬 tokens
  - GPT-4 Turbo：輸入 $10/百萬 tokens，輸出 $30/百萬 tokens
  - GPT-3.5 Turbo：輸入 $0.5/百萬 tokens，輸出 $1.5/百萬 tokens
- 無免費額度（僅 ChatGPT 網頁有限免費）
- 詳細與最新價格請參考 [官方定價頁](https://platform.openai.com/docs/pricing)

## 5. 安裝與設定
安裝官方 Python SDK：
```bash
pip install openai
```
或 Node.js SDK：
```bash
npm install openai
```
設定 API 金鑰（於 [OpenAI Platform](https://platform.openai.com/api-keys) 取得）：
```bash
export OPENAI_API_KEY="<your-api-key>"
```

## 6. 基本用法與範例
以 Python SDK 生成程式碼：
```python
import openai
openai.api_key = "<your-api-key>"
response = openai.ChatCompletion.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "請寫一個反轉字串的 Python 函式。"}]
)
print(response.choices[0].message["content"])
```
或 Node.js SDK：
```js
import OpenAI from "openai";
const openai = new OpenAI();
const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "請寫一個反轉字串的 JavaScript 函式。" }]
});
console.log(response.choices[0].message.content);
```

## 7. 官方資源
- [官方網站](https://platform.openai.com/)
- [官方文件](https://platform.openai.com/docs)
- [GitHub 儲存庫](https://github.com/openai/openai-python)
- [API 定價](https://platform.openai.com/docs/pricing)
