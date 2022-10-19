//Autor: Victor Hugo MS - victorhmszzero Versão: 1.0
//-Script inicial----------------------------------------------------------
var username, hotel_name;
const password = 2678;
// **Referencia para a maioria dos Scripts**
var reserve_complete = username + ", reserva efetuada com sucesso.";
var reserve_incomplete = username + ", reserva não efetuada.";

// Exibir erro em caso de isNaN;
function erroValue() {
    alert(username + ", informe um valor numerico positivo valido.");
}
// Retornar a seleção de programas;
function backQuestion() {
    let confirma = confirm("Voltar para a seleção de exercicios?");
    if (confirma) {
        choiseEx();
    }
}
//-------------------------------------------------------------------------------------------------------------------
// Informar nome do usuario;
function informUsername() {
    username = prompt("Qual o seu nome?");
    if (username === null || username === "" || username === " ") {
        alert("Insira um nome valido");
        informUsername();
    }
    hotelName();
}
// Informar nome do hotel;
function hotelName() {
    hotel_name = prompt("Qual o nome do hotel?");
    if (hotel_name === null || hotel_name === "" || hotel_name === " ") {
        alert("Insira um nome valido");
        hotelName();
    }
    hotelPassword();
}
function hotelPassword() {
    let check_password = prompt("Qual a senha para acessar o hotel?");
    if (check_password != password) {
        alert("Senha incorreta");
        hotelPassword();
    }
    alert("Bem vindo ao hotel "+ hotel_name +", "+ username +". É um imenso prazer ter você por aqui!");
    choiseEx();
}
// Escolher programa;
function choiseEx() {
    let choise_Ex = prompt("Exercicio hotel - Escolha um programa \n1) Reserva de quartos. \n2) Cadastro de hóspedes.  \n3) Encontrar hóspedes \n4) Reservar um evento com garçons \n5) Reservar um Buffet \n6) Reservar um auditório \n7) Reservar um restaurante \n8) Reabaster combustivel \n9) Manutenção de ar condicionado \n10) Sair");
    switch (choise_Ex) {
        case "1": Ex1Start(); break;
        case "2": Ex2Start(); break;
        case "3": Ex3Start(); break;
        case "4": Ex4Start(); break;
        case "5": Ex5Start(); break;
        case "6": Ex6Start(); break;
        case "7": Ex7Start(); break;
        case "8": Ex8Start(); break;
        case "9": Ex9Start(); break;
        case "10": closeWindow(); break;
        default:
            alert("Insira um numero que corresponde a algum exercicio");
            choiseEx();
    }
}
informUsername();


function closeWindow() {
    if (confirm("Fechar a janela do navegador?")) {
        close();
    } else {
        alert("Reinicado o programa...")
    }
}