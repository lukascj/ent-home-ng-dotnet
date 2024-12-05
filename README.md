## EntHome (Angular 19 & ASP.NET Core)

API och hemsida för upptäckande och recenserande av underhållning och konst. 
Använder ASP.NET Core och Angular 18.

### För att köra EntHome (frontend)

`ng serve`

### För att köra EntApi (backend)

`docker-compose up` *Startar databas-container*
`dotnet build` *Kompilerar, innebär automatisk "dotnet restore"*
`dotnet run dev --launch-profile https` *Kör*

#### *För att nollställa databasen*

`dotnet run reset`