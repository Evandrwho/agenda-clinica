import {AfterContentChecked, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BsLocaleService} from 'ngx-bootstrap/datepicker';
import {DateUtilComponent} from '../../shared/date-util/date-util.component';
import {Evento} from "../model/evento";

@Component({
  selector: 'app-cadastro-consulta',
  templateUrl: './cadastro-consulta.component.html',
  styleUrls: ['./cadastro-consulta.component.css']
})
export class CadastroConsultaComponent implements OnInit, AfterContentChecked {

  @Output() eventoCriado: EventEmitter<any>;
  @Input() dataConsulta: Date;
  evento: Evento;
  formAgendaCosulta: FormGroup;
  horaConsulta: string;
  duracao: any;

  constructor(private formBuilder: FormBuilder,
              private localeService: BsLocaleService) {
    this.duracao = 0;
    this.localeService.use('pt-br');
    this.formAgendaCosulta = this.formBuilder.group({
      nome: [null],
      sobrenome: [null],
      telefone: [null],
      dataConsulta: [null],
      dataTerminoConsulta: [null],
      comentario: [null]
    });
  }

  ngOnInit(): void {
    this.horaConsulta = DateUtilComponent.getHoraFormatada(this.dataConsulta);
  }

  ngAfterContentChecked(): void {
    this.horaConsulta = DateUtilComponent.getHoraFormatada(this.dataConsulta);
  }

  writeTime(time: any): void {

    const data = DateUtilComponent.formatDateYYYmmDD(this.dataConsulta) + 'T' + time + ':00-0400';
    this.dataConsulta = new Date(data);
  }

  criarEvento(): void{
    this.evento.content = this.formAgendaCosulta.value.nome;
    this.evento.title = 'Tratamento de aAAAA';
    this.evento.start = this.dataConsulta;
    this.evento.end = DateUtilComponent.adicionaHora(this.dataConsulta, 3, 30);
    console.log(this.evento);

  }


}
