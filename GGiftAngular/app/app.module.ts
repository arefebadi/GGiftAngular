import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { HampersComponent } from './hamper/hamper.component'
import { CategoryComponent } from './category/category.component'

import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule, routing, FormsModule, HttpModule],
    declarations: [AppComponent, HampersComponent, CategoryComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}