import { Component, OnInit } from "@angular/core";
import { User } from "../../user";
import { UserService } from "../../user-service.service";
@Component({
  selector: 'ng-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }
 
  ngOnInit(): void {
    this.getUsers();
    
    };
    private getUsers(){
      this.userService.getUsersList().subscribe(data =>{
        this.users = data;
      })
    }
  }
