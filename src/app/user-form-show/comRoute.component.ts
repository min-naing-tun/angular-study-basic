import { RouterModule, Routes } from '@angular/router';
import { ComA } from './comA.component';
import { ComB } from './comB.component';
import { ComC } from './comC.component';
import { ComD } from './comD.component';
import { ChildOne } from './childOne.component';
import { ChildTwo } from './childTwo.component';
import { ChildThree } from './childThree.component';

const mntRouting: Routes = [
    {
        path: 'userFormShow/ComA',
        component: ComA,
        children: [
            {
                path: "",
                component: ChildOne
            },
            {
                path: "childOne",
                component: ChildOne
            },
            {
                path: "childTwo",
                component: ChildTwo
            },
            {
                path: "childThree",
                component: ChildThree
            }
        ]
    },
    {
        path: 'userFormShow/ComB',
        component: ComB
    },
    {
        path: 'userFormShow/ComC',
        component: ComC
    },
    {
        path: 'userFormShow/ComD/:id', //for route parameter id is the variable
        component: ComD
    }
]


export const ComRoute = RouterModule.forChild(mntRouting);