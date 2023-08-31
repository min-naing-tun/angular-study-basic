import { Component } from '@angular/core';

@Component({
    selector: 'my-ComHome',
    template: `
    <div style="padding: 20px; background-color: burlywood;">
    <a routerLink=ComA class="p-3">comA</a>&nbsp;&nbsp;&nbsp;
    <a routerLink="ComB" class="p-3">comB</a>&nbsp;&nbsp;&nbsp;
    <a routerLink="ComC" class="p-3">comC</a>&nbsp;&nbsp;&nbsp;
    <a [routerLink]="['ComD', 10]" class="p-3">comD</a> <!--Route with route parameters-->
    </div>

    <br>
    <router-outlet></router-outlet>
    `
})

export class ComHome {

}