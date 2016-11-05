import {Component} from '@angular/core';
import {UserModel} from './../../model/UserModel';

let xiaomo:UserModel = new UserModel( 'xi是omo');
let xiaoming:UserModel = new UserModel('xiaoming');

@Component({
    selector: 'basic',
    styles:[require('./Basic.scss')],
    template: require('./Basic.html')
})

export class BasicComponent {

    users:Object;
    constructor() {
        this.users= [ xiaomo,xiaoming];
    };
}
console.log(xiaomo.id);
// console.log(users.id);