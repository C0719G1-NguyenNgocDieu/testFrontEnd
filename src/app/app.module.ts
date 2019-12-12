import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RichTextEditorAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
