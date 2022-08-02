import { Component, OnInit } from '@angular/core';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';
import { Note } from 'src/app/shared/data/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent extends DataHandlerComponent implements OnInit {

  public note = <Note>{
    name: '',
    text: ''
  }

  override onSubmit(): void {
    this.addNote();
  }

  addNote(): void {
    if (this.data.notes && this.data.notes.length)
      this.data.notes.push(this.note);
    else
      this.addNoteAfterAddingArray();

    super.onSubmit(environment.CONTACTS);

    this.note = <Note>{
      name: '',
      text: ''
    };
  }

  addNoteAfterAddingArray(): void {
    this.data.notes = [];
    this.data.notes.push(this.note);

  }

  removeNote(at: number): void {
    this.data.notes.splice(at, 1);
  }

  editNote(at: number): void {
    this.note = this.data.notes[at];
    this.removeNote(at);
  }
}
