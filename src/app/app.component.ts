import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = this.fb.group({
    city: [''],
    street: [''],
    house: [''],
    phoneNumbers: this.fb.array([]),
  });

  get phoneNumbers() {
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
  constructor(private fb: FormBuilder) {}
}
