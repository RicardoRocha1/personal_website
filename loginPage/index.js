function login() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    
    if (username !== "" && password !== "") {
        window.location.href = "teste.html";
        return false; // Evita o comportamento padrão do envio do formulário
    }
}