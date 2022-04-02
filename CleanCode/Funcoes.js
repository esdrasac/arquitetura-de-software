// //Funções
// //Argumento de funções (o Ideal é 2 ou menos), o que fazer quando tiver mais?

// function showName(name) {
//     console.log(name)
// }

// function showNameAndAge(name, age) {
//     console.log(name)
//     console.log(age)
// }

// function showUser({ age, gender, avatar, description, name}) {

// }

// const user = {
//     name: 'Esdras',
//     age: '18',
//     gender: 'M',
//     avatar: 'http://myavatar.com.br/photo',
//     description: 'Bom, bonito e mentiroso'
// }

// showUser(user)

// //Funções devem fazer uma coisa

// function showAllUserData(id) {
//     const user = getUserOnDb(id)
//     const notifications = getNotificationsByIdUserOnDb(id)
//     //... data process implementation
//     return {
//         user,
//         notifications
//     }
// }

// function getNotificationsByIdUser(id) {
//     //return notification users
// }

// function showAllUserDataV2(id) {
//     const user = getUser(id)
//     const notification = getNotificationsByIdUser(id)

//     return {
//         user, 
//         notification
//     }
// }


// //O nome das funções devem dizer o que elas fazem

// //Remover código duplicado
// //ruim
// function buscarTarefaProfessor(id) {
//     const name = getNameProf(id)
//     const lasName = getLastNameProf(id)
//     const tarefa = getTarefaProf(id)

//     return {
//         name,
//         lasName,
//         tarefa
//     }
// }

// function buscarTarefaAluno() {
//     const name = getNameAluno(id)
//     const lasName = getLastNameAluno(id)
//     const tarefa = getTarefaAluno(id)

//     return {
//         name,
//         lasName,
//         tarefa
//     }
// }

// //ideal

// function buscarPessoa(id) {
//     const pessoa = getPessoa(id)
//     const tarefa = null

//     switch (pessoa.type) {
//         case 'ALUNO':
//             tarefa = getTarefaAluno(id)
//             break;
//         case 'PROFESSOR':
//             tarefa = getTarefaProf(id)
//             break;
    
//         default:
//             break;
//     }

//     return {
//         name: pessoa.name,
//         lasName: pessoa.lasName,
//         tarefa
//     }
// }






//Evite efeitos colaterais

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newArr = JSON.parse(JSON.stringify(array))

// array.forEach((value, i) => {
//     if(value % 2 !== 0) {
//         array.splice(i, 1)
//     }
// })

// console.log(array)
// console.log(newArr)

//Favoreça programação declarativa ao invés de imperativa

//Evite condicionais

const carros = {
    hilux: {
        nome: 'Hilux',
        marca: 'Toyota',
        motor: '3.0'
    },
    fusca: {
        nome: 'fusca',
        marca: 'VW',
        motor: '1200'
    }, 
    civic: {
        nome: 'Civic',
        marca: 'Honda',
        motor: '2.0'
    },
    golf: {
        nome: 'Golf',
        marca: 'VW',
        motor: '2.0'
    }
}


function getCarro(name) {
   return carros[name] || 'Carro não encontrado'
} 

console.log(getCarro(''))