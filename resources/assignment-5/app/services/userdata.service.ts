import { Injectable } from "@angular/core";
import { CountClickService } from "./count.service";

@Injectable()

export class UserDataService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private countClick: CountClickService){ }


    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.countClick.addClick();
    }
    
    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.countClick.addClick();
    }
}