//CLOSURES


//FUNÇÃO DE ALTA ORDEM (CHAMANDO UMA FUNÇÃO DENTRO DE OUTRA FUNÇÃO)
function f (funcao){
    console.log('f')
    funcao()()()
    return () => console.log('i')
}

function g(){
    console.log('g')
    return function(){
        console.log('Fui criada por g')
        return () => {console.log('h'); return () => 'k'}
    }
}

f(g())()

/*------------------------------------------ */

//FUNÇÃO PODE SER ATRIBUIDA EM UMA VARIAVEL
// let umaFuncao = function(){
//     console.log('sou uma função')
// }
// umaFuncao()


/*-------------------------------------- */

//TIPOS DE FUNÇÕES
//Funções regulares e arrow functions

//ARROW FUNCTIONS
//Exemplo 4 
    // const ehPar = n => n % 2 === 0

//Exemplo 3
    // const f = () => {
    //     (return) //ERRO DE SINTAXE
    //     (2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 )
    // }
    // console.log(f())

//Exemplo 2 (sem usar return (quando n usa chaves (TEM APENA 1 INSTRUÇÃO PRA OMITIR A {} )))
    // const dobro = n => n * 2
    // console.log(dobro(5))

//Exemplo 1
        // const hello = () => console.log('Hello')
        // hello()
        // const helloNome = (nome, idade) => console.log('Oi, ' + nome)


//FUNÇÃO REGULAR
//Exemplo 4 de função (parâmetros com valore padrão)
    // const triplo = function (n = 5){
    //     return 3 * n
    // }
    // console.log(triplo(6))
    // console.log(triplo(undefined))

//Exemplo 3 de função anôima (sem nome)
    // cont dobro function(n){
    //      return 2 *n
    // }
    // console.log(dobro(3))

//Exemplo 2
    // function somar(a,b){
    //     return a + b
    // }
    // console.log(soma(1, 2))

//Exemplo 1
    // function hello(){
    //     console.log('oi')
    // }
    // hello()
    // function hello(nome){
    //     console.log('Oi, ' + nome)
    // }
    // hello('Ana')

/*-----------------------------------------------*/

/*FUNÇÃO "REDUCE"*/
// const numeros = [1, 2, 3, 4]
// const soma =numeros.reduce((ac, v) => ac + v)
// console.log(soma)

/*------------------------------------------------*/

//FUNÇÃO "SOME"
// const nome = ['Ana', 'João', 'Rodrigo', 'Angelica']
// Verifica se pelo meno um começa com a
// const resultado = nomes.some(n => n[0] === 'A' || n[0] === 'a')
// console.log(resultado)

/*--------------------------------------------------*/

//FUNÇÃO "EVERY" nesse caso verifica se TODOS começa com A ou a
// const resultado = nomes.every(n => n[0] === 'A' || n[0] === 'a')
//console.log(resultado)

/*------------------------------------------------------*/

//let m = 1
//const numeros = [1, 2, 3,]
//console.log(numeros.map((valor, indice, numeros) => valor * (indice +2)))

/*Dado esse vetor, produzir outro. Ele deve conter a letra
inicial de cada nome, na sua posição original.*/
// const nome = ['Ana', 'João', 'Rodrigo', 'Angelica']
//const listaResultante = nomes.map(x => x[0])



/*AULA 1*/

// [A, J, R, A]
// const nomes = ['Ana', 'João', 'Rodrigo', 'Angelica']
// const resultado = []
// console.log(resultado)

//Dado esse vetor, construa outro. Ele deve conter apenas os nomes que começam com a letra A.
// const nomes = ['Ana', 'João', 'Rodrigo', 'Angelica']
// const resultado = nome.filter((n)) => {return n[0] === 'A'})
//console.log(resultado)
// SELECT * FROM tb_pessoa WHERE idade >= 18
// const resultado = []
// for (let i = 0; i< nomes.length; i++) {
//     if (nomes [i][0] === 'A') {
//         resultado.push(nomes[i]);
//     }
// }
// console.log(resultado)



//Vetores
// v1 = []
// console.log(v1.length)
// v1[0]= 'abc'
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i < v1.length; i ++)
//     console.log(v1[i])


//Comparação por igualdade: == (implicito) === (explicito)
// console.log(1 == 1)
// console.log(1 === 1)
// console.log(1 == '1')
// console.log(1 === '1')
// console.log(true == 1)
// console.log( true === 1)
// console.log(1 == [1])
// console.log(1 == [])
// console.log(1 == [0])
// console.log(1 == [0, 1])
// console.log(1 == [1, 0])
// console.log(3 == [3])
// console.log(null == null)
// console.log(null === undefined)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])
// console.log(null == 0)
// console.log(false == 0)



//Coerção implícita 
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)

//Coerção expícita
// const n4 = n1 + Number(n2)
// console.log(n4)


// Declaração de variáveis e constantes
// let, const e var
// let a = null
// let b = undefined
// var idade = 18
// let nome = 'Ana'
// console.log ('Você tem ' + idade + ' anos')
// console.log('Oi, ' + nome)
// //hoist: içamento
// if(idade >= 18){
//   console.log(nome + ', você pode dirigir')
// }
// console.log('Tchau, ' + nome)
// var linguagem = 'javascript'
// var linguagem = 'java'
// const pi = 3.14
// pi = 3.141
//let name = 'João'
// nome = 'João Silva'
// const idade = 19
// console.log(nome)
// const n = 1
// n++ // n = n + 1
// const nome = 'João'
// //nome = 'João Silva'
// const idade = 19

// js usa sistema de tipos dinâmico
// java usa sistema de tipos estáticos

// Sistema de tipos estático: Java, c, c++, 
// Sistma de tipos dinâmico: javascript, python, php, perl, ruby
// Sistem de tipo gradual: c#, Dart, Typescript, Kotlin

// a = "abc"
// a.toUppercase()
// int a;
// a = 2;
// a = "abc";
// a.falar();
// String s = "abc";
// s.toUppercase();
// s.falar();

// let a: number = 2
// a.falar()