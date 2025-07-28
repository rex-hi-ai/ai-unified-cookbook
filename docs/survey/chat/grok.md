# Grok

## 1. 總覽
Grok 是由 xAI 推出的先進多模態 AI 助手，支援即時搜尋、程式設計、推理、語音、圖像理解等功能。Grok 4 與 Grok 4 Heavy 具備業界領先的推理能力，並可透過 Web、iOS、Android、X (Twitter) 及 API 存取，適用於個人、團隊與企業級應用。

## 2. 關鍵功能
- Grok 4/4 Heavy：最先進的推理與多模態 AI 模型
- 原生工具使用：自動選擇搜尋、程式碼解譯、網頁瀏覽等工具
- 即時整合 X (Twitter) 與網路搜尋
- 支援語音模式（Grok Voice）與視覺分析
- 文件理解與摘要、圖像生成
- 256,000 tokens 超大上下文視窗（API）
- API 企業級安全（SOC 2 Type 2、GDPR、CCPA 認證）
- 跨平台支援：Web、iOS、Android、X 內建、API
- SuperGrok Heavy：平行推理、最強大模型預覽

## 3. 常見使用案例
- 即時趨勢與市場分析（X 平台資料）
- 複雜問題推理、深度研究
- 文件理解、摘要與知識萃取
- 程式碼生成、重構與最佳實踐建議
- 圖像生成、視覺內容創作
- 語音互動、自然語言助理
- 企業級 API 整合與自動化

## 4. 定價方案
### X (Twitter) 內 Grok
- 免費版：$0/月，基礎 Grok 功能、有限使用量，需 X 帳號
- X Basic：$3/月 或 $32/年，少量 Grok 存取、長文/長影片
- X Premium：$8/月 或 $84/年，增加 Grok 使用量、藍勾勾、減少廣告
- X Premium+：$40/月 或 $395/年，最高 Grok 使用量、Grok 4 存取、無廣告

### SuperGrok（grok.com 獨立服務）
- Free：$0，Grok 3、有限上下文、基礎功能
- SuperGrok：$30/月，Grok 4、128,000 tokens、視覺語音模式
- SuperGrok Heavy：$300/月，Grok 4 Heavy、最強大模型、專業支援

> *SuperGrok 服務無需 X Premium 訂閱，支援年繳享 16% 折扣。API 企業方案請洽官方。

## 5. 安裝與設定
Grok 消費者服務無需安裝，直接於 Web、iOS、Android 或 X 使用。

### API/開發者安裝
1. 前往 [xAI API 控制台](https://console.x.ai/) 申請 API 金鑰
2. 參考官方文件安裝 Python 套件：
```bash
pip install xai
```

## 6. 基本用法與範例
### Web/iOS/Android
- 直接登入 [grok.com](https://grok.com/) 或下載 App，輸入問題即可互動。

### X (Twitter) 內使用
- 於 X 介面點選 Grok，或升級 Premium/Premium+ 享完整功能。

### API 基本用法
```python
import xai
client = xai.Client(api_key="<YOUR_API_KEY>")
response = client.chat("請用 Grok 4 幫我摘要這份文件")
print(response.text)
```

## 7. 官方資源
- [Grok 官方網站](https://grok.com/)
- [xAI 公司網站](https://x.ai/)
- [Grok 4 發布公告](https://x.ai/news/grok-4)
- [X Premium 定價](https://help.x.com/en/using-x/x-premium#pricing)
- [Grok on X](https://x.com/i/grok)
- [Grok iOS 應用](https://apps.apple.com/app/apple-store/id6670324846)
- [Grok Android 應用](https://play.google.com/store/apps/details?id=ai.x.grok)
- [xAI API 文檔](https://docs.x.ai/)
- [xAI API 控制台](https://console.x.ai/)
