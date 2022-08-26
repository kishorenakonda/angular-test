import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";

@Injectable()
export class UserService {

    constructor(private httpService: HttpService) { }

    userUrls = {
        list: './assets/data/userlist.json'
    }

    getUserList(successFn: Function, errorFn: Function) {
        this.httpService.get(this.userUrls.list, successFn, errorFn);
    }
}