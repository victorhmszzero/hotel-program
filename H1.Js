//Autor: Victor Hugo MS - victorhmszzero Versão: 1.0
//-Programa Ex1----------------------------------------------------------
var room_day, room_amount, room_fixAmount, room_price, room_nameGuest;

function Ex1Start() {
    alert("Hotel "+ hotel_name +" - Reserva de Quartos");
    roomDiary();
}
// Informar valor da diaria;
function roomDiary() {
    room_day = prompt("Qual o valor padrão da diária.");
    if (room_day === null) { // Retornar a seleção de programas?;
        backQuestion();
        roomDiary();
    } else {
        parseInt(room_day);
        if (room_day === "" || room_day < 0 || isNaN(room_day)) { // Informar valor novamente;
            erroValue();
            roomDiary();
        } else {
            roomAmount();
        }
    }
}
// Informar quantidade de dias;
function roomAmount() {
    room_amount = prompt("Quantidade de dias de hospedagem.");
    if (room_amount === null) { // Retornar a seleção de programas?;
        backQuestion();
        roomAmount();
    } else {
        parseInt(room_amount)
        if (room_amount === "" || room_amount < 0 || isNaN(room_amount) || room_amount > 30) { // Informar valor novamente;
            alert(username + ", informe um valor referente ao dia, de 1 e 30.");
            roomAmount();
        } else {
            roomPrice();
        }
    }
}
// Informar valor da reserva;
function roomPrice() {
    room_fixAmount = Math.trunc(room_amount); // Ignorar numeros decimais;
    room_price = room_day * room_fixAmount;
    alert("O valor de " + room_fixAmount + " dias de hospedagem é de R$" + room_price);
    roomAmountReserve();
}
// Informar hospede e reserva;
function roomAmountReserve() {
    room_nameGuest = prompt("Qual o nome do hospede?");
    if (room_nameGuest === null || room_nameGuest === "") { // Informar valor novamente;
        alert("Insira um nome para o hospede.");
        roomAmountReserve();
    }
    let confirma = confirm(username + ", você confirma a hospedagem para " + room_nameGuest + " por " + room_fixAmount + " dias?");
    if (!confirma) {
        alert(username + ", sua reserva não foi efetuada.");
    } else {
        alert(username + ", sua reserva foi efetuada para " + room_nameGuest + ". O valor total é de R$" + room_price);
    }
    backQuestion();
    Ex1Start();
}