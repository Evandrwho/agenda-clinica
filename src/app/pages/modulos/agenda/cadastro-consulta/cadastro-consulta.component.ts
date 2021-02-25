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

  @Output() eventoCriado: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelado: EventEmitter<any> = new EventEmitter<any>();
  @Input() dataConsulta: Date;
  evento: Evento;
  formAgendaCosulta: FormGroup;
  horaConsulta: string;
  duracao: string;

  constructor(private formBuilder: FormBuilder,
              private localeService: BsLocaleService) {
    this.localeService.use('pt-br');
    this.formAgendaCosulta = this.formBuilder.group({
      procedimento: [null],
      nome: [null],
      sobrenome: [null],
      telefone: [null],
      dataConsulta: [null],
      dataTerminoConsulta: [null],
      comentario: [null]
    });
  }

  ngOnInit(): void {
    this.evento = new Evento();
    this.duracao = "00:00"
    this.horaConsulta = DateUtilComponent.getHoraFormatada(this.dataConsulta);
  }

  ngAfterContentChecked(): void {
      this.horaConsulta = DateUtilComponent.getHoraFormatada(this.dataConsulta);
      this.formAgendaCosulta.patchValue({dataConsulta: this.dataConsulta});
  }

  writeTime(time: string): void {
    const horario = time.split(':');
    const data = DateUtilComponent.formatDateYYYmmDD(this.dataConsulta) + 'T' + time + ':00-0400';
    /*const data = DateUtilComponent.adicionaHora(
      new Date(this.dataConsulta.toString()), parseInt(horario[0]), parseInt(horario[1]));*/
    this.dataConsulta = new Date(data);
  }

  criarEvento(): void {
    this.evento.content = this.formAgendaCosulta.value.nome;
    this.evento.title = this.formAgendaCosulta.value.procedimento;
    this.evento.start = this.dataConsulta;
    this.evento.end = this.formAgendaCosulta.value.dataTerminoConsulta;
    this.evento.color = {primary: '#4682B4', secondary : '#b4465c'};
    this.evento.isClickable = true;
    this.evento.isDisabled = false;
    console.log(this.evento);
    this.eventoCriado.emit(this.evento);
    this.clear();
  }

  typeof(value: string) {
    return typeof value;
  }

  add30min(horas: string): void {
    if (this.formAgendaCosulta.value.dataTerminoConsulta == null) {
      this.formAgendaCosulta.patchValue({dataTerminoConsulta: this.dataConsulta});
    }
    const data = DateUtilComponent.adicionaHora(
      new Date(this.formAgendaCosulta.value.dataTerminoConsulta), 0, 30);
    this.formAgendaCosulta.patchValue({dataTerminoConsulta: data});
    const horario = horas.split(':');
    if (parseInt(horario[1]) + 30 == 60) {
      this.duracao = parseInt(horario[0]) > 9 ? (parseInt(horario[0]) + 1) + ':00' : '0' + (parseInt(horario[0]) + 1) + ':00';
    } else {
      this.duracao = horario[0] + ':30'
    }
    //parseInt(horario[1]) + 30 == 60 ? this.duracao = '0' + (parseInt(horario[0]) + 1) + ':00':this.duracao =  horario[0] + ':30';
    //this.duracao = DateUtilComponent.getHoraFormatada(this.formAgendaCosulta.value.dataTerminoConsulta);
  }

  remove30min(horas: string): void {
    if (this.formAgendaCosulta.value.dataTerminoConsulta == null) {
      this.formAgendaCosulta.patchValue({dataTerminoConsulta: this.dataConsulta});
    }
    const horario = horas.split(':');
    if (this.formAgendaCosulta.value.dataTerminoConsulta > this.dataConsulta) {
      const data = DateUtilComponent.subtraiHora(
        new Date(this.formAgendaCosulta.value.dataTerminoConsulta), 0, 30);
      this.formAgendaCosulta.patchValue({dataTerminoConsulta: data});
      if (parseInt(horario[1]) - 30 == 0) {
        this.duracao = horario[0] + ':00'
      } else if(parseInt(horario[0]) > 0) {
        this.duracao = parseInt(horario[0]) - 1  > 9  ? (parseInt(horario[0]) - 1) + ':30' : '0' + (parseInt(horario[0]) - 1) + ':30';
      }
    }
  }

  private clear() {
    this.duracao = "00:00"
    this.formAgendaCosulta.patchValue({
      nome: null,
      sobrenome: null,
      telefone:null,
      dataConsulta: null,
      dataTerminoConsulta: null,
      comentario: null
    });
    this.evento = new Evento();
  }

  cancelar() {
    this.clear();
    this.cancelado.emit();
  }
}
