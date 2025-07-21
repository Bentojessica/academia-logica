// Meu primeiro script Node.js
console.log("Hello, Node.js!");
console.log("Node.js version:", process.version);
console.log("Current directory:", process.cwd());

// O que aconteceu? 
/*
No primeiro console apareceu Hello, Node.js
No segundo console apareceu Node.js version: V22.17.0 (aonde é a versão do node que esta instalado no pc)
No terceiro console apareceu Current directory --- (E o caminho aonde está a pasta do exercício desde o C:)*/

// O que é o objeto process? 
/*
É um objeto global que fornece informações e controle sobre o processo atual do Node.js. Ele permite interagir 
com o ambiente em que o script está sendo executado.
*/

// Como isso difere do JavaScript no navegador?
/*
O process só existe no Node.js (que é para ser usar no Javascript). Ele ver informações do sistema, 
como a memória ou o sistema operacional, ler variáveis de ambiente, pegar informações da linha de comando e finalizar o programa.
No navegador, esse objeto não existe, porque o JavaScript lá é mais limitado e não pode acessar o sistema do usuário, por questão 
de segurança. No navegador, usamos coisas como window, document e navigator para interagir com a página.
*/