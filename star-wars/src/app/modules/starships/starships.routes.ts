import { Routes, RouterModule } from '@angular/router';
import { StarShipListComponent } from './starships-list/starships-list.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: StarShipListComponent
    }
];

export const StarshipsRoutes = RouterModule.forChild(routes);
