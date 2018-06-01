import {Pipe, PipeTransform} from "@angular/core";

@Pipe ({
    name : 'search'
})

export class SearchPipe implements PipeTransform {

    transform (users, val) {
        return users.filter(user => {
            return user.name.includes(val)
        })
    }

}
