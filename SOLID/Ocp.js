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
 */