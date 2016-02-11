import {Component} from 'angular2/core';
import {WorkBasketComponent} from '../workbasket/workbasket.component';
import {NotificationsComponent} from '../notifications/notifications.component';

@Component({
    templateUrl:'app/search/search.template.html',
    directives:[WorkBasketComponent,NotificationsComponent]
})
export class SearchComponent{
    switchValue:string='Workbasket';
   
    templateArray:string[]=["Workbasket","Notification"];
   
    onSelect(val){
        this.switchValue=val;
    }
}