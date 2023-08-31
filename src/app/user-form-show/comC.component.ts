import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'my-comC',
    template: `
    <h1>This is component C</h1>
    <p>
        Query Param Name : {{nameFromQueryParams}}
        <br>
        Query Param Age : {{ageFromQueryParams}}
    </p>
    `,
    styles: [``]
})

export class ComC implements OnInit{
    nameFromQueryParams: string = "";
    ageFromQueryParams: string = "";
    
    
    ngOnInit(): void {
        this.myActivatedRoute.queryParams.subscribe(
            q => {
                this.nameFromQueryParams = q["name"];
                this.ageFromQueryParams = q["age"]
            }
        ); 
        
        //alert(this.nameFromQueryParams+"\n"+this.ageFromQueryParams);
    }

    
    constructor(private myActivatedRoute: ActivatedRoute){
    }
}