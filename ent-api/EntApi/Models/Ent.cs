namespace EntApi.Models;

public class Ent
{
  public int Id { get; set; }
  public required string Type { get; set; }
  public required string Title { get; set; }
  public required string Date { get; set; }
  public required string Handle { get; set; }
  public required string Desc { get; set; }
}