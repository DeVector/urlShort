import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { UrlListComponent } from "./components/url/url-list/url-list.component";


const routes: Routes = [
    {
        path: '',
        component: NavComponent, children: [
            {path: 'home', component: HomeComponent},
            {path: 'urls', component: UrlListComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {  }