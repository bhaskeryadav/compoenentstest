import {Component, Input} from 'angular2/core';
@Component({
    selector: 'asset-ol',
    templateUrl:'app/components/ol/ol.template.html'
})
export class OlComponent{
    
  @Input() assetTitle: string ="";
  @Input() assetLabel: string;
 
}