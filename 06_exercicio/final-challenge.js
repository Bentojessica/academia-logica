// Crie um arquivo final-challenge.js:

// Desafio final - integrando todos os conceitos

// Dados de alunos
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] },
];

// DESAFIO

// 1. Para cada aluno, calcule a média das notas

for (let i = 0; i < students.length; i++) {
  let soma = 0;
  let media = 0;

  for (let j = 0; j < students[i].grades.length; j++) {
    soma += students[i].grades[j];
  }
  media = soma / students[i].grades.length;
  console.log(`A média do Aluno ${students[i].name} é: ${media.toFixed(1)}`);
}
// 2. Determine se cada aluno foi aprovado ou reprovado (média >= 70 para aprovar)

for (let i = 0; i < students.length; i++) {
  let soma = 0;
  let media = 0;

  for (let j = 0; j < students[i].grades.length; j++) {
    soma += students[i].grades[j];
  }
  media = soma / students[i].grades.length;
  if (media >= 70) {
    console.log(`O aluno ${students[i].name} foi APROVADO!`);
  } else {
    console.log(`O aluno ${students[i].name} foi REPROVADO!`);
  }
}
// 3. Conte quantos alunos foram aprovados e quantos foram reprovados

let aprovados = 0;
let reprovados = 0;

for (let i = 0; i < students.length; i++) {
  let soma = 0;
  let media = 0;

  for (let j = 0; j < students[i].grades.length; j++) {
    soma += students[i].grades[j];
  }
  media = soma / students[i].grades.length;
  if (media >= 70) {
    aprovados++;
  } else {
    reprovados++;
  }
}
console.log(`Foram ${aprovados} alunos aprovados!`);
console.log(`Foram ${reprovados} alunos rerovados!`);

// 4. Encontre o aluno com a maior média

let maiorMedia = 0;
let melhorAluno = "";

for (let i = 0; i < students.length; i++) {
  let soma = 0;
  let media = 0;

  for (let j = 0; j < students[i].grades.length; j++) {
    soma += students[i].grades[j];
  }
  media = soma / students[i].grades.length;
  if (media > maiorMedia) {
    maiorMedia = media;
    melhorAluno = students[i].name;
  }
}
console.log(
  `O Aluno com a maior nota foi o ${melhorAluno} com a média ${maiorMedia}`
);

// 5. Calcule a média geral da turma
let mediaGeral = 0;

for (let i = 0; i < students.length; i++) {
  let soma = 0;

  for (let j = 0; j < students[i].grades.length; j++) {
    soma += students[i].grades[j];
  }

  let media = soma / students[i].grades.length;
  mediaGeral += media
}

let total = (mediaGeral / students.length)
  
  console.log(`A média geral da turma é ${total}`);

