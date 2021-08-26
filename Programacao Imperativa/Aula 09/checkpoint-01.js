///////// 1. Escreva uma função utilizando uma estrutura básica de IF/ELSE que verifique uma senha. A senha válida é o número 1234. Devem ser impressas as seguintes mensagens:///////
// 	- ACESSO PERMITIDO caso a senha seja válida.
// 	- ACESSO NEGADO caso a senha seja inválida.

function conferirSenha(numero) {
    if (numero===1234) {
        console.log ('ACESSO PERMITIDO');
    } else {
            console.log ('ACESSO NEGADO');
        }
    }
conferirSenha(3456)


//////// 2.  Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE que receba dois inteiros e diga qual deles é o maior, qual deles é menor OU se são iguais./////////

function comparaNum (a,b) {
    if (a>b) {
        console.log( a + " é o numero maior e "+ b + " é o número menor");
    }
    else if (a<b) {
        console.log( a + " é o numero menor e "+ b + " é o número maior");
    }
    else {
        console.log('Os números são iguais');
    }
}

comparaNum(5,8)


///////// 3. Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido.///////////

function nroDoMes (a) {
    switch (a) {
        case 1 : 
            console.log('Janeiro');
            break;
        case 2 :
            console.log ('Fevereiro');
            break;
            case 3 :
                console.log ('Março');
                break;
        case 4 :
            console.log ('Abril');
            break;
        case 5 :
            console.log ('Maio');
            break;
        case 6 :
            console.log ('Junho');
            break;
        case 7 :
            console.log ('Julho');
            break;
        case 8 :
            console.log ('Agosto');
            break;
        case 9 :
            console.log ('Setembro');
            break;
        case 10 :
            console.log ('Outubro');
            break;
        case 11 :
            console.log ('Novembro');
            break;
        case 12 :
            console.log ('Dezembro');
            break;
        default : 
        console.log ('Amadaaah, cê tá bem da cabeça? é um número de UM a DOZE')
        
    }
}

nroDoMes(16)

/////////4 - Reescreva função do exercício 1, utilizando o operador ternário///////

function conferirSenhaTernario(nro) {
    nro===1234 ? console.log ('ACESSO PERMITIDO') : console.log ('ACESSO NEGADO')};


    conferirSenhaTernario(45899)


////////5.  Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos.///////

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, 
// exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

 // Estabelecendo os tempos padrao para cada prato 

 function menuMicroondas (comida, tempo) {

    const tempoPipoca = 10;
    const tempoMacarrao = 8;
    const tempoCarne = 15;
    const tempoFeijao = 12;
    const tempoBrigadeiro = 8;

    // Criando uma funcao que avalie de acordo com o tempo inserido pelo usuario o que acontece com cada prato: Pouco tempo, queimou, ou explodiu

    function comoCozinhou(a,b) {
        let div = a/b
    
        if (div< 1) {
            console.log ('Tempo insuficiente');
        }
        else if (div >2 && div <3) {
            console.log('A comida queimou');
        }
        else if (div>=3) {
            console.log('Kaboooom!');
        
        };
        console.log ('Prato pronto, bom Apetite!!!') //No final sempre deve imprimir essa frase independente do resultado??
        }
    
    
 //Criando um switch que avalie cada uma das opcoes na variavel 'comida' no inicio da funcao, caso a opcao seja TRUE, executa a funcao comoCozinhou onde a variavel 'a'
// sera o tempo inserido pelo usuario e 'b' sera a constante de tempo definida no começo da função para cada um dos pratos

    switch (comida) {
        case 'pipoca':
            comoCozinhou(tempo,tempoPipoca);
            break;
        case 'macarrao':
            comoCozinhou(tempo, tempoMacarrao);
            break;
        case 'carne':
            comoCozinhou (tempo,tempoCarne);
            break;
        case 'feijao':
            comoCozinhou(tempo,tempoFeijao);
            break;
        case 'brigadeiro': 
             comoCozinhou (tempo, tempoBrigadeiro);
            break;
        default : console.log ("Ummm, essa comida não existe no menu");
    }
}

menuMicroondas('brigadeiro',25)

