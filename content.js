console.log("🤖 AI Autocomplete Extension Active!");

let suggestionBox = null;
let currentInput = null;
let debounceTimeout = null;
let currentSuggestion = "";

// دالة استدعاء الذكاء الاصطناعي
async function getSuggestion(text) {
  if (text.trim().length < 5) return ""; 

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // تم إضافة كلمة Bearer هنا ومسافة بعدها بدقة 🛑
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        "model": "meta-llama/llama-3-8b-instruct:free",
        "messages": [
          {
            "role": "system",
            "content": "You are an autocomplete assistant. Provide ONLY the next few words to complete the user's sentence naturally. Do not repeat what the user wrote."
          },
          {
            "role": "user",
            "content": text
          }
        ],
        "max_tokens": 10
      })
    });

    const data = await response.json();
    // سطر لمراقبة النتيجة الحقيقية في الـ Console 🕵️‍♀️
    console.log("الرد القادم من الذكاء الاصطناعي:", data);

    if (data.error) {
      console.error("خطأ من الـ API نفسه:", data.error.message);
      return "";
    }

    return data.choices[0]?.message?.content?.trim() || "";

  } catch (err) {
    console.error("Fetch Network Error:", err);
    return "";
  }
}

// إنشاء صندوق الاقتراحات
function createSuggestionBox() {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.color = "#4a4a4a"; // تغميق اللون قليلاً ليصبح مقروءاً
  div.style.backgroundColor = "#fffbcc"; // لون خلفية أصفر خفيف جداً مثل الـ Tooltip ليميزه المستخدم
  div.style.border = "1px solid #e6db55";
  div.style.borderRadius = "4px";
  div.style.padding = "4px 8px";
  div.style.pointerEvents = "none"; 
  div.style.fontFamily = "inherit";
  div.style.fontSize = "13px";
  div.style.zIndex = "999999";
  document.body.appendChild(div);
  return div;
}

function updatePosition(el) {
  const rect = el.getBoundingClientRect();
  suggestionBox.style.left = rect.left + window.scrollX + "px";
  suggestionBox.style.top = (rect.bottom + window.scrollY + 5) + "px"; 
}

document.addEventListener("input", (e) => {
  const el = e.target;
  if (!(el.tagName === "TEXTAREA" || el.isContentEditable || el.tagName === "INPUT")) return;

  currentInput = el;
  if (!suggestionBox) suggestionBox = createSuggestionBox();

  clearTimeout(debounceTimeout);
  const text = el.value || el.innerText;

  debounceTimeout = setTimeout(async () => {
    if (text.trim().length < 5) {
        suggestionBox.style.display = "none";
        return;
    }
    
    console.log("جاري إرسال النص المكتوب للذكاء الاصطناعي...", text);
    const suggestion = await getSuggestion(text);
    
    if (suggestion) {
      currentSuggestion = suggestion;
      suggestionBox.innerText = "👉 " + suggestion + " [Press Tab]"; 
      suggestionBox.style.display = "block";
      updatePosition(el);
    } else {
      suggestionBox.style.display = "none";
    }
  }, 800); 
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab" && suggestionBox && suggestionBox.style.display === "block" && currentInput) {
    e.preventDefault(); 

    if (currentInput.tagName === "TEXTAREA" || currentInput.tagName === "INPUT") {
      currentInput.value += " " + currentSuggestion;
    } else {
      currentInput.innerText += " " + currentSuggestion;
    }

    suggestionBox.style.display = "none";
    currentSuggestion = "";
  }
});