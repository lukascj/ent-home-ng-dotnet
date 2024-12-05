namespace EntApi.Models;

public class User
{
  public int Id { get; set; }

  // [Required]
  public string Name { get; set; }

  // [Required]
  public string Handle { get; set; }

  // [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
  // public DateTime CreatedDate { get; set; } = DateTime.Now;
}