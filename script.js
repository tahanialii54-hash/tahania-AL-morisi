// ==========================================
// 1. التحكم في النوافذ المنبثقة (Modals)
// ==========================================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
  }
}

// إغلاق النافذة عند الضغط خارج صندوق المحتوى
window.onclick = function(event) {
  if (event.target.classList.contains('modal-overlay')) {
    event.target.classList.remove('active');
  }
};

// ==========================================
// 2. منطق المثال الأول: المتغيرات والعمليات الحسابية
// ==========================================
function calculate(op) {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  const resBox = document.getElementById('calc-result');

  if (isNaN(n1) || isNaN(n2)) {
    resBox.innerText = "⚠️ يرجى إدخال أرقام صالحة!";
    resBox.style.color = "#d32f2f";
    return;
  }

  let res = 0;
  if (op === '+') res = n1 + n2;
  if (op === '-') res = n1 - n2;
  if (op === '*') res = n1 * n2;
  if (op === '/') {
    if (n2 === 0) {
      resBox.innerText = "⚠️ لا يمكن القسمة على الصفر!";
      resBox.style.color = "#d32f2f";
      return;
    }
    res = n1 / n2;
  }

  resBox.innerText = `النتيجة: ${res}`;
  resBox.style.color = "#2e7d32";
}

// ==========================================
// 3. منطق المثال الثاني: الجمل الشرطية (If / Else)
// ==========================================
function checkGrade() {
  const score = parseFloat(document.getElementById('userScore').value);
  const resBox = document.getElementById('condition-result');

  if (isNaN(score)) {
    resBox.innerText = "⚠️ يرجى إدخال درجة صالحة!";
    resBox.style.color = "#d32f2f";
    return;
  }

  if (score < 0 || score > 100) {
    resBox.innerText = "⚠️ الدرجة يجب أن تكون من 0 إلى 100!";
    resBox.style.color = "#d32f2f";
  } else if (score >= 90) {
    resBox.innerText = `الدرجة (${score}): ممتاز 🌟 (Grade A)`;
    resBox.style.color = "#2e7d32";
  } else if (score >= 80) {
    resBox.innerText = `الدرجة (${score}): جيد جداً 👍 (Grade B)`;
    resBox.style.color = "#1565c0";
  } else if (score >= 70) {
    resBox.innerText = `الدرجة (${score}): جيد 👌 (Grade C)`;
    resBox.style.color = "#f57c00";
  } else if (score >= 50) {
    resBox.innerText = `الدرجة (${score}): مقبول ⚖️ (Grade D)`;
    resBox.style.color = "#ef6c00";
  } else {
    resBox.innerText = `الدرجة (${score}): راسب ❌ (Grade F)`;
    resBox.style.color = "#c62828";
  }
}
// ==========================================
// 4. منطق المثال الثالث: الحلقات التكرارية (For Loop)
// ==========================================
function generateTable() {
  const num = parseInt(document.getElementById('loopNum').value);
  const resBox = document.getElementById('loop-result');

  if (isNaN(num)) {
    resBox.innerText = "⚠️ يرجى إدخال رقم صحيح!";
    resBox.style.color = "#d32f2f";
    return;
  }

  // استخدام حلقة التكرار لإنشاء جدول الضرب من 1 إلى 10
  let outputHTML = `<div style="font-weight: bold; margin-bottom: 8px; color: #2b6cb0;">جدول ضرب الرقم ${num}:</div>`;
  
  for (let i = 1; i <= 10; i++) {
    let result = num * i;
    outputHTML += `<div>${num} × ${i} = <span style="color: #2e7d32;">${result}</span></div>`;
  }

  resBox.innerHTML = outputHTML;
  resBox.style.color = "#2d3748";
}
// ==========================================
// 5. التحكم في القائمة الجانبية (Sidebar)
// ==========================================
function toggleSidebar() {
  const sidebar = document.getElementById('appSidebar');
  if (sidebar) {
    sidebar.classList.toggle('active');
  }
}
// ==========================================
// 6. منطق المثال الخامس: معالجة النصوص (String Methods)
// ==========================================
function analyzeText() {
  const text = document.getElementById('textInput').value;
  const resBox = document.getElementById('string-result');

  if (!resBox) return;

  if (text.trim() === "") {
    resBox.innerHTML = "<span style='color: #718096;'>الرجاء إدخال نص لتحليله...</span>";
    return;
  }

  const charCount = text.length;
  const wordsCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const upperText = text.toUpperCase();
  const lowerText = text.toLowerCase();

  resBox.innerHTML = `
    <div>📏 عدد الحروف: <span style="color: #2b6cb0; font-weight: bold;">${charCount}</span></div>
    <div>Words عدد الكلمات: <span style="color: #2b6cb0; font-weight: bold;">${wordsCount}</span></div>
    <div>🔠 بالحروف الكبيرة: <span style="color: #2e7d32; font-weight: bold;">${upperText}</span></div>
    <div>🔡 بالحروف الصغيرة: <span style="color: #2e7d32; font-weight: bold;">${lowerText}</span></div>
  `;
}

// تنفيذ التحليل تلقائياً عند فتح النافذة لأول مرة
document.addEventListener("DOMContentLoaded", function() {
  // إذا أردت تشغيلها افتراضياً
  if(document.getElementById('textInput')) {
    analyzeText();
  }
});
// ==========================================
// 7. منطق المثال السادس: الكائنات (Objects)
// ==========================================
const userProfile = {
  name: "تهاني المريسي",
  role: "مطلورة ومصممة واجهات ويب",
  status: "متاحة للعمل 🟢",
  skills: ["HTML", "CSS", "JavaScript"]
};

function renderProfile() {
  const displayBox = document.getElementById('profile-display');
  if (!displayBox) return;

  displayBox.innerHTML = `
    <div style="margin-bottom: 6px;">📌 <strong>الاسم:</strong> ${userProfile.name}</div>
    <div style="margin-bottom: 6px;">💼 <strong>المهنة:</strong> ${userProfile.role}</div>
    <div style="margin-bottom: 6px;">⚡ <strong>الحالة:</strong> <span style="color: #2e7d32;">${userProfile.status}</span></div>
    <div>🛠️ <strong>المهارات:</strong> ${userProfile.skills.join(' - ')}</div>
  `;
}

function updateProfileStatus() {
  // تغيير قيمة داخل الكائن وعرض التحديث فوراً
  if (userProfile.status.includes("متاحة")) {
    userProfile.status = "في وضع التطوير 🚀";
  } else {
    userProfile.status = "متاحة للعمل 🟢";
  }
  renderProfile();
}

// تشغيل عرض الملف الشخصي أول فتح للملف
document.addEventListener("DOMContentLoaded", function() {
  renderProfile();
});
// ==========================================
// 8. منطق المثال السابع: التاريخ والوقت (Date)
// ==========================================
function updateLiveTime() {
  const displayBox = document.getElementById('time-display');
  if (!displayBox) return;

  const now = new Date();
  const hours = now.getHours();
  
  // تحديد التحية بناءً على الوقت
  let greeting = "أهلاً بك 👋";
  if (hours >= 5 && hours < 12) {
    greeting = "صباح الخير ☀️";
  } else if (hours >= 12 && hours < 17) {
    greeting = "طابت أوقاتكم 🌤️";
  } else {
    greeting = "مساء الخير 🌙";
  }

  const timeString = now.toLocaleTimeString('ar-EG');
  const dateString = now.toLocaleDateString('ar-EG', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  displayBox.innerHTML = `
    <div style="font-size: 1.2rem; color: #2b6cb0; font-weight: bold; margin-bottom: 8px;">${greeting}</div>
    <div style="font-size: 1.1rem; margin-bottom: 6px; color: #111;">⏰ الوقت: ${timeString}</div>
    <div style="font-size: 0.955rem; color: #4a5568;">📅 التاريخ: ${dateString}</div>
  `;
}

// تشغيل الساعة فور فتح النافذة
document.addEventListener("DOMContentLoaded", function() {
  updateLiveTime();
});