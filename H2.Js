//Autor: Victor Hugo MS - victorhmszzero Versão: 1.0
//-Programa Ex2----------------------------------------------------------
var reg_diary, reg_fullPrice, reg_halfPrice, reg_freePrice;
var reg_amountGuest = null


function Ex2Start() {
    alert("Hotel "+ hotel_name +" - Registro de Hospedes");
    reg_diary = 0;
    reg_fullPrice = 0;
    reg_halfPrice = 0;
    reg_freePrice = 0;
    reg_amountGuest = null;
    regiDiary();
}
// Informar valor da diaria;
function regiDiary() {
    reg_diary = parseInt(prompt("Qual o valor padrão da diária?"));
    if (reg_diary === null) { // Retornar a seleção de programas?;
        backQuestion();
        regiDiary();
    } else {
        parseInt(reg_diary)
        if (reg_diary < 0 || isNaN(reg_diary)) { // Informar valor novamente;
            erroValue();
            regiDiary();
        } else {
            regiGuest();
        }
    }
}
// Informar nome e idade do hospede;
function regiGuest() {
    let guest_name = prompt("Qual o nome do Hospede? \nDigite PARE para interromper a inclusão de hospedes.");
    if (guest_name === null) { // Retornar a seleção de programas?;
        backQuestion();
        regiDiary();
    } else if (guest_name === "PARE") {
        if (reg_amountGuest === null) {
            alert("Informe no mininmo 1 hospede."); // Informar valor novamente;
            regiGuest();
        } else {
            regiPrice();
        }
    } else if (guest_name === "" || guest_name === " ") { // Informar valor novamente;
        alert("Informe um nome valido para o hospede.");
        regiGuest();
    }
    let idade = parseInt(prompt("Qual a idade do Hóspede?"));
    if (idade < 0 || isNaN(idade) || idade === "") { // Informar valor novamente;
        alert("Idade invalida");
        regiGuest();
    } else if (idade < 6) { // Possui gratuidade;
        alert(guest_name + " cadastrada(o) com sucesso, " + guest_name + " possui gratuidade.");
        reg_amountGuest += 1;
        reg_freePrice += 1;
    } else if (idade > 60) { // Paga meia;
        alert(guest_name + " cadastrada(o) com sucesso, " + guest_name + " paga meia.");
        reg_amountGuest += 1;
        reg_fullPrice += 0.5;
        reg_halfPrice += 1;
    } else {
        alert(guest_name + " cadastrada(o) com sucesso.");
        reg_amountGuest += 1;
        reg_fullPrice += 1;
    }
    regiGuest();
}
// Informar valor total da reserva; 
function regiPrice() {
    var total = reg_fullPrice * reg_diary
    if (reg_freePrice > 0 && reg_halfPrice > 0) {
        alert(username + ", o valor total das hospedagens é: R$" + total + ", " + reg_freePrice + " gratuidade(s); " + reg_halfPrice + "meia(s).");
    } else if (reg_freePrice > 0 && reg_halfPrice === 0) {
        alert(username + ", o valor total das hospedagens é: R$" + total + ", " + reg_freePrice + " gratuidade(s).");
    } else if (reg_freePrice === 0 && reg_halfPrice > 0) {
        alert(username + ", o valor total das hospedagens é: R$" + total + ", " + reg_halfPrice + " meia(s).");
    } else {
        alert(username + ", o valor total das hospedagens é: R$" + total);
    }
    backQuestion();
    Ex2Start();
}