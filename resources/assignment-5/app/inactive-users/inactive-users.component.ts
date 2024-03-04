import { Component } from '@angular/core';
import { UserDataService } from '../services/userdata.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    this.users = this.userDataService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userDataService.onSetToActive(id);
  }
}
