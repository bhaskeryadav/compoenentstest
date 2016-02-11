import {Component} from 'angular2/core';
import {MyTextComponent} from './myText.component'

@Component({
    selector: 'my-page',
    template:`
    <myText myId="id1" [(bindModelData)]="myString1"></myText><div>1: {{myString1}}</div>
    <myText myId="id2" [(bindModelData)]="myString2"></myText><div>2: {{myString2}}</div>
    <button type="button" (click)="logValues()">submit</button>
`,
    directives:[MyTextComponent]
})
export class MyPageComponent{
    myString1: string="aaron";
    myString2: string="fernandes";
    
    logValues(){
        console.log(this.myString1+' '+this.myString2);
    }
}