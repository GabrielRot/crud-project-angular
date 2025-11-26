import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProvidersService } from '../../../../core/services/providers.service';

@Component({
  selector: 'app-providers-form',
  imports: [
            MatDialogContent,
            ReactiveFormsModule, 
            MatDialogActions,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatDialogModule 
          ],
  templateUrl: './providers-form.html',
  styleUrl: './providers-form.scss',
})
export class ProvidersForm implements OnInit {
  form: any;

  constructor(
    private fb: FormBuilder, 
    private dialog: MatDialogRef<ProvidersForm>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome:        [this.data?.nome        || '', Validators.required],
      cnpj:        [this.data?.cnpj        || '', Validators.required],
      cep:         [this.data?.cep         || '', Validators.required],
      estado:      [this.data?.estado      || '', Validators.required],
      bairro:      [this.data?.bairro      || '', Validators.required],
      rua:         [this.data?.rua         || '', Validators.required],
      complemento: [this.data?.complemento || '']
    });
  }

  close() {
    this.dialog.close();
  }

  save() {
    if (this.form.invalid) return;

    const payload = this.form.value;

    if (this.data && this.data.id) {
      this.dialog.close({
        action: 'update',
        id: this.data.id,
        payload
      });
    }
    else {
      this.dialog.close({
        action: 'create',
        payload
      })
    }

    this.dialog.close(this.form.value);
  }

}
