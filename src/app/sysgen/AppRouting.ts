import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { FormComponent } from "../form/form.component";
import { HomeComponent } from "../home/home.component";
import { UserFormShowComponent } from "../user-form-show/user-form-show.component";
import { userContactFormCorrectionGuard } from "../user-contact-form-correction.guard";
import { userContactFornLeavingGuard } from "../user-contact-forn-leaving.guard";

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
      },
      {
        path: "userFormShow",
        component: UserFormShowComponent,
        canActivate: [userContactFormCorrectionGuard], // use Can Activate for entering guard condition
        canDeactivate: [userContactFornLeavingGuard], // use Can Deactivate for leaving guard condition
      }
]

export const AppRouting = RouterModule.forRoot(App_Routing);