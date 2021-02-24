import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-util',
  templateUrl: './date-util.component.html',
  styleUrls: ['./date-util.component.css']
})
export class DateUtilComponent{

  static adicionarDias(qtdDias: number, data: Date): Date {

    if (null === data) {
      return;
    }
    const d = moment([data.getFullYear(), data.getMonth(), data.getDate()]);
    d.add(qtdDias - 1, 'day');
    return d.toDate();
  }

  static formatDateYYYmmDD(data: Date): any {
    let mes;
    if (data.getMonth() < 9) {
      mes = '0' + (data.getMonth() + 1);
    } else {
      mes = data.getMonth() + 1;
    }

    let dia;
    if (data.getDate() < 10) {
      dia = '0' + data.getDate();
    } else {
      dia = data.getDate();
    }
    return data.getFullYear() + '-' + mes + '-' + dia;
  }

  static contaDias(dataInicial: Date, dataFinal: Date): any {
    const data = Math.abs(dataFinal.getTime() - dataInicial.getTime());
    return Math.ceil(data / (1000 * 3600 * 24)) + 1 > 9 ?
      Math.ceil(data / (1000 * 3600 * 24)) + 1 : '0' + (Math.ceil(data / (1000 * 3600 * 24)) + 1);
  }

  static formatStringDatetoYYYYmmDD(inicio: string): string {
    return inicio.replace('T00:00:00-0400', '');
  }

  static setarDataInicialCalendario(exercioSelecionado: string) {
    const today = new Date();
    const tomorrow = new Date(today);
    if (today.getFullYear() < parseInt(exercioSelecionado, 10)) {
      today.setFullYear(today.getFullYear() + 1, 0, 1);
      today.setHours(0, 0, 0);
      return today;
    } else {
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    }
  }

  //retorna uma data equivalente ao dia 01 do próximo mês
  static getDataProximoMes() {
    const numeroDoMesSeguinte = (new Date().getMonth() + 1 ) % 12 + 1;
    const data = new Date();
    data.setMonth(numeroDoMesSeguinte - 1);
    data.setDate(1);
    data.setHours(0, 0, 0);
    return data;
  }

  static convertToJavaDate(d: Date) {
    return d.getFullYear() + '-' + (d.getUTCMonth() + 1) + '-' + d.getDate() + 'T00:00:00-0400';
  }

  static checaSeDataPosterior(mes: string, ano: string) {
    const hoje = new Date();
    const data = new Date();
    data.setMonth(parseInt(mes, 10) - 1);
    data.setFullYear(parseInt(ano, 10));
    data.setDate(1);

    if (data < hoje) {
      return true;
    } else {
      return false;
    }
  }

  static getTotalDiasDoMes(data: Date) {
    const totalDias = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();
    return totalDias;
  }

}
