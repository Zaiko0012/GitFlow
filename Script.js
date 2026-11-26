const formulario = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;

    if (nome === "" || email === "" || telefone === "" || senha === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
    } 
    else if (nome.length < 3) {
        mensagem.textContent = "Digite um nome válido!";
        mensagem.style.color = "red";
    } 
    else if (telefone.replace(/\D/g, "").length < 10) {
        mensagem.textContent = "Digite um telefone válido!";
        mensagem.style.color = "red";
    } 
    else if (senha.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres!";
        mensagem.style.color = "red";
    } 
    else {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";

        formulario.reset();
    }
});
