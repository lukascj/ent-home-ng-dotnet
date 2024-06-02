using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ent_home_backend.Migrations
{
    /// <inheritdoc />
    public partial class M3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EntType",
                table: "Ents",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "MainDate",
                table: "Ents",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "MainDesc",
                table: "Ents",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "MainPosterPath",
                table: "Ents",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EntType",
                table: "Ents");

            migrationBuilder.DropColumn(
                name: "MainDate",
                table: "Ents");

            migrationBuilder.DropColumn(
                name: "MainDesc",
                table: "Ents");

            migrationBuilder.DropColumn(
                name: "MainPosterPath",
                table: "Ents");
        }
    }
}
