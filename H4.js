//Autor: Victor Hugo MS - victorhmszzero Versão: 1.0
//-Programa Ex4----------------------------------------------------------
var evenwaiter_time, evenwaiter_amount;

function Ex4Start() {
    alert("Hotel "+ hotel_name +" - Reservar Evento com Garções");
    alert("Informe a duração do evento e quantos garçons seram necessarios. \nCada garçom custa R$ 10,50 por hora.");
    ewDuration();
}
// Informar duração do evento;
function ewDuration() {
    evenwaiter_time = prompt("Qual a duração do evento em horas?");
    if (evenwaiter_time === null) {  // Retornar a seleção de programas?;
        backQuestion();
        ewDuration();
    } else {
        parseInt(evenwaiter_time)
    } if (evenwaiter_time === "" || evenwaiter_time < 0 || isNaN(evenwaiter_time)) { // Informar valor novamente;
        erroValue();
        ewDuration();
    } else {
        ewAmountmWaiter();
    }
}
// Informar quantidade de garçons;
function ewAmountmWaiter() {
    evenwaiter_amount = prompt("Quantos garçons serão necessários?");
    if (evenwaiter_amount === null) { // Retornar a seleção de programas?;
        backQuestion();
        ewAmountmWaiter();
    } else {
        parseInt(evenwaiter_amount)
        if (evenwaiter_amount === "" || evenwaiter_amount < 0 || isNaN(evenwaiter_amount)) { // Informar valor novamente;
            erroValue();
            ewAmountmWaiter();
        } else {
            ewConfirm();
        }
    }
}
// Confirmar reserva;
function ewConfirm() {
    let total = evenwaiter_amount * evenwaiter_time;
    let confirma = confirm("O custo total de " + evenwaiter_amount + " garços para " + evenwaiter_time + " horas é R$" + total + "\nGostaria de efetuar a reserva?");
    if (!confirma) {
        alert(reserve_incomplete);
    } else {
        alert(reserve_complete);
    }
    backQuestion();
    Ex4Start();
}