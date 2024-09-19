if [ $# -eq 0 ] # Om mängden argument är 0
  then
    dotnet build # Kompilerar, innebär automatisk "dotnet restore"
    dotnet run dev --launch-profile https
fi