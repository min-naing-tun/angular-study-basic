import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
    selector: 'my-comD',
    template: `
    <h1>This is component D</h1>
    <p>
        User is click {{userClickId}} button
    </p>
    `,
    styles: [``]
})

export class ComD implements OnInit{
    userClickId: number = 0;
    ngOnInit(): void {
        this.userClickId = this.myActivateRoute.snapshot.params["id"]; // getting route parameter
    }

    constructor(private myActivateRoute: ActivatedRoute) {
        
    }
}