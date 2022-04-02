//Classes
//Prefira classes do ES2015/ES6 ao invés de funções simples do ES5
class Person {
    #name

    constructor() {
        this.#name = null
        this. lastName = null
    }

    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }

    setIdade() {
        //...
    }
}

// const pessoa = new Person()
// console.log(pessoa.setName('Esdras Aguilar'))
// console.log(pessoa.getName())
//Use o This para encadeamento de métodos

class App {
    constructor() {
    }

    dbConnect(url) {
        console.log(`...Connecting to database: ${url}`)
        return this
    }

    listen(port) {
        console.log(`...Listening on port [${port}]`)
        return this
    }
}


const meuApp = new App()
    .dbConnect('mongodb://mydatabase.com.br')
    .listen(3000)

