//Variáveis
//Nomes pronunciáveis e com significados
//Ruim
// const age = 10

// //ideal 
// const userAge = 0

// //Usar vocabulário limpo
// //Ruim
// const userInfo = getUserInfo()

// //Ideal
// const user = getUser()

// //Usar nomes pesquisáveis
// const VALOR_PI = 3.14

// const CalculaAreaTriangulo = 10 * VALOR_PI

// //Evitar mapeamento mental (estruturas de repetição)

// const arrayNotas = [10, 8, 3, 9]


// function calculaMediaNotasAlunos(array) {
//     array.forEach(nota => {
//         console.log(nota)
//     });
// }

// //Evitar contextos desenecessários (repetir o nome do objeto em atributos)
// //Ruim
// const car = {
//     carColor: 'Yellow'
// }

// //ideal
// const myCar = {
//     color: 'Yellow'
// }

// //Usar argumentos default/padrão ao invés condicionais
// //Ruim
// function hasUser(user) {
//     const hasUser = user || {}
//     //...
// }

// //Ideal
// function hasUser(user = {}) {
//     //...
// }

// const palindromo = 'arara'

// //Programação Imperativa
// const isPalindrome = (word) => {
//     let invertedWord = ''

//     for(let i = word.length -1 ; i >= 0; i--) {
//         console.log(word[i])
//         invertedWord += word[i]
//     }

//     return invertedWord === word
// }

// //Programação Declarativa
// const simpleIsPalindrome = (word) => world.split('').reverse().join('') === world 

// console.log(isPalindrome(palindromo))

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// array.forEach((value, i) => {
//     if(value % 2 !== 0) {
//         array.splice(i, 1)
//     }
// })

const returnArray = array.filter((value) =>  {
    if(value % 2 === 0) {
        return value
    }
})
console.log(array)
console.log(returnArray)