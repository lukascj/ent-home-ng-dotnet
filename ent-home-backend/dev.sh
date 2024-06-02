if [ $# -eq 0 ] # om mängden argument är 0
  then
    dotnet build # kompilerar, innebär automatisk "dotnet restore"
    dotnet run dev --launch-profile https
fi