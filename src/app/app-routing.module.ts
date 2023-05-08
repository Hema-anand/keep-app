import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthGuard } from './service/auth.guard';
import { CanDeactivateGuard } from './service/can-deactivate.guard';

const routes: Routes = [
  { path: "notes", component: NoteViewComponent, canActivate: [AuthGuard] },
  { path: "notes/:id", component: NoteEditComponent, canActivate :[AuthGuard], canDeactivate: [CanDeactivateGuard] },
  { path: "login", component: LoginComponent },
  { path: "register-user", component: RegisterFormComponent },
  { path: "", redirectTo: "/notes", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
