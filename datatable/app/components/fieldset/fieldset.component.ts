import {Component, Input} from 'angular2/core';
@Component({
    selector: 'asset-fieldset',
    templateUrl:'app/components/fieldset/fieldset.template.html'
})
export class FieldsetComponent{
    
  @Input() title: string;
  
  visible: boolean = true;

  toggle() {
    this.visible = !this.visible;
  }
}