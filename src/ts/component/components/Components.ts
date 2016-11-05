import {Component} from '@angular/core';
import {BasicComponent}  from './../basic/Basic';
import {ClickEventComponent} from './../clickEvent/ClickEvent';
import {EnterBlurEventComponent} from './../EnterBlurEvent/EnterBlurEvent'

@Component({
    selector:'components-component',
    styles:[require('Components.scss')],
    directives:[
        BasicComponent,
        ClickEventComponent,
        EnterBlurEventComponent
    ],
    template:require('Components.html')
})

export class ComponentsComponent{
}
