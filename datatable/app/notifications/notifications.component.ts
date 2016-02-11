import {Component} from 'angular2/core';
import {MyPageComponent} from '../components/myText/myPage.component';
@Component({
    templateUrl:'app/notifications/notifications.template.html',
    selector:'notificatons',
    directives:[MyPageComponent]
})
export class NotificationsComponent{
    
}