import {Component, Output, Input, EventEmitter} from 'angular2/core';
@Component({
    selector: 'asset-oit',
    templateUrl:'app/components/oit/oit.template.html'
})

export class OitComponent{
    @Input() assetLabel : string;
    @Input() assetId : string;
    @Input() assetTextHint : string ="";
    @Input() assetTootTip : string ="";
    @Input() bindModelData: any;
    @Input() assetDisabled: boolean = false;
    @Output() bindModelDataChange: EventEmitter<any> = new EventEmitter();
       
    updateData(event) {
      this.bindModelData = event;
      this.bindModelDataChange.emit(event);
    }
}