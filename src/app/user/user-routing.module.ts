import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Contacts and Users' } },
    { path: 'dashboard', component: DashboardComponent, data: { title: 'Contacts Dashboard' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
})

export class UserRoutingModule { }