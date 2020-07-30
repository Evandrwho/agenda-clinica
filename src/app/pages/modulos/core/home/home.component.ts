import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BsLocaleService} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private calendarEl: HTMLElement;
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
    this.calendarEl = document.getElementById('calendar');
  }


}
