import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  note: Note = {};
  @Output()
  addedNote: EventEmitter<any> = new EventEmitter<any>();

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  addNote() {
    this.noteService.saveNote(this.note).subscribe({
      next: data => {
        this.addedNote.emit(this.note);
      },
      error: err => {
        alert("Failed due to some network error!")
      }
    })
  }

}
