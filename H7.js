
//-Programa Ex7----------------------------------------------------------
var resta_day, resta_time, resta_dayUtil;

function Ex7Start() {
    alert("Hotel "+ hotel_name +" - Reservar um Restaurante");
    restaDay();
}
// Informar dia do evento;
function restaDay() {
    resta_day = prompt("Qual o dia do seu evento?");
    switch (resta_day) { // Classificar como dia Util;
        case "segunda":
            break;
        case "terça":
            break;
        case "quarta":
            break;
        case "quinta":
            break;
        case "sexta":
            break;
        case "sabado":
            resta_dayUtil = false;
            break;
        case "domingo":
            resta_dayUtil = false;
            break;
        case null: // Retornar a seleção de programas?;
            backQuestion();
            restaDay();
            break;
        default:  // Informar valor novamente;
            resta_dayUtil = true;
            alert("Informe o dia em letras minusculas e sem acentuação.");
            restaDay();
    }
    restaTime();
}
// Informar hora do evento;
function restaTime() {
    resta_time = (prompt("Qual é a hora do evento?"));
    if (resta_time === null) { // Retornar a seleção de programas?;
        backQuestion();
        restaTime();
    } else {
        parseInt(resta_time);
        if (resta_time === "" || resta_time < 1 || isNaN(time)) { // Informar valor novamente;
            erroValue();
            restaTime();
        } else {
            restaUtilDay();
        }
    }
}
// Checar se é um dia util;
function restaUtilDay() {
    if (resta_dayUtil) {
        if (resta_time >= 7 && resta_time <= 23) {
            alert("Restaurante disponível.");
        } else {
            alert("Restaurante indisponível \nRevise o horarios para restaurantes de segunda a sexta.");
            backQuestion();
            Ex7Start();
        }
    } else {
        if (resta_time >= 7 && resta_time <= 15) {
            alert("Restaurante disponível.");
        } else {
            alert("Restaurante indisponível \nRevise o horarios para restaurantes de sabado e domingo.");
            backQuestion();
            Ex7Start();
        }
    }
    restaNameEmp();
}
// Informar valor da diaria;
function restaNameEmp() {
    let empresa = prompt("Qual o nome da empresa?");
    let resta_timefix = Math.trunc(resta_time) // Ignorar Decimais;
    alert("Restaurante reservado " + resta_day + " às " + resta_timefix + "hs, para " + empresa + ".");
    backQuestion();
    Ex7Start();
}