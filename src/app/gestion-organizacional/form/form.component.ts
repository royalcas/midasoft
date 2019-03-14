import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  generalForm = this.fb.group({
    optionalField: [''],
    initialValue: ['Initial Value'],
    requiredField: ['', Validators.required],
    emailField: ['Invalid Email', Validators.email],
    patternField: [
      '',
      Validators.pattern('\\(?([0-9]{3})\\)?([ -]?)([0-9]{3})\\2([0-9]{4})')
    ],
    rangeField: [
      '',
      Validators.compose([Validators.min(0), Validators.max(100)])
    ],
    direccion: this.fb.group({
      calle: ['', Validators.pattern('[a-zA-Z]*')],
      numero: ['', Validators.pattern('[0-9]n-[0-9]n')],
      ciudad: ['', Validators.pattern('[a-zA-Z]*')],
      departamento: ['', Validators.pattern('[a-zA-Z]*')]
    }),
    skills: this.fb.array([
      this.fb.group({
        name: ['', Validators.required],
        value: ['', Validators.required]
      }),
      this.fb.group({
        name: ['', Validators.required],
        value: ['', Validators.required]
      })
    ])
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  save() {
    console.log('saved');
  }
}
