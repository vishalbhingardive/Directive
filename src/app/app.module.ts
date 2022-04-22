import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightColorDirective } from './highlight-color.directive';
import { NGFormsComponent } from './ngforms/ngforms.component';
import { FormGroupComponent } from './form-group/form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightColorDirective,
    NGFormsComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
