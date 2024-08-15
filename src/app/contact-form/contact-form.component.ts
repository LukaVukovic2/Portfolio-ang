import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nameValue: [''],
      emailValue: [''],
      content: ['']
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if(this.contactForm.invalid) {
      return;
    }

    const form = event.target as HTMLFormElement;
    form['name'].valueOf = this.contactForm.get('nameValue')?.value || '';
    form['email'].value = this.contactForm.get('emailValue')?.value || '';
    form['content'].value = this.contactForm.get('content')?.value || '';
    form.submit();
    this.contactForm.reset();
  }
}
