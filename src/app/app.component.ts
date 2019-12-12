import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {RichtextService} from './richtext.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public insertImageSettings = {
    saveUrl : `http://localhost:8080/upload`,
    path: `http://localhost:8080/downloadFile/`
  };
  onSubmit(form: NgForm): void {
    alert(form.value.name);
  }
}
