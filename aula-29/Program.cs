using System;
using System.Collections.Generic;
using Models;

namespace Aula29
{
    class Program
    {
        static void Main(string[] args)
        {
            Aluno p1 = new Aluno("Ana", "ana@email.com", 25);
            p1.Apresentar();
            p1.Estudar();

            Pessoa p2 = new Aluno();
            p2.Nome = "Caio";
            p2.Idade = 24;
            p2.Apresentar();

            Aluno a1 = new Aluno();
            a1.Nome = "Victor";
            a1.Idade = 25;
            a1.Email = "victor@email.com";
            a1.Matricula = "1234566889";
            a1.Apresentar();
            a1.Estudar();
            a1.Cumprimentar();

            Americano p3 = new Americano();
            p3.Nome = "Josh";
            p3.Idade = 26;
            p3.Cumprimentar();
            p3.Apresentar();
        }
    }
}