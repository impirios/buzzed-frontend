import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList = [];
  constructor(private userService:UserService) { 
    this.getUsers()
  }

  ngOnInit() {
  }
  
  getUsers(){
    this.userService.getAllUsers().subscribe(data=>{
      console.log(data);
      this.userList = data;
    }); 
  }

}
