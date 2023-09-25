    const loginButton = document.getElementById('login-btn');
    const logoutButton = document.getElementById('logout-btn');
    
    loginButton.onclick = loginFunction;
    logoutButton.onclick = logoutFunction;
    
    function loginFunction() {
      window.location.href = 'home.html';
    }
    
    function logoutFunction() {
      window.location.href = 'index.html';
    }