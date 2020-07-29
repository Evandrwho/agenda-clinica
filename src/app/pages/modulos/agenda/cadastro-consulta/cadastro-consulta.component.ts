import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BsLocaleService} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-cadastro-consulta',
  templateUrl: './cadastro-consulta.component.html',
  styleUrls: ['./cadastro-consulta.component.css']
})
export class CadastroConsultaComponent implements OnInit {

  formAgendaCosulta: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private localeService: BsLocaleService) {
    this.localeService.use('pt-br');
    this.formAgendaCosulta = this.formBuilder.group({
      nome: [null],
      sobrenome: [null],
      telefone: [null],
      dataConsulta: [null],
      comentario: [null]
    });
  }
  ngOnInit(): void {
  }

}
