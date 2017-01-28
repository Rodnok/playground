import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokePowahComponent } from './components/poke-powah/poke-powah.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'poke-powah', component: PokePowahComponent },
    { path: '**', component: NotFoundComponent }
];