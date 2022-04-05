/**
 * Single Responsability Principle
 * 
 * Esse princípio declara que uma classe deve ser especializada em um único assunto e possuir apenas uma responsabilidade 
 * dentro do software, ou seja, a classe deve ter uma única tarefa ou ação para executar.
 * 
 * Vantagens:
 *  Reaproveitamento de código mais fácil
 *  Refatorar o código mais facilmente
 *  Testar o código mais facilmente
 *  Gerar menos bugs por conta do desacoplamento
 *
 * Desvantagens do não uso:
 *  Falta de coesão, podendo assumir responsabilidades que não são suas
 *  Alto acoplamento
 *  Dificuldade de implementação de testes
 */

//Ruim
class User {
    create() {
    }

    update() {
    }

    delete() {
    }

    get() {
    }

    printDocs() {
    }

    showUser() {
    }

    getAge() {
    }
}

//Ideal
class User {
    getAge() {

    }
}

class UserView {
    printDocs() {
    }

    showUser() {
    }
}
class UserRepository {
    create() {
    }
    
    delete() {
    }

    get() {
    }
}