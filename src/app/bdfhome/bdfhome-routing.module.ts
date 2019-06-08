import { BDFHomePage } from './bdfhome.page';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
            path: 'tabs', 
            component: BDFHomePage,
            children: 
            [
                { 
                    path: 'home', 
                    children: 
                    [
                        {
                            path: '',
                            loadChildren: './home/home.module#HomePageModule'    
                        },
                    ]
                },
                { 
                    path: 'media', children: 
                    [
                        {
                            path: '',
                            loadChildren: './media/media.module#MediaPageModule'    
                        },
                    ]
                },
                {
                    path: 'resources',
                    children: [
                        {
                            path:'',
                            loadChildren: './resources/resources.module#ResourcesPageModule'
                        }
                    ]
                }
                ,
                {
                    path: 'elearning',
                    children: [
                        {
                            path:'',
                            loadChildren: './elearning/elearning.module#ElearningPageModule'
                        }
                    ]
                }
                ,
                {
                    path: 'support',
                    children: [
                        {
                            path:'',
                            loadChildren: './support/support.module#SupportPageModule'
                        }
                    ]
                },
                {
                    path: '',
                    redirectTo:'/bdfhome/tabs/home',
                    pathMatch: 'full'     
                }
            ]
        },
        {
            path: '',
            redirectTo: '/bdfhome/tabs/home',
            pathMatch: 'full'
        }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BDFRoutingModule {}
