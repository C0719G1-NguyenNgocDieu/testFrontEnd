import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {RichtextService} from './richtext.service';
import {IBlog} from './iblog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;
  value: string = '';

  public insertImageSettings = {
    saveUrl: `http://localhost:8080/upload`,
    path: `http://localhost:8080/downloadFile/`
  };

  ngOnInit() {
  }
//em goi service ra la chay ko duoc
  constructor(private richtextService: RichtextService,
              private formBuilder: FormBuilder) {
  }

  onSubmit(form: NgForm) {
  }
}
