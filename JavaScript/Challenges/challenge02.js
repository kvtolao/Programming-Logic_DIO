// DESAFIO 02 - CALCULADORA DE PARTIDAS RANKEADAS

function calcularNivel(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return {
        saldoVitorias,
        nivel
    };
}

let jogadores = [
    { vitorias: 5, derrotas: 2 },
    { vitorias: 18, derrotas: 5 },
    { vitorias: 75, derrotas: 20 },
    { vitorias: 120, derrotas: 30 }
];

for (let i = 0; i < jogadores.length; i++) {
    let resultado = calcularNivel(jogadores[i].vitorias, jogadores[i].derrotas);

    console.log(
        `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
    );
}
