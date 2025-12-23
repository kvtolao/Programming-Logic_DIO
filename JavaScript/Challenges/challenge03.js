// DESAFIO 03 - ESCREVENDO AS CLASSES DE UM JOGO

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        // Estrutura de decisão para definir o ataque conforme o tipo
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

       
        console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

let herois = [
    new Heroi("Gandalf", 150, "mago"),
    new Heroi("Conan", 30, "guerreiro"),
    new Heroi("Li Mei", 25, "monge"),
    new Heroi("Hanzo", 22, "ninja")
];

for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
}
