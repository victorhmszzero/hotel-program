//Autor: Victor Hugo MS - victorhmszzero Versão: 1.0
//-Programa Ex6----------------------------------------------------------
const auditor_orange = 150 + 70 // total 220 // 150 places - 70 addchairs;
const auditor_colorado = 350 // 350 places;
var auditor_guest

function Ex6Start() {
    alert("Hotel "+ hotel_name +" - Reservar Auditório");
    alert("Informe a quantidade de convidados e saiba qual o melhor auditorio \nLembrando que os auditórios: \nLaranja conta com 150 lugares, com até 70 cadeiras adicionais \nauditor_colorado conta com 350 lugares, sem espaço para mais cadeiras. \nOu seja 350 auditor_guests no maixmo");
    auditorAmountQuest();
}
// Informar numero de convidados;
function auditorAmountQuest() {
    auditor_guest = prompt("Qual o número de convidados para o evento?");
    if (auditor_guest === null) { // Retornar a seleção de programas?;
        backQuestion();
        auditorAmountQuest();
    } else {
        parseInt(auditor_guest);
        if (auditor_guest < 1 || auditor_guest === "" || isNaN(auditor_guest)) { // Informar valor novamente;
            erroValue();
            auditorAmountQuest();
        } else if (auditor_guest > auditor_colorado) {
            alert("Quantidade de convidados superior à capacidade máxima."); // Informar convidados novamente;
            auditorAmountQuest();
        } else if (auditor_guest <= orange) {
            auditorOrange();
        } else {
            alert("Para " + auditor_guest + " convidados, use o auditório Colorado");
            auditorConfirm();
        }
    }
}
// Auditório laranja;
function auditorOrange() {
    if (auditor_guest > 150) {
        let add_chairs = auditor_guest - 150;
        alert("Para " + auditor_guest + " convidados, use o auditório Laranja (inclua mais " + add_chairs + " cadeira(s))");
    } else {
        alert("Para " + auditor_guest + " convidados, use o auditório Laranja");
    }
    auditorConfirm();
}
// Confirmar reserva;
function auditorConfirm() {
    let confirm_reserv = confirm("Gostaria de efetuar a reserva?");
    if (!confirm_reserv) {
        alert(reserve_incomplete);
    } else {
        alert(reserve_complete);
    }
    backQuestion();
    Ex6Start();
}