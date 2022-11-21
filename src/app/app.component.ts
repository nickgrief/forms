import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators, } from '@angular/forms';

// Импорты для создания реактивных форм без FormBuilder-а

// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // Реактивные формы через FormBuilder
  // Ссылка на документацию: https://angular.io/guide/reactive-forms

  form = this.fb.group({
    city: [''],
    street: [''],
    house: [''],
    phoneNumbers: this.fb.array([]),
  });

  // Формы без использования FormBuilder

  // form = new FormGroup({
  //   city: new FormControl(''),
  //   street: new FormControl(''),
  //   house: new FormControl(''),
  //   phoneNumbers: new FormArray([])
  // })

  get phoneNumbers(): FormArray {
    return this.form.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      this.fb.control('', [Validators.required, Validators.minLength(10)])
    );
  }

  onSubmit() {
    console.log(this.form.value);
  }
  constructor(private fb: FormBuilder) { }
}
