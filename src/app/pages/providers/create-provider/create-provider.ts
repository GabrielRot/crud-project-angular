import { Component, QueryList, ViewChildren } from '@angular/core';
import { Technocard } from "../../../components/cards/technocard/technocard";
import { TechnoInput } from "../../../components/inputs/techno-input/techno-input";
import { TechnoButton } from "../../../components/buttons/techno-button/techno-button";
import { CepService } from '../../../core/services/cep.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ProvidersService } from '../../../core/services/providers.service';

@Component({
  selector: 'app-create-provider',
  imports: [Technocard, TechnoInput, TechnoButton],
  templateUrl: './create-provider.html',
  styleUrl: './create-provider.scss',
})
export class CreateProvider {

  @ViewChildren(TechnoInput) inputs!: QueryList<TechnoInput>;

  constructor(
    private providersService: ProvidersService,
    private cepService: CepService,
    private notify: NotificationService
  ) {}

  searchProvider() {
    const id: number = Number(this.inputs.toArray()[0].getInputValue());

    if (id) {
      this.providersService.getProviderById(id).subscribe({
        next: (res) => {
          this.inputs.toArray()[1].setInputValue(res.nome        || '');
          this.inputs.toArray()[2].setInputValue(res.cnpj        || '');
          this.inputs.toArray()[3].setInputValue(res.cep         || '');
          this.inputs.toArray()[4].setInputValue(res.estado      || '');
          this.inputs.toArray()[5].setInputValue(res.bairro      || '');
          this.inputs.toArray()[6].setInputValue(res.rua         || '');
          this.inputs.toArray()[7].setInputValue(res.complemento || '');
        },
        error: (error) => {
        console.error(error);

        this.notify.show({
          icon: 'fa-warning',
          type: 'error',
          title: 'Falha ao consultar dados',
          message: 'Dados não encontrados'
        });
        }
      })
    }
  }

  saveProvider() {
    let hasValidInput: boolean = true;

    for(const input of this.inputs) {
      if (!input.validateField()) hasValidInput = false;
    }

    if (!hasValidInput) return;

    const values = this.inputs.toArray().map((input) => input.getInputValue().toString());

    let id:            number = Number(values[0]);
    const nome:        string = values[1] || '';
    const cnpj:        string = values[2] || '';
    const cep:         string = values[3] || '';
    const estado:      string = values[4] || '';
    const bairro:      string = values[5] || '';
    const rua:         string = values[6] || '';
    const complemento: string = values[7] || '';

    let jsonData: {
      "id"?: number,
      "nome": string,
      "cnpj": string,
      "cep": string,
      "estado": string,
      "bairro": string,
      "rua": string,
      "complemento": string
    };

    jsonData = {
      "id": id,
      "nome": nome,
      "cnpj": cnpj,
      "cep": cep,
      "estado": estado,
      "bairro": bairro,
      "rua": rua,
      "complemento": complemento
    };

    this.providersService.save(jsonData).subscribe({
      next: (res) => {
        this.notify.show({
          icon: 'fa-check-circle',
          type: 'success',
          title: 'Sucesso',
          message: 'Dados salvos com sucesso'
        });

        this.inputs.forEach((input) => {
          input.setInputValue('');
        });
      },
      error: (error) => {
        console.error(error);

        this.notify.show({
          icon: 'fa-warning',
          type: 'error',
          title: 'Falha ao salvar dados',
          message: 'Ocorreu um erro inesperado ao salvar dados'
        });
      }
    });
  }

  searchCep() {
    const values = this.inputs.toArray().map((input) => input.getInputValue().toString());

    const cep: string = values[3] as string;

    if (cep) {
      this.cepService.getCepInfos(cep).subscribe({
        next: (res) => {
          if (!res.erro) {
            this.inputs.toArray()[4].setInputValue(res.uf);
            this.inputs.toArray()[5].setInputValue(res.bairro);
            this.inputs.toArray()[6].setInputValue(res.logradouro);
            this.inputs.toArray()[7].setInputValue(res.complemento);
          } else {
            this.notify.show({
              icon: 'fa-warning',
              type: 'error',
              title: 'Falha ao consultar CEP',
              message: 'CEP não encontrado'
            });
          }
        },
        error: (error) => {
          console.error(error);

          this.notify.show({
            icon: 'fa-warning',
            type: 'error',
            title: 'Falha ao consultar CEP',
            message: 'Ocorreu um erro inesperado ao consultar CEP'
          });
        }
      });
    }
  }

  deleteProvider(): void {
    const idInput = this.inputs.toArray()[0]

    if (!idInput.getInputValue()) return;

    const id: number = Number(idInput.getInputValue());

    this.providersService.delete(id).subscribe({
      next: (res) => {
        this.notify.show({
          icon: 'fa-check-circle',
          type: 'success',
          title: 'Sucesso',
          message: 'Registro excluído com sucesso'
        });

        this.inputs.forEach((input) => {
          input.setInputValue('');
        });
      },
      error: (error) => {
           console.error(error);

          this.notify.show({
            icon: 'fa-warning',
            type: 'error',
            title: 'Falha ao deletar registro',
            message: 'Ocorreu um erro inesperado ao deletar registro'
          });
      }
    });
  }

}
