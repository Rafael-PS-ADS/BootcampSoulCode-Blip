namespace Models
{
    internal class Americano : Pessoa
    {
        public override void Apresentar()
        {
            Console.WriteLine($"Hello my name is {Nome}, i am {Idade} years");
        }
        public override void Cumprimentar()
        {
            Console.WriteLine("Hello!");
        }
    }
}
