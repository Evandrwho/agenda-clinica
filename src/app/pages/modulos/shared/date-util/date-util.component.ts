import {Component} from '@angular/core';
import * as moment from 'moment';
import {Timestamp} from "rxjs";

@Component({
  selector: 'app-date-util',
  templateUrl: './date-util.component.html',
  styleUrls: ['./date-util.component.css']
})
export class DateUtilComponent {

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

  static setarDataInicialCalendario(exercioSelecionado: string): Date {
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

  /*retorna uma data equivalente ao dia 01 do próximo mês*/
  static getDataProximoMes(): Date {
    const numeroDoMesSeguinte = (new Date().getMonth() + 1) % 12 + 1;
    const data = new Date();
    data.setMonth(numeroDoMesSeguinte - 1);
    data.setDate(1);
    data.setHours(0, 0, 0);
    return data;
  }

  static convertToJavaDate(d: Date): string {
    return d.getFullYear() + '-' + (d.getUTCMonth() + 1) + '-' + d.getDate() + 'T00:00:00-0400';
  }

  static checaSeDataPosterior(mes: string, ano: string): boolean {
    const hoje = new Date();
    const data = new Date();
    data.setMonth(parseInt(mes, 10) - 1);
    data.setFullYear(parseInt(ano, 10));
    data.setDate(1);

    return data < hoje ? true : false;
  }

  static getTotalDiasDoMes(data: Date): number {
    return new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();
  }

  static getHoraFormatada(dataConsulta: Date): string {
    let horaFormatada: string;
    if (dataConsulta !== undefined) {
      const hora = dataConsulta.getHours() < 10 ? '0' + dataConsulta.getHours() : dataConsulta.getHours();
      const minuto = dataConsulta.getMinutes() < 10 ? '0' + dataConsulta.getMinutes() : dataConsulta.getMinutes();
      horaFormatada = hora + ':' + minuto;
    }
    return horaFormatada;
  }

  static adicionaHora(dataConsulta: Date, qtdHora: number, qdtMinutos: number): Date {
    console.log(dataConsulta);
    const horaRetorno = new Date(dataConsulta.getTime() + this.toTimestamp(qtdHora, qdtMinutos));
    console.log(horaRetorno);
    return horaRetorno;
  }
  static subtraiHora(dataConsulta: Date, qtdHora: number, qdtMinutos: number): Date {
    console.log(dataConsulta);
    const horaRetorno = new Date(dataConsulta.getTime() - this.toTimestamp(qtdHora, qdtMinutos));
    console.log(horaRetorno);
    return horaRetorno;
  }



  private static toTimestamp(hora: number, minuto: number): number {
    const dt = (hora*60 + minuto)*60*1000;
    /*
    dt.setHours(hora);
    dt.setMinutes(minuto);
    dt.setSeconds(0);*/
    return dt;
  }
}
