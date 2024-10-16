import { Routes } from '@angular/router';

import { StartViewComponent } from './start-view/start-view.component';
import { CreateViewComponent } from './create-view/create-view.component';
import { CreateEntViewComponent } from './create-ent-view/create-ent-view.component';
import { CreateLogViewComponent } from './create-log-view/create-log-view.component';
import { CreateListViewComponent } from './create-list-view/create-list-view.component';
import { EntViewComponent } from './ent-view/ent-view.component';
import { BrowseViewComponent } from './browse-view/browse-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { LogViewComponent } from './log-view/log-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { FormsViewComponent } from './forms-view/forms-view.component';
import { StatsViewComponent } from './stats-view/stats-view.component';

import { entTypes, subEntTypes } from '../../../data-structures'

// id queryParam -- Query parameter för id ("?id=") istället för route parameter (/:id)
export const routes: Routes = [
    {path: '', component: StartViewComponent},
    
    {path: 'create', component: CreateViewComponent},
    {path: 'create/ent', component: CreateEntViewComponent},
    {path: 'edit/ent/:handle', component: CreateEntViewComponent},
    {path: 'create/list', component: CreateListViewComponent},
    {path: 'edit/list', component: CreateListViewComponent}, // id queryParam
    
    {path: `login`, component: FormsViewComponent},
    {path: `signup`, component: FormsViewComponent},
    {path: `forms`, redirectTo: '/login', pathMatch: 'full'},
    
    {path: `browse`, component: BrowseViewComponent},
    {path: `search`, component: BrowseViewComponent},
    {path: `list`, component: ListViewComponent}, // id queryParam

    {path: `users/:handle`, component: ProfileViewComponent},
    {path: `users/:handle/ratings`, component: BrowseViewComponent},
    {path: `users/:handle/reviews`, component: BrowseViewComponent},
    {path: `users/:handle/diary`, component: BrowseViewComponent},
    {path: `users/:handle/lists`, component: BrowseViewComponent},
    {path: `users/:handle/stats`, component: StatsViewComponent},
];

const fullEntTypes: string[] = ['ents'].concat(entTypes.concat(subEntTypes).map(type => type['name'].split('/')[2]));
fullEntTypes.forEach(type => {
    routes.push({path: `${type}/:handle`, component: EntViewComponent});
    // Handle är en slags identifier som liknar titeln men modifierad eftersom flera filmer kan ha samma namn, samt begränsad till vissa tecken.
    // Handle har endast små bokstäver och dashes istället för mellanrum och andra udda tecken (eftersom den används i URL:en).
    // Handle struktur exempel: "star-wars-episode-i-the-phantom-menace-1999".
});
const fullBrowseTypes: string[] = fullEntTypes.concat(['artists', 'users', 'lists', 'reviews']);
fullBrowseTypes.forEach(type => {
    routes.push({path: type, component: BrowseViewComponent});
});
const logTypes: string[] = ['log', 'review', 'diary-entry'];
logTypes.forEach(type => {
    routes.push({path: type, component: LogViewComponent}); // id queryParam
    routes.push({path: `create/${type}`, component: CreateLogViewComponent});
    routes.push({path: `edit/${type}`, component: CreateLogViewComponent}); // id queryParam
    // Är det exklusivt en recension (review) eller exklusivt ett dagboksinlägg (diary-entry? eller är det båda två (log)
});

routes.push({path: '**', redirectTo: '/', pathMatch: 'full'});
