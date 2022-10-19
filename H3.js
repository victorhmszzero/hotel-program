//Autor: Victor Hugo MS - victorhmszzero Versão: 1.0
//-Programa Ex3----------------------------------------------------------
const car_maxGuest = 15;
var cad_amoutGuest = 0;
var cad_guests = [];

function Ex3Start() {
    alert("Hotel "+ hotel_name +" - Cadastro e Pesquisa de Hospedes");
    cad_amoutGuest = 0;
    cad_guests = [];
    cadMenu();
}
//Informar menu;
function cadMenu() {
    let menu = prompt("Selecione uma opção \n1) Cadastro \n2) Pesquisa \n3) Sair");
    if (menu === null || menu === "3") { // Retornar a seleção de programas?;
        backQuestion();
        cadMenu();
    } else {
        switch (menu) {
            case "1": cadLimitGuest(); break;
            case "2": cadSearchGuest(); break;
        }
    }
    alert("Informe uma opção valida.");
    cadMenu();
}
//Limitar quantidade de hospedes;
function cadLimitGuest() {
    if (cad_amoutGuest >= car_maxGuest) {
        alert("Limite de hospedes cadastrados");
        cadMenu();
    }
    cadAddGuest();
}
//Adicionar hospedes;
function cadAddGuest() {
    let addHospede = prompt("Qual o nome do hóspede?");
    if (addHospede === null) { // Retornar a seleção de programas?;
        backQuestion();
        cadAddGuest();
    } else if (addHospede === "" || addHospede === " ") { // Informar valor novamente;
        alert("Informe o nome do hospede com valores validos.");
        cadAddGuest();
    }
    cad_guests.push(addHospede);
    alert("Hospede " + addHospede + " adicionado com sucesso.");
    cad_amoutGuest += 1;
    cadMenu();
}
//Procurar por hospedes;
function cadSearchGuest() {
    let findHospede = prompt("Qual o nome do hóspede?");
    if (findHospede === null) { // Retornar a seleção de programas?;
        backQuestion();
        cadSearchGuest();
    } else if (findHospede === "" || findHospede === " ") { // Informar valor novamente;
        alert("Informe o nome do hospede com valores validos.");
        cadSearchGuest();
    }
    let check = cad_guests.includes(findHospede);
    if (check) {
        alert("Hóspede " + findHospede + " foi encontrada(o)!");
    } else {
        alert("Hóspede " + findHospede + " não foi encontrada(o)!");
    }
    cadMenu()
}