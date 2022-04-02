//Objetos e Estruturas de dados
//Use getters e setters (Factorys)

function getUserWithNoGetterAndSetter() {
    return getUser()
}

function setUserWithNoGetterAndSetter() {
    return setUser()
}

function exempleGettersAndSetters() {
    let user = null

    function getUser() {
        return user
    }

    function setUser() {
        user = {
            name: 'Esdras Aguilar'
        }
    }

    return {
        getUser,
        setUser
    }
}

const getterSetter = exempleGettersAndSetters()
console.log(getterSetter.getUser())
getterSetter.setUser()
console.log(getterSetter.getUser())

//Utilize dos membros privados

function privateMethods() {
    return {
        privateMethod() {
            console.log('Methodo privado')
        }
    }
}

const privateMethod = privateMethods()

console.log(privateMethod)

//Use o This para encadeamento de métodos