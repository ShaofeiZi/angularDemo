import {Component} from '@angular/core';

@Component({
    selector: 'ng-tag',
    styles: [require('./NgTag.scss')],
    template: require('NgTag.html')
})

export class NgTagComponent {
    list:any;
    ngSwitchList:any;
    ngStyleList:any;

    constructor() {
        this.list = [{
                'name': 'xiaomo'
            },{
                'name': 'xiaogang'

            },{
                'name': 'xiaomoxue'
            },{
                'name':'ijhhgs'
            }];
        this.ngSwitchList=[
            'xiaomo',
            'xiaoming'
        ];
        this.ngStyleList={
            'color':'#000',
            'backgroundColor':'#ccc'
        };
    };

    myVal:number = 0;
    changeValue($event):void{
        console.log($event.target.value);// 输出选中的值设给myVal
        this.myVal = $event.target.value;
}

    classes:any={};
    fn():any {
        return this.classes =  {
            'btn-primary':true
        };
    }
}
