# AI Chrome Autocomplete Extension 🤖

An AI-powered Chrome extension that provides real-time, inline text completions while users type in text fields across various websites. The extension seamlessly integrates with the **OpenRouter API** (using Meta Llama 3) directly from the browser to generate fast, context-aware suggestions without the need for a separate backend server.

## ✨ Features

* **Real-time AI Autocomplete:** Generates intelligent text continuations while you type.
* **Tab-to-Accept:** Simply press the `Tab` key to seamlessly merge the suggestion into your text.
* **Debounced API Calls:** Implements a 1000ms delay after typing pauses to optimize API usage and reduce unnecessary requests.
* **Dynamic Visual Tooltip:** Displays a styled floating suggestion box directly below the active text input field.
* **Lightweight & Fast:** Runs purely on the client side using vanilla JavaScript.
* **Free & Powerful AI:** Powered by the Meta Llama 3 8B model via OpenRouter for high-speed, cost-free completions.

## 🛠️ Tech Stack

* **Language:** JavaScript (ES6)
* **Browser API:** Chrome Extensions API (Manifest V3)
* **Styling:** Dynamic CSS (injected via DOM manipulation)
* **AI Integration:** OpenRouter API (`meta-llama/llama-3-8b-instruct:free`)

## 📂 Project Structure

```text
ai-autocomplete-extension/
│
├── manifest.json       # Chrome extension configuration and permissions
└── content.js          # Main script handling DOM events, debounce, and API calls
