using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UserService.Migrations
{
    /// <inheritdoc />
    public partial class third : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Skills_Profiles_ProfileId",
                table: "Skills");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Profiles_ProfileId",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "ProfileId",
                table: "Users",
                newName: "ProfilesId");

            migrationBuilder.RenameIndex(
                name: "IX_Users_ProfileId",
                table: "Users",
                newName: "IX_Users_ProfilesId");

            migrationBuilder.RenameColumn(
                name: "ProfileId",
                table: "Skills",
                newName: "ProfilesId");

            migrationBuilder.RenameIndex(
                name: "IX_Skills_ProfileId",
                table: "Skills",
                newName: "IX_Skills_ProfilesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Skills_Profiles_ProfilesId",
                table: "Skills",
                column: "ProfilesId",
                principalTable: "Profiles",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Profiles_ProfilesId",
                table: "Users",
                column: "ProfilesId",
                principalTable: "Profiles",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Skills_Profiles_ProfilesId",
                table: "Skills");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Profiles_ProfilesId",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "ProfilesId",
                table: "Users",
                newName: "ProfileId");

            migrationBuilder.RenameIndex(
                name: "IX_Users_ProfilesId",
                table: "Users",
                newName: "IX_Users_ProfileId");

            migrationBuilder.RenameColumn(
                name: "ProfilesId",
                table: "Skills",
                newName: "ProfileId");

            migrationBuilder.RenameIndex(
                name: "IX_Skills_ProfilesId",
                table: "Skills",
                newName: "IX_Skills_ProfileId");

            migrationBuilder.AddForeignKey(
                name: "FK_Skills_Profiles_ProfileId",
                table: "Skills",
                column: "ProfileId",
                principalTable: "Profiles",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Profiles_ProfileId",
                table: "Users",
                column: "ProfileId",
                principalTable: "Profiles",
                principalColumn: "Id");
        }
    }
}
