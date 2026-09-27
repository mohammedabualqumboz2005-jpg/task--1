const form = document.getElementById('checkForm');
const emailInput = document.getElementById('email');
const resultBox = document.getElementById('resultBox');

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const emailValue = emailInput.value.trim();

    // إظهار الصندوق
    resultBox.classList.remove('hidden');

    // فحص ما إذا كان البريد يحتوي على @gmail.com
    if (emailValue.includes('@gmail.com')) {
        resultBox.innerHTML = '✅ Valid Email (Contains gmail.com)';
        resultBox.className = 'mt-3 p-3 rounded-xl text-center font-medium bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 block';
    } else {
        resultBox.innerHTML = '❌ Does not contain @gmail.com';
        resultBox.className = 'mt-3 p-3 rounded-xl text-center font-medium bg-rose-950/40 border border-rose-500/30 text-rose-400 block';
    }
});