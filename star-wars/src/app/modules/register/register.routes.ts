import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: RegisterComponent
    }
];

export const RegisterRoutes = RouterModule.forChild(routes);
