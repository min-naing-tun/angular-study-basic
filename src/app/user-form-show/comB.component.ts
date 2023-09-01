import {Component} from '@angular/core';

@Component({
    selector: 'my-comB',
    template: `
    <h1>This is component two</h1>
    <hr>
    <div id="sectionOne" style="background-color: lightblue; width: 100%; height: 1000px; color: white; font-size: 50px; text-align: center;">
        Section 1
    </div>
    <div id="sectionTwo" style="background-color: grey; width: 100%; height: 1000px; color: white; font-size: 50px; text-align: center;">
        Section 2
    </div>
    <div id="sectionThree" style="background-color: black; width: 100%; height: 1000px; color: white; font-size: 50px; text-align: center;">
        Section 3
    </div>
    <div id="sectionFour" style="background-color: green; width: 100%; height: 1000px; color: white; font-size: 50px; text-align: center;">
        Section 4
    </div>
    `,
    styles: [`
    `]
})

export class ComB{

}