//Autor: Victor Hugo MS - victorhmszzero Versão: 1.0
//-Programa Ex5----------------------------------------------------------
const buffet_coffee = 0.2; // 0.2L de café;
const buffet_water = 0.5; // 0.5L de agua;
const buffet_salgados = 7; // Quantidade de salgados;
const buffet_basePrice = 0.80 + 0.40 + 7; // R$ café + agua + salgado;

const buffet_limitGuest = 350;
var buffet_Guest;

function Ex5Start() {
    alert("Hotel "+ hotel_name +" - Reservar Buffet");
    buffetNumberGuests();
}
// Numero de convidados
function buffetNumberGuests() {
    buffet_Guest = prompt("Qual o número de convidados para o evento?");
    if (buffet_Guest === null) { // Retornar a seleção de programas?;
        backQuestion();
        buffetNumberGuests();
    } else {
        parseInt(buffet_Guest);
        if (buffet_Guest < 1 || buffet_Guest === "" || isNaN(buffet_Guest)) { // Informar valor novamente;
            erroValue();
            buffetNumberGuests();
        } else if (buffet_Guest > buffet_limitGuest) { // Informar quantidade novamente;
            alert("Quantidade de convidados superior à capacidade máxima.");
            buffetNumberGuests();
        } else {
            buffetReservation();
        }
    }
}
// Total de alimentos e preço do Buffet
function buffetReservation() {
    let convidado_int = Math.trunc(buffet_Guest); // Igonrar numeros decimais;
    let total_coffee = (buffet_coffee * convidado_int).toFixed(2); // Resumir numeros para 2 decimais;
    let total_water = (buffet_water * convidado_int).toFixed(2); // Exemplo = 0.12;
    let total_salgados = buffet_salgados * convidado_int;
    let total_price = (buffet_basePrice * convidado_int).toFixed(2);  // Exemplo = 0.12;
    // Confirmar reserva?;
    alert("O evento precisará de " + total_coffee + " litros de café, " + total_water + " litros de água, " + total_salgados + " salgados. \nO custo total do evento será de R$ " + total_price + ".");
    let confirm_reserv = confirm("O custo total do evento será de R$ " + total_price + "\nGostaria de efetuar a reserva?");
    if (!confirm_reserv) {
        alert(reserve_incomplete)
    } else {
        alert(reserve_complete);
    }
    backQuestion();
    Ex5Start();
}