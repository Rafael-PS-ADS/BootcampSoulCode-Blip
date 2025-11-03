namespace Models
{
    internal abstract class Pessoa
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public int Idade { get; set; }

        public Pessoa()
        { }

        public Pessoa(string Nome, string Email, int Idade)
        {
            this.Nome = Nome;
            this.Email = Email;
            this.Idade = Idade;
        }

        public abstract void Apresentar();

        public virtual void Cumprimentar()
        {
            Console.WriteLine("Olá!");
        }
    }
}
