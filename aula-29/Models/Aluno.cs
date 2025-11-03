namespace Models
{
    internal class Aluno : Pessoa
    {
        public string Matricula { get; set; }

        public Aluno() { }

        public Aluno(string Nome, string Email, int Idade) : base(Nome, Email, Idade) { }

        public override void Apresentar()
        {
            Console.WriteLine($"Olá meu nome é {Nome} tenho {Idade} anos. Sou estudante.");
        }

        public void Estudar() => Console.WriteLine("Estudando");
    }
}
