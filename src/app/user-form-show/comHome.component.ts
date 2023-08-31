import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-ComHome',
    template: `
    <div style="padding: 20px; background-color: burlywood;">
    <a routerLink=ComA class="p-3">comA</a>&nbsp;&nbsp;&nbsp;
    <a routerLink="ComB" class="p-3">comB</a>&nbsp;&nbsp;&nbsp;
    <a [routerLink]="['ComC']" [queryParams]="{'name': 'Min Naing Tun', 'age': '23'}" class="p-3">comC</a>&nbsp;&nbsp;&nbsp; <!--Sending with query params-->
    <a [routerLink]="['ComD', 10]" class="p-3">comD</a> <!--Route with route parameters-->
    </div>
    <br>

    <!--Click event with route and it's parameter values-->
    <button type="button" (click)="idButtonClicked(1)" class="btn btn-primary">One</button>&nbsp;&nbsp;&nbsp;
    <button type="button" (click)="idButtonClicked(2)" class="btn btn-primary">Two</button>&nbsp;&nbsp;&nbsp;
    <button type="button" (click)="idButtonClicked(3)" class="btn btn-primary">Three</button>&nbsp;&nbsp;&nbsp;
    <button type="button" (click)="idButtonClicked(4)" class="btn btn-primary">Four</button>&nbsp;&nbsp;&nbsp;
    <button type="button" (click)="idButtonClicked(5)" class="btn btn-primary">Five</button>&nbsp;&nbsp;&nbsp;


    <br>
    <router-outlet></router-outlet>
    <br>
    
    `
})

export class ComHome {

    constructor(private myRouter: Router) {

    }

    idButtonClicked(userClickId: number){
        this.myRouter.navigate(['userFormShow/ComD', userClickId]); //After clicked and send route data to another component
    }
}