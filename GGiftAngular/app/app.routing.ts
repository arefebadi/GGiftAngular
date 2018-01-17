import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HampersComponent } from './hamper/hamper.component'

const appRoutes: Routes = [
    {
        path: 'hamplist',
        component: HampersComponent
    },
    {
        path: '**',  // otherwise route.
        component: HampersComponent
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);