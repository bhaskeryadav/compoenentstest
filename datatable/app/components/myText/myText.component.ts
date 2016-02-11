import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'myText',
    template:`
    <label>{{someLabel}}</label>
    <input id=myId type="text" [ngModel]=bindModelData (ngModelChange)="updateData($event)">
`
})
export class MyTextComponent {
    someLabel: string = "caption";
    @Input() myId : string;
    @Input() bindModelData: any;
    @Output() bindModelDataChange: EventEmitter<any> = new EventEmitter();
    updateData(event) {
      this.bindModelData = event;
      this.bindModelDataChange.emit(event);
    }
}
