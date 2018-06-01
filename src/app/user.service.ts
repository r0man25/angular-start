import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class UserService {
    users = [
        {name : "Jack"},
        {name : "Ralph"},
        {name : "Mike"},
        {name : "John"},
        {name : "Arnold"},
        {name : "Leo"},
    ]


    size = 8;

    constructor (private http : Http) {}

    getUsers() {
        let url = 'https://randomuser.me/api/?inc=gender,name,picture,location&results='+this.size+'&nat=gb';
        return this.http.get(url)
            .pipe(map(response => response.json()))
            .pipe(map(users => users.results))
            .pipe(map(users => {
                return users.map(u => {
                    return {
                        img : u.picture.large,
                        name : u.name.first + ' ' + u.name.last,
                        geo : u.location.city + ' ' + u.location.state + ' ' + u.location.street
                    }
                })
            }))
    }

    setSize(size) {
        this.size = size
    }
}
