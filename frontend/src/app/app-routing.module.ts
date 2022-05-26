import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from "./components/nav/nav.component";
import { UrlCreateComponent } from "./components/url/url-create/url-create.component";
import { UrlListComponent } from "./components/url/url-list/url-list.component";


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: '',
        component: NavComponent,
        canActivate: [AuthGuard],
         children: [
            {path: 'home', component: HomeComponent},
            {path: 'urls', component: UrlListComponent},
            {path: 'urls/create', component: UrlCreateComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {  }