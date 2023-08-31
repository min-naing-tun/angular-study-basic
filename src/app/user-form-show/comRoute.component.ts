import { RouterModule, Routes } from '@angular/router';
import { ComA } from './comA.component';
import { ComB } from './comB.component';
import { ComC } from './comC.component';
import { ComD } from './comD.component';

const mntRouting: Routes = [
    {
        path: 'userFormShow/ComA',
        component: ComA
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