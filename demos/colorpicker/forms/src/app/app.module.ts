import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from '@smart-webcomponents-angular/colorpicker';
import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';
import { InputModule } from '@smart-webcomponents-angular/input';
import { ButtonModule } from '@smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, InputModule, ButtonModule, DropDownListModule, ColorPickerModule],
    bootstrap: [AppComponent]
})

export class AppModule { }
