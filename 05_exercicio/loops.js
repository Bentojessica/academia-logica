// Exercícios com loops

// Loop for básico
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop for com break
console.log("Loop com break:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Encontrei o 6, parando o loop!");
        break;
    }
    console.log(i);
}

// Loop for com continue
console.log("Pulando números pares:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Pula o resto da iteração
    }
    console.log(i);
}

// Iterando sobre arrays
const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("Lista de frutas:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruta ${i+1}: ${fruits[i]}`);
}


// DESAFIO

// 1. Crie um loop que imprima a tabuada do 7 (de 1 a 10)
    for (let i = 0; i <= 10; i++) {
        console.log(`7 x ${i} = ${(7 * i)}`)
    }

// 2. Crie um array de números e calcule a soma deles usando um loop
    const numeros = [16, 23, 32, 41, 57, 69, 76, 81, 90, 103]

    for(let i = 0; i < numeros.length; i++) {
        console.log(`O Numero ${numeros[i]} + ${i} = ${numeros[i] + i}`)
    }

// 3. Crie um loop que identifique o menor valor em um array de números
    const numero = [103, 23, 32, 41, 57, 69, 76, 16, 90, 81]
    let localizar = numero[0]
    for(let i = 0; i < numero.length; i++) {
        if(numero[i] < localizar) {
            localizar = numero[i]
        }
    }
    console.log(`O menor número do array é: ${localizar}`)