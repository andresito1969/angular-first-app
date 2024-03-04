import { Component } from '@angular/core';
import { UserDataService } from '../services/userdata.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private userDataService: UserDataService) {}
  
  ngOnInit() {
    this.users = this.userDataService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userDataService.onSetToInactive(id);
  }
}
