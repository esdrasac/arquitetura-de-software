/**
 * Open-Closed Principle
 * 
 * Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação, ou seja, quando novos 
 * comportamentos e recursos precisam ser adicionados no software, devemos estender e não alterar o código fonte original.
 * 
 * Vantagens:
 *  Facilidade na adição de novos recursos na aplicação
 *  Diminuição das chances de surgirem bugs na aplicação
 *  Adição de comportamentos de forma isolada, sendo assim, o que estava funcionando antes da implementação, deve continuar funcionando
 * 
 * Desvantagens do não uso:
 *  Acoplamento de funcionalidades
 *  Quando alterado uma implementação há grandes chances de surgirem bugs em partes da aplicação onde a implementação é chamada
 * 
 * 
 * Estagiários
 *  Bolsa estágio
 * 
 * CLT 
 *  Salário
 * 
 * PJ
 *  Por NF
 */

//Ruim
class FolhaPagamento {
    pagamentoSalárioCLT(employe) {
       const folhaDeponto = FolhaDePontoService.get(employe.id)
       const horasExtras = HorasExtras.get(employe.id)

       //...
    }

    pagamentoSalárioEstágio(employe) {
        //..
     }
}

const folhaDePagamento = new FolhaPagamento()
const employe = Employe.get(id)

if(employe.contractType === 'CLT') {
    folhaDePagamento.pagamentoSalárioCLT(employe)
} else if(employe.contractType === 'ESTAGIO') {
    folhaDePagamento.pagamentoSalárioEstágio(employe)
}

//Ideal
class Contrato {
    pagamento(taxas) {

    }
}

class Clt extends Contrato {
    pagamento(taxas) {

    }
}


class Estagio extends Contrato {
    pagamento(taxas) {

    }
}

class Pj extends Contrato {
    pagamento(taxas) {

    }
}

class FolhaDePagamento {
    calcular(contrato) {
        //... 
        const taxas = Taxas.get(contrato.id)
        contrato.pagamento(taxas)
    }
}