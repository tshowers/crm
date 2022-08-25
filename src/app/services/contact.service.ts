import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../shared/data/contact.model';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _itemDocs?: AngularFirestoreCollection;
  public items?: Observable<any[]>;

  private _refDocs?: AngularFirestoreCollection;
  public refDocs?: Observable<any[]>;

  private _collectionName: string = environment.CONTACTS;

  public contactSubject = new Subject<Contact>();



  constructor(private _firestore: AngularFirestore, public authService: AuthService) { }


  getAllOrphaned() {
    this._itemDocs = this._firestore.collection(this._collectionName);
    this.items = this._itemDocs.valueChanges({ idField: '_id' }).pipe(
      map(items => {
        return items.filter(item => { return (item['companyId'] == undefined)})
      })
    );
  }

}
