import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { FormComponent } from "../form/form.component";
import { HomeComponent } from "../home/home.component";

const App_Routing: Routes = [
    {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
]

export const AppRouting = RouterModule.forRoot(App_Routing);