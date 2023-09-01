import { Component } from '@angular/core';


@Component({
    selector: 'my-comA',
    template: `
    <h1>This is component one</h1>
    <br>
    <a routerLink="childOne">child one</a>&nbsp;&nbsp;&nbsp;
    <a routerLink="childTwo">child two</a>&nbsp;&nbsp;&nbsp;
    <a routerLink="childThree">child three</a>&nbsp;&nbsp;&nbsp;
    <br><br>
    <div style="padding: 30px; background-color: antiquewhite;">
        <router-outlet></router-outlet>
    </div>
    <br><br>
    `,
    styles: [``]
})


export class ComA{

}