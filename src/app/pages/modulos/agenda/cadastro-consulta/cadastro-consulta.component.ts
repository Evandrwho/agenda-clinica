import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BsLocaleService} from 'ngx-bootstrap/datepicker';
import {DateUtilComponent} from "../../shared/date-util/date-util.component";

@Component({
  selector: 'app-cadastro-consulta',
  templateUrl: './cadastro-consulta.component.html',
  styleUrls: ['./cadastro-consulta.component.css']
})
export class CadastroConsultaComponent implements OnInit {

  @Input() dataConsulta: Date;

  formAgendaCosulta: FormGroup;
  horaConsulta: string;

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
    this.dataConsulta = new Date();
    //this.horaConsulta = this.dataConsulta.getHours();
    this.formAgendaCosulta.patchValue({dataConsulta: this.dataConsulta});
  }

  writeTime(time: any): void {

    console.log(this.dataConsulta.getHours());
    const data = DateUtilComponent.formatDateYYYmmDD(this.dataConsulta) + 'T' + time + ':00-0400';
    this.dataConsulta = new Date(data);
  }
}
