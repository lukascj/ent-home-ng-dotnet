import { Routes } from '@angular/router';

import { StartViewComponent } from './start-view/start-view.component';
import { CreateEntViewComponent } from './create-ent-view/create-ent-view.component';
import { EntViewComponent } from './ent-view/ent-view.component';
import { CreateLogViewComponent } from './create-log-view/create-log-view.component';
import { BrowseViewComponent } from './browse-view/browse-view.component';
import { CreateListViewComponent } from './create-list-view/create-list-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { LogViewComponent } from './log-view/log-view.component';

import { entTypes, subEntTypes } from '../../../data-structures'

const entTypesStr = `ents|${entTypes.concat(subEntTypes).map(type => type['name'].split('/')[2]).join('|')}`;
const logTypesStr = 'log|review|diary-entry';

export const routes: Routes = [
    {path: '', component: StartViewComponent},
    
    {path: 'create/ent', component: CreateEntViewComponent},
    {path: 'edit/ent/:handle', component: CreateEntViewComponent},
    {path: 'create/:logType(log|review|diary-entry)', component: CreateLogViewComponent}, // logType - är det exklusivt en recension (review) eller exklusivt ett dagboksinlägg (diary-entry? eller är det båda två (log)
    {path: 'edit/:logType(log|review|diary-entry)', component: CreateLogViewComponent}, // id queryParam
    {path: 'create/list', component: CreateListViewComponent},
    {path: 'edit/list', component: CreateListViewComponent}, // id queryParam
    
    {path: `browse`, component: BrowseViewComponent},
    {path: `search`, component: BrowseViewComponent},
    {path: `list`, component: ListViewComponent}, // id queryParam
    {path: `user/:handle`, component: ListViewComponent}, // id queryParam
    {path: `:browseType(${entTypesStr}|artists|users|lists|reviews)`, component: BrowseViewComponent},
    {path: `:entType(${entTypesStr})/:handle`, component: EntViewComponent}, // Handle är inte samma som title, eftersom flera filmer kan ha samma namn, plus att jag vill ha små bokstäver i URL:en, Handle-struktur: part1-part2-year
    {path: `:logType(${logTypesStr})`, component: LogViewComponent}, // Query parameter för id ("?id=") istället för route parametrar som på de flesta andra
    
    {path: '**', redirectTo: '/', pathMatch: 'full'},
];
