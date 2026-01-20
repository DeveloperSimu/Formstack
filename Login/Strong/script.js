const loginForm = document.getElementById('loginForm');
const toast = document.getElementById('toast');
const themeIcon = document.getElementById('theme-icon');

// Show toast message
function showToast(message, type="info"){
    toast.innerText = message;
    toast.style.background = type==="success"? "linear-gradient(135deg,#4ecdc4,#45b7d1)"
                        : type==="error"? "linear-gradient(135deg,#ff6b6b,#feca57)"
                        : "rgba(255,255,255,0.05)";
    toast.classList.add('show');
    setTimeout(()=>{ toast.classList.remove('show'); },3000);
}

// Form submit
loginForm.addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const btn = document.getElementById('loginBtn');

    if(!email || !password){
        showToast("Please fill all fields!", "error");
        return;
    }

    if(email==="admin@gmail.com" && password==="admin123"){
        showToast("Login successful! 🚀", "success");
        btn.disabled = true;
        btn.innerText="Signing In...";
        setTimeout(()=>{
            btn.disabled=false;
            btn.innerText="Sign In";
            // Redirect simulation
            showToast("Redirecting to dashboard...", "info");
        },2000);
    } else {
        showToast("Invalid credentials!", "error");
    }
});

// Social buttons
document.querySelectorAll('.social-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        showToast(`${btn.textContent.trim()} login clicked! 🔗`);
    });
});

// Theme toggle
themeIcon.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode');
    themeIcon.textContent = document.body.classList.contains('dark-mode')?"☀️":"🌙";
});

// Input focus animation
document.querySelectorAll('input').forEach(input=>{
    input.addEventListener('focus', ()=> input.parentElement.classList.add('focused'));
    input.addEventListener('blur', ()=>{ if(!input.value) input.parentElement.classList.remove('focused'); });
});
