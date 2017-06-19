using System.ComponentModel.DataAnnotations;

namespace TestWebAppUsingCSharpVisualStudio.Models
{
    public class FootballTeam
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Range(1800,2017)]
        public int Year { get; set; }
        [MaxLength(20)]
        public string Nationality { get; set; }
    }
}