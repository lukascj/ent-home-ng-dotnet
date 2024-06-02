namespace ent_home_backend.Models;

public class Ent
{
  public int Id { get; set; }
  public required string EntType { get; set; }
  public required string MainTitle { get; set; }
  public required string MainDesc { get; set; }
  public required string MainDate { get; set; }
  public required string MainPosterPath { get; set; }
}