import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ProvidersService } from '../../core/services/providers.service';
import { MatDialog } from '@angular/material/dialog';
import { ProvidersForm } from './modals/providers-form/providers-form';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-providers',
  imports: [AgGridAngular],
  templateUrl: './providers.html',
  styleUrl: './providers.scss',
})
export class Providers implements OnInit {
  columnDefs = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nome', headerName: 'Nome' },
    { field: 'cnpj', headerName: 'CNPJ' },
    { field: 'cep', headerName: 'CEP' },
    { field: 'estado', headerName: 'Estado' },
    { field: 'bairro', headerName: 'Bairro' },
    { field: 'rua', headerName: 'Rua' },
    { field: 'complemento', headerName: 'Complemento' },
    {
      headerName: 'Ações',
      cellRenderer: (params: any) => {
        return `
          <button class="btn-edit">Editar</button>
          <button class="btn-delete">Excluir</button>
        `;
      }
     }
  ];

  rowData: any[] = [];

  constructor(
    private providersService: ProvidersService,
    private dialog: MatDialog,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.providersService.getAllProviders().subscribe((data: any) => {
      this.rowData = data;
    });
  }

  openForm(provider?: any) {
    const dialogRef = this.dialog.open(ProvidersForm, {
      width: '600px',
      data: provider || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      if (result.action === 'create') {
        this.providersService.save(result.payload).subscribe({
            next: () => {
              this.notify.show({
                icon: 'fa-check-circle',
                type: 'success',
                title: 'Fornecedor',
                message: 'Dados salvos com sucesso'
              });
            },
            error: (err) => {
              this.notify.show({
                icon: 'fa-warning',
                type: 'error',
                title: 'Fornecedor',
                message: `Falha ao salvar dados: \n ${err.message}`
              });
            },
        });
      }
    });
  }

  openEdit(provider: any) {
    this.dialog.open(ProvidersForm, {
      width: '600px',
      data: provider
    });
  }

}
