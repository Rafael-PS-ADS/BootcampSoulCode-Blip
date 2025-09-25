const alunos = [
    { nome: "Marcos", nota1: 8, nota2: 9 },
    { nome: "Isabel", nota1: 7, nota2: 6 },
    { nome: "Eric", nota1: 4, nota2: 3 }
];

alunos.forEach(aluno => {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Aluno: ${aluno.nome} Nota: ${media}`);
})