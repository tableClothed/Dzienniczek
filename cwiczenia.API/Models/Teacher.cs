namespace cwiczenia.API.Models
{
    public class Teacher
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public byte[] Photo { get; set; }
        public int ClassId { get; set; }
        public Class Class { get; set; }
    }
}