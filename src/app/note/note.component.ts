import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  note?: Note;

  @Output()
  deletedNote: EventEmitter<number> = new EventEmitter<number>();

  isHovered: boolean = false;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  over() {
    this.isHovered = true;
  }

  out() {
    this.isHovered = false;
  }

  deleteNote() {
    this.noteService.deleteNote(this.note?.id!).subscribe({
      next: data => {
        this.deletedNote.emit(this.note?.id);
      },
      error: err => {
        console.log(err);
        this.deletedNote.emit(-1);
      }
    })
  }
}
