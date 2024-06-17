using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Api_for_Mta_finel_project.Migrations
{
    /// <inheritdoc />
    public partial class nostory : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "permissionType",
                table: "Users",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int[]>(
                name: "postId",
                table: "Users",
                type: "integer[]",
                nullable: false,
                defaultValue: new int[0]);

            migrationBuilder.CreateTable(
                name: "Like",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Like", x => x.id);
                    table.ForeignKey(
                        name: "FK_Like_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Like_UserId",
                table: "Like",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Like");

            migrationBuilder.DropColumn(
                name: "permissionType",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "postId",
                table: "Users");
        }
    }
}
