import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class Photo {
  id: number;
  title: string;
  url: string;
}

@Injectable({
  providedIn: "root"
})
export class PhotoService {

  baseUrl = '';

  constructor (private firestore: AngularFirestore){}


  // TODO: Warn request without limit param.
  get() {
    return this.firestore.collection('photos')
    .snapshotChanges();
  }

  getById(id: number) {
    return this.firestore.collection('photos')
    .doc('').snapshotChanges();
  }

  post(body: Photo) {
    return this.firestore.collection('photos')
    .add(body); // ./core/photo-gallery/photo-gallery.service
  }

  update( body: Photo) {  
    return this.put(body);
  }

  create(body: Photo){
    return this.post(body);
  }

  put(body: Photo){
    return this.firestore
      .collection('photos')
      .doc('' + body.id)
      .set({ completed: true }, { merge: true });
  }

  delete(id: string) {
    
    return this.firestore
      .collection('photos')
      .doc(id)
      .delete();
  }

  patch(body: any){
    
  }
}