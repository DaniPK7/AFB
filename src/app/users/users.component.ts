import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  items:Observable <any[]>;
  constructor(firestore: AngularFirestore)
  {
    this.items= firestore.collection('usuarios').valueChanges();
  }

  ngOnInit(): void {
  }

}
