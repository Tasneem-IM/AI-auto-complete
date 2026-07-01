# AI Inline Autocomplete Copilot 🤖

An AI-powered Chrome extension that provides real-time, inline text completions while users type in text fields across various websites. The extension seamlessly integrates directly with the **OpenRouter API** (using Meta Llama 3) to generate fast, context-aware suggestions dynamically from the client side, without needing a separate backend infrastructure.

## ✨ Project Requirements

* **Real-time Inline Text Completions:** Displays professional, faint "ghost text" completions directly inside or following the text fields as the user types.
* **Tab-to-Complete:** Intercepts browser focus and instantly appends or integrates the active suggestion when the user hits the `Tab` key.
* **Smart Edge-Case Handling:** Accounts for dynamic user activities including page scrolling, window resizing, and accurate text field matching to prevent layout shifting.
* **Cross-Site Compatibility:** Works quietly across all web applications and input fields without interfering with or breaking the sites' existing native functionalities.

## 🧠 Challenges & Solutions Covered

* **Minimal Latency in AI Responses:** Implemented a fine-tuned debounce mechanism (750ms-1000ms pause check) to eliminate rapid-fire API spamming while ensuring instant, optimized completions from the Meta Llama 3 free model.
* **Preserving Focus, Selection, and Undo/Redo Functionality:** Instead of raw value assignment which breaks the browser's native memory, the extension builds custom input event dispatchers (`dispatchEvent`). This updates modern framework-driven inputs (like React or Angular) safely, preserving caret positions and allowing flawless Undo (`Ctrl+Z`) / Redo capabilities.
* **Perfect Match of Textarea Typography:** Dynamically scrapes the source text element's computed values (`fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, and `padding`) via the DOM to render the suggestion inline with precise stylistic consistency.

## 🛠️ Tech Stack

* **Language:** JavaScript (ES6 Vanilla JS)
* **Browser API:** Chrome Extensions API (Manifest V3)
* **Styling:** Injected Dynamic Document Object Model (DOM) Styles
* **AI Provider:** OpenRouter API (`meta-llama/llama-3-8b-instruct:free`)

## 📂 Project Structure

```text
ai-autocomplete-extension/
│
├── manifest.json       # Extension configurations, matches, and metadata
└── content.js          # Core engine managing DOM events, UI injection, and API fetches
