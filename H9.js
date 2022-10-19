//Autor: Victor Hugo MS - victorhmszzero Versão: 1.0
//-Programa Ex9----------------------------------------------------------
var air_empName, air_value, air_amount, air_discount, air_minDiscount;
var air_priceFinal, air_priceTotal;

var air_betterName = null;
var air_betterPrice = null;

function Ex9Start() {
    alert("Hotel "+ hotel_name +" - Manutenção de Ar Condicionado");
    air_betterName = null;
    air_betterPrice = null;
    airInformName();
}
// Informar nome da empresa;
function airInformName() {
    air_empName = prompt("Qual o nome da empresa?");
    if (air_empName === null) { // Retornar a seleção de programas?;
        backQuestion();
        airInformName();
    } else {
        parseInt(air_empName);
        if (air_empName === "" || air_empName === " ") { // Informar valor novamente;
            alert(username + ", informe um nome para empresa com caracteres");
            airInformName();
        } else {
            airProductValue();
        }
    }
}
// Informar valor do aparelho;
function airProductValue() {
    air_value = prompt("Qual o valor por aparelho?");
    if (air_value === null) { // Retornar a seleção de programas?;
        backQuestion();
        airProductValue();
    } else {
        parseInt(air_value);
        if (air_value === "" || isNaN(air_value) || air_value < 1) { // Informar valor novamente;
            erroValue();
            airProductValue();
        } else {
            airProductAmount();
        }
    }
}
// Informar quantidade de aparelhos;
function airProductAmount() {
    air_amount = prompt("Qual a quantidade de aparelhos?");
    if (air_amount === null) { // Retornar a seleção de programas?;
        backQuestion();
        airProductAmount();
    } else {
        parseInt(air_amount);
        if (air_amount === "" || isNaN(air_amount) || air_amount < 1) { // Informar valor novamente;
            erroValue();
            airProductAmount();
        } else {
            airDiscount();
        }
    }
}
// Informar porcentagem de desconto;
function airDiscount() {
    air_discount = prompt("Qual a porcentagem de desconto?");
    if (air_discount === null) { // Retornar a seleção de programas?;
        backQuestion();
        airDiscount();
    } else {
        parseInt(air_discount);
        if (air_discount === "" || isNaN(air_discount)) { // Informar valor novamente;
            erroValue();
            airDiscount();
        } else {
            airMinDiscount();
        }
    }
}
// Informar minimo para desconto;
function airMinDiscount() {
    air_minDiscount = prompt("Qual o número mínino de aparelhos para conseguir o desconto?");
    if (air_minDiscount === null) { // Retornar a seleção de programas?;
        backQuestion();
        airMinDiscount();
    } else {
        parseInt(air_minDiscount);
        if (air_minDiscount === "" || isNaN(air_minDiscount)) { // Informar valor novamente;
            erroValue();
            airMinDiscount();
        } else {
            airAplyDiscount();
        }
    }
}
// Verificar se o desconto foi aplicado;
function airAplyDiscount() {
    air_priceTotal = air_value * air_amount;
    let price_discount = air_priceTotal * (air_discount / 100);

    if (air_amount < air_minDiscount) {
        alert("O desconto não foi aplicado neste orçamento");
        air_priceFinal = air_priceTotal;
    } else {
        alert("O desconto foi aplicado neste orçamento");
        air_priceFinal = air_priceTotal - price_discount;
    }
    air_priceFinal.toFixed(2) // Mostrar 2 valores decimais;
    alert("O serviço de " + air_empName + " custará R$" + air_priceFinal);
    airComparation();
}
// Comparação de melhor desconto;
function airComparation() {
    if (air_betterPrice === null) {
        air_betterPrice = air_priceFinal;
        air_betterName = air_empName;
    } else {
        if (air_priceTotal < air_betterPrice) {
            air_betterPrice = air_priceFinal;
            air_betterName = air_empName;
        }
    }
    let newValue = prompt("Deseja informar novos dados, " + username + "? \nS/N");
    if (newValue === null) { // Retornar a seleção de programas?;;
        backQuestion();
        airComparation();
    } else if (newValue === "S" || newValue === "s") {
        airInformName();
    } else if (newValue != "N" || newValue != "n") { // Informar valor novamente;
        alert("Insira S ou N");
        airComparation();
    }
    alert("O orçamento de menor valor é o da empresa: " + air_betterName + " por R$ " + air_betterPrice);
    backQuestion();
    Ex9Start();
}