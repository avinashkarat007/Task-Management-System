import { Component, computed, Input, input } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  // @Input() avatar: string = '';
  // @Input() name: string = '';

  avatar = input.required<string>();
  name = input.required<string>();


  imagePath = computed(() => {
    return this.avatar();
  });

  // get ImagePath(){
  //   return this.avatar;
  // }

onSelectedUserClick() {
  }


}
