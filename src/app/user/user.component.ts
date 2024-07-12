import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() selectUser = new EventEmitter<string>();


  get imagePath() {
    return `assets/users/${this.user.avatar}`
  }
  

  onSelectedUser(){
    this.selectUser.emit(this.user.id);
  }
}
