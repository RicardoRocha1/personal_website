function login() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    
    if (username !== "" && password !== "") {
        window.location.href = "http://127.0.0.1:5500/personal_website/index.html";
        return false; // Evita o comportamento padrão do envio do formulário
    }
}