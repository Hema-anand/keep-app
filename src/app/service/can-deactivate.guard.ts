import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NoteEditComponent } from '../note-edit/note-edit.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<NoteEditComponent> {
  canDeactivate(
    component: NoteEditComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate? component.canDeactivate():true;
  }
  
}
