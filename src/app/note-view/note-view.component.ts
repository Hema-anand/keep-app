import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  notes: Note[] = [];
  isPanelVisible: boolean = false;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(data => {
      this.notes = data;
    });
  }

  onAddNote(event: any) {
    this.notes.push(event);
  }

  onDeleteNote(noteId?: number) {
    const index = this.notes.findIndex(note => noteId === note.id);
    this.notes.splice(index, 1);
    
  }

  onSearch(event: any) {
    if (event !== "")
      this.notes = this.notes.filter(note => note?.title?.includes(event));
  }

  showPanel() {
    this.isPanelVisible = !this.isPanelVisible;
  }
}
