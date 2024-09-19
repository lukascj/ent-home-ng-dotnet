import { Routes } from '@angular/router';
import { StartViewComponent } from './start-view/start-view.component';
import { CreateEntViewComponent } from './create-ent-view/create-ent-view.component';
import { EntViewComponent } from './ent-view/ent-view.component';
import { CreateLogViewComponent } from './create-log-view/create-log-view.component';

export const routes: Routes = [
    {path: '', component: StartViewComponent},
    {path: ':browse(ents|films|movies|series|shows|tv-shows|tv|games|video-games|books|literature|comics|graphic-novels|novels|short-stories|)/', component: EntViewComponent},
    {path: 'ent/:label', component: EntViewComponent},
    {path: ':action(create|edit)/ent', component: CreateEntViewComponent},
    {path: ':action(create|edit)/:type(log|review|diary-entry)', component: CreateLogViewComponent},
];
