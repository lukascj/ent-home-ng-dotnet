import { Routes } from '@angular/router';

// Views
import { StartViewComponent } from 'views/start-view/start-view.component';
import { CreateViewComponent } from 'views/create-view/create-view.component';
import { CreateEntViewComponent } from 'views/create-ent-view/create-ent-view.component';
import { CreateLogViewComponent } from 'views/create-log-view/create-log-view.component';
import { CreateListViewComponent } from 'views/create-list-view/create-list-view.component';
import { EntViewComponent } from 'views/ent-view/ent-view.component';
import { BrowseViewComponent } from 'views/browse-view/browse-view.component';
import { ListViewComponent } from 'views/list-view/list-view.component';
import { LogViewComponent } from 'views/log-view/log-view.component';
import { ProfileViewComponent } from 'views/profile-view/profile-view.component';
import { FormsViewComponent } from 'views/forms-view/forms-view.component';
import { StatsViewComponent } from 'views/stats-view/stats-view.component';

// Data structures
import { entTypes, subEntTypes } from 'models/ent';

// Note to self: "id queryParam" betyder att routen använder 
// query parameter för id ("?id=") 
// istället för route parameter ("/:id")

// Routes
export const routes: Routes = [
    // Start
    {path: '', component: StartViewComponent},
    
    // Create & edit
    {path: 'create', component: CreateViewComponent},
    {path: 'create/ent', component: CreateEntViewComponent},
    {path: 'edit/ent/:handle', component: CreateEntViewComponent},
    {path: 'create/list', component: CreateListViewComponent},
    {path: 'edit/list', component: CreateListViewComponent}, // id queryParam
    
    // Login & signup
    {path: `login`, component: FormsViewComponent},
    {path: `signup`, component: FormsViewComponent},
    {path: `forms`, redirectTo: '/login', pathMatch: 'full'},
    
    // Browse & search
    {path: `browse`, component: BrowseViewComponent},
    {path: `search`, component: BrowseViewComponent},
    {path: `list`, component: ListViewComponent}, // id queryParam

    // Users
    {path: `users/:handle`, component: ProfileViewComponent},
    {path: `users/:handle/ratings`, component: BrowseViewComponent},
    {path: `users/:handle/reviews`, component: BrowseViewComponent},
    {path: `users/:handle/diary`, component: BrowseViewComponent},
    {path: `users/:handle/lists`, component: BrowseViewComponent},
    {path: `users/:handle/stats`, component: StatsViewComponent},
];

// Alla ent-typer sammanfogas i en array
const fullEntTypes: string[] = ['ents']
    .concat(entTypes.concat(subEntTypes)
    .map(type => type['name'].split('/')[2]));

// Alla ent-typer får en egen route
fullEntTypes.forEach(type => {
    routes.push({path: `${type}/:handle`, component: EntViewComponent});
    // Handle är en slags identifier som liknar titeln men modifierad eftersom flera filmer kan ha samma namn, samt begränsad till vissa tecken.
    // Handle har endast små bokstäver och dashes istället för mellanrum och andra udda tecken (eftersom den används i URL:en).
    // Handle struktur exempel: "star-wars-episode-i-the-phantom-menace-1999".
});

// Alla typer för browse sammanfogas i en array
const fullBrowseTypes: string[] = fullEntTypes
    .concat(['artists', 'users', 'lists', 'reviews']);

// Browse routes läggs till
fullBrowseTypes.forEach(type => {
    routes.push({path: type, component: BrowseViewComponent});
});

// Alla log-typer sammanfogas i en array
const logTypes: string[] = ['log', 'review', 'diary-entry'];

// Log & create-log routes läggs till
logTypes.forEach(type => {
    routes.push({path: type, component: LogViewComponent}); // id queryParam
    routes.push({path: `create/${type}`, component: CreateLogViewComponent});
    routes.push({path: `edit/${type}`, component: CreateLogViewComponent}); // id queryParam
    // Är det exklusivt en recension (review) 
    // eller exklusivt ett dagboksinlägg (diary-entry)? 
    // Eller är det båda två (log)?
});

// Övriga routes redirectas till start
routes.push({path: '**', redirectTo: '/', pathMatch: 'full'});
