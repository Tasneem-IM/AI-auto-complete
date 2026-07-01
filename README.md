AI Chrome Autocomplete Extension 🤖
An AI-powered Chrome extension that provides real-time, inline text completions while users type in text fields across various websites. The extension seamlessly integrates with the OpenRouter API (using Meta Llama 3) directly from the browser to generate fast, context-aware suggestions without the need for a separate backend server.

✨ Features
Real-time AI Autocomplete: Generates intelligent text continuations while you type.

Tab-to-Accept: Simply press the Tab key to seamlessly merge the suggestion into your text.

Debounced API Calls: Implements an 800ms delay after typing pauses to optimize API usage and reduce unnecessary requests.

Dynamic Visual Tooltip: Displays a non-intrusive floating suggestion box directly below the text input field.

Lightweight & Fast: Runs purely on the client side using vanilla JavaScript.

Free & Powerful AI: Powered by the Meta Llama 3 8B model via OpenRouter for high-speed, cost-free completions.

🛠️ Tech Stack
Language: JavaScript (ES6)

Browser API: Chrome Extensions API (Manifest V3)

Styling: Dynamic CSS (injected via DOM manipulation)

AI Integration: OpenRouter API (meta-llama/llama-3-8b-instruct:free)

📂 Project Structure
Plaintext
ai-autocomplete-extension/
│
├── manifest.json       # Chrome extension configuration and permissions
└── content.js          # Main script handling DOM events, debounce, and API calls
⚙️ How It Works
The content.js script attaches event listeners to standard TEXTAREA and INPUT elements on any webpage.

When a user types and pauses for 800 milliseconds, a debounced function is triggered.

The script sends the current text to the OpenRouter API.

The Meta Llama 3 model analyzes the context and returns a logical continuation.

A floating, styled div appears near the input field, showing the suggestion and prompting the user to press Tab.

Upon pressing the Tab key, the extension intercepts the default browser behavior and appends the AI suggestion to the user's original text.

🚀 Installation & Setup
Clone or download the repository:

Bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
Set up your OpenRouter API Key (Optional for deployment):

Create a free account at OpenRouter.

Generate a new API key.

Open content.js and replace the placeholder API key in the fetch headers with your new key.

Load the Extension into Chrome:

Open Google Chrome and navigate to chrome://extensions/.

Enable Developer Mode using the toggle switch in the top right corner.

Click the Load unpacked button in the top left.

Select the folder containing your project files (manifest.json and content.js).

🚧 Current Limitations
Primarily supports standard HTML <textarea> and text <input> elements.

Requires the API key to be hardcoded or manually updated in the content.js file (ideal for local testing).

Does not fully support complex rich text editors that rely heavily on contenteditable attributes (like Google Docs or advanced Notion blocks).

🔮 Future Improvements
Popup Interface: Create a popup.html menu allowing users to securely input and save their API keys using Chrome Storage.

Advanced Positioning: Implement libraries like caret-pos to display suggestions exactly at the text cursor's coordinates rather than the bottom of the input element.

Expanded Editor Support: Add comprehensive support for contenteditable elements used in modern web apps like Gmail and Slack.

Model Selection: Allow users to choose their preferred AI model directly from the extension's settings.

👤 Author
[Your Name]
