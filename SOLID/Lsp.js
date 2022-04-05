/**
 * Liskov Substitution Principle
 * 
 * Uma classe derivada deve ser substituível por sua classe base.
 * 
 * Um objeto resultante de uma classe filha deve conseguir substituir um objeto resultante da classe pai
 * 
 * ex:
 *  Classe A
 *      getName()
 *          "Meu nome é A"
 * 
 *  Classe B extends A
 *      getName()
 *          "Meu nome é B"
 * 
 *  instancia de A
 *  instancia de B
 * 
 * fnImprimeName(instancia)
 *      instancia.getName()
 *      
 *  fnImprimeName(A)
 *  fnImprimeName(b)
 *      
 * 
 * 
 * ex:
 *  Aves
 *      Bicar
 *      Voar
 * 
 *  PicaPau extends Aves
 *      Bicar 
 *      Voar
 * 
 *  Pinguim extends Aves
 *      Bicar
 *      
 */

//Ruim
class Ave1 {
    bicar() {
        console.log('Sou uma ave e sei bicar')
    }

    voar() {
        console.log('Sou uma ave e sei Voar')
    }
}

class PicaPau1 extends Ave1 {
    bicar() {
        console.log('Sou um Pica Pau e sei bicar')
    }

    voar() {
        console.log('Sou um Pica Pau e sei voar')
    }
}

class Pinguim1 extends Ave1 {
    bicar() {
        console.log('Sou um Pinguim e sei bicar')
    }
}

const ave = new Ave1()
const picaPau1 = new PicaPau1()
const pinguim1 = new Pinguim1()


// console.log('===== Ave =====')
// bicar(ave)
// console.log('===== Pica Pau =====')
// bicar(picaPau)
// console.log('===== Pinguim =====')
// bicar(pinguim)

// console.log('===== Ave =====')
// voar(ave)
// console.log('===== Pica Pau =====')
// voar(picaPau)
// console.log('===== Pinguim =====')
// voar(pinguim)


class Ave {
    bicar() {
        console.log('Sou um ave e sei bicar')
    }
}

class AveQueVoa extends Ave {
    voar() {
        console.log('Sou uma Ave e sei voar')
    }
}

class PicaPau extends AveQueVoa {
    bicar() {
        console.log('Sou um Pica Pau e sei bicar')
    }

    voar() {
        console.log('Sou um Pica Pau e sei voar')
    }
}

class Pinguim extends Ave {
    bicar() {
        console.log('Sou um pinguim e sei bicar')
    }
}

const aveQuevoa = new AveQueVoa()
const picaPau = new PicaPau()
const pinguim = new Pinguim()

function bicar(obj) {
    return obj.bicar()
}

function voar(obj) {
    return obj.voar()
}

bicar(aveQuevoa)
bicar(picaPau)
bicar(pinguim)

voar(aveQuevoa)
voar(picaPau)
voar(pinguim)

//Ave bica nada voa
//Ave bica nada
//Ave bica voa