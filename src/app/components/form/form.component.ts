import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required], // Campo nome obrigatório
      email: ['', [Validators.required, Validators.email]] // Campo e-mail obrigatório e com validação de formato
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value); // Processa os dados do formulário
    } else {
      console.log('Formulário inválido!');
    }
  }
}

