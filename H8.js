//Autor: Victor Hugo MS - victorhmszzero Versão: 1.0
//-Programa Ex8----------------------------------------------------------
var wo_alcool, wo_gasoline, sp_alcool, sp_gasoline; // Valores de cada Posto;
var wo_alcoolfull, sp_alcoolfull = 0 //Alcool + 30% de Gasolina;

const posto_carLimit = 42; // Limite de litros que o carro suporta;
var sp_alcool_isBetter, sp_gasoline_isBetter = false;

function Ex8Start() {
    alert("Hotel "+ hotel_name +" - Reabaster combustivel");
    postTankCar();
}
// Reabester o tanque;
function postTankCar() {
    let confirma = confirm("O tanque de seu carro comporta " + posto_carLimit + " litros de combústivel \nReabaster todo o tanque?");
    if (confirma) {
        postWoAlcool();
    } else {
        postTankLiter();
    }
}
// Informar litros para reabester;
function postTankLiter() {
    let litros = parseInt(prompt("Informe a quantidade de litros a ser reabastecido."));
    if (litros === null) { // Retornar a seleção de programas?;
        backQuestion();
        postTankLiter();
    } else if (isNaN(litros)) { // Informar valor novamente;
        erroValue();
        postTankLiter();
    } else if (litros > posto_carLimit) { // Informar litros novamente;
        alert("Quantidade de litros superior à capacidade máxima.");
        Ex8Start();
    } else {
        postWoAlcool();
    }
}
// Informar valores do alcool posto W.O;
function postWoAlcool() {
    wo_alcool = parseInt(prompt("Qual o valor de 1L de álcool no posto Wayne Oil?"));
    if (wo_alcool === 0) { // Retornar a seleção de programas?;
        backQuestion();
        postWoAlcool();
    } else if (wo_alcool < 1 || isNaN(wo_alcool)) { // Informar valor novamente;
        erroValue();
        postWoAlcool();
    } else {
        postWoGasoline();
    }
}
// Informar valores da gasolina posto W.O;
function postWoGasoline() {
    wo_gasoline = parseInt(prompt("Qual o valor de 1L de gasolina no posto Wayne Oil?"));
    if (wo_gasoline === 0) { // Retornar a seleção de programas?;
        backQuestion();
        postWoGasoline();
    } else if (wo_gasoline < 1 || isNaN(wo_gasoline)) { // Informar valor novamente;
        erroValue();
        postWoGasoline();
    } else {
        postSpAlcool();
    }
}
// Informar valores do alcool posto S.P;
function postSpAlcool() {
    sp_alcool = parseInt(prompt("Qual o valor de 1L de álcool no posto Stark Petrol?"));
    if (sp_alcool === 0) { // Retornar a seleção de programas?;
        backQuestion();
        postSpAlcool();
    } else if (sp_alcool < 1 || isNaN(sp_alcool)) { // Informar valor novamente;
        erroValue();
        postSpAlcool();
    } else {
        postSpGasoline();
    }
}
// Informar valores da gasolina posto S.P;
function postSpGasoline() {
    sp_gasoline = parseInt(prompt("Qual o valor de 1L de gasolina no posto Stark Petrol?"));
    if (sp_gasoline === 0) { // Retornar a seleção de programas?;
        backQuestion();
        postSpGasoline();
    } else if (sp_gasoline < 1 || isNaN(sp_gasoline)) { // Informar valor novamente;
        erroValue();
        postSpGasoline();
    } else {
        postComparation();
    }
}
// Comparação de valores
function postComparation() {
    wo_alcoolfull = (0.3 * wo_gasoline) + wo_alcool; // Ex: Gasoline = 10, Alcool 3;
    sp_alcoolfull = (0.3 * sp_gasoline) + sp_alcool; // 30% de 10 é (3.3 * 10 = 3); 3 + 8 => Alcool = 11 reais;

    if (wo_alcoolfull > sp_alcoolfull) {
        sp_alcool_isBetter = true;
    } else {
        sp_alcool_isBetter = false;
    }
    if (wo_gasoline > sp_gasoline) {
        sp_gasoline_isBetter = true;
    } else {
        sp_gasoline_isBetter = false;
    }
    postBetterPost();
}
// Informar posto mais barato;
function postBetterPost() {
    if (sp_gasoline_isBetter && sp_alcool_isBetter) {
        if (sp_gasoline > sp_alcoolfull) {
            alert(username + " , é mais barato abastecer com alcool no posto Stark Petrol.");
        } else {
            alert(username + " , é mais barato abastecer com gasolina no posto Stark Petrol.");
        }
    } if (!sp_gasoline_isBetter && !sp_alcool_isBetter) {
        if (wo_gasoline > wo_alcoolfull) {
            alert(username + " , é mais barato abastecer com alcool no posto Wayne Oil.");
        } else {
            alert(username + " , é mais barato abastecer com gasolina no posto Wayne Oil.");
        }
    } if (sp_gasoline_isBetter && !sp_alcool_isBetter) {
        if (sp_gasoline > wo_alcoolfull) {
            alert(username + " , é mais barato abastecer com alcool no posto Wayne Oil.");
        } else {
            alert(username + " , é mais barato abastecer com gasolina no posto Stark Petrol.");
        }
    } if (!sp_gasoline_isBetter && sp_alcool_isBetter) {
        if (wo_gasoline > sp_alcoolfull) {
            alert(username + " , é mais barato abastecer com alcool no posto Stark Petrol.");
        } else {
            alert(username + " , é mais barato abastecer com gasolina no posto Wayne Oil.");
        }
    }
    backQuestion();
    Ex8Start();
} 