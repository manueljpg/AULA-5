// Micro desafio -Parte 1

class Aluno {
    constructor(nome,qtdadeFaltas,notas) {
        this.nome = nome;
        this.qtdadeFaltas=qtdadeFaltas;
        this.notas = notas
    }
}

let aluno1 = new Aluno ('Lucas', 5, [8,6,9.5,7]);
let aluno2= new Aluno ('Iza', 2, [8,9,8,7,8] );
let aluno3= new Aluno ('Manuel', 5, [9,8.7,7,6] );


module.export = Aluno; 



// Micro desafio 2


function mediaAluno (aluno) {
    const notas = aluno.notas;
    const soma= (a,b)=>a+b;
    const totalNotas = notas.reduce((soma));
    return totalNotas/notas.length
}



// Micro desafio parte 3 

let aluno1Convertido = JSON.stringify(aluno1);
let aluno2Convertido = JSON.stringify(aluno2);
let aluno3Convertido = JSON.stringify(aluno3);

console.log(aluno1Convertido,aluno2Convertido,aluno3Convertido)

// O objeto convertido foi colocado diretamente dentro de um array no objeto JSON




 