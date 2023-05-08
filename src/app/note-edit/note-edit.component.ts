import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {


  note: Note = {};
  editStatus: boolean = false;
  id: number = -1;

  constructor(private noteService: NoteService,
    private routerService: RouterService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log("Loading");
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = + (param.get("id") ?? "0");
      this.noteService.getNoteById(this.id).subscribe(data => {
        this.note = data;
        this.editStatus = false;
      })
    })
  }

  canDeactivate() {
    if (!this.editStatus) {
      let response = confirm("Changes are not saves. Do you really want to leave?");
      return response;
    }
    return true;
  }


  editNote() {
    this.noteService.updateNote(this.note?.id!, this.note!).subscribe({
      next: data => {
        this.note = data;
        this.editStatus = true;
        this.routerService.navigateToNotesView();
      },
      error: err => {
        alert(err);
      }
    })
  }
}
