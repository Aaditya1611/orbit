import { RouterModule, Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

export const routes: Routes = [
];

@NgModule({
    declarations: [], 
    imports: [
        BrowserModule,
        Navbar, 
        RouterModule.forRoot(routes)
    ],
    providers: []
})
export class AppRoutingModule { }