import { Routes, RouterModule } from '@angular/router';
import { StarShipDetailsComponent } from './starhip-details.component';
import { StarshipResolver } from './starhip-details.resolver';

const routes: Routes = [
    {
        path: ':id',
        pathMatch: 'full',
        component: StarShipDetailsComponent,
        resolve: { routeResolver: StarshipResolver }
    }
];

export const StarshipDetailsRoutes = RouterModule.forChild(routes);
