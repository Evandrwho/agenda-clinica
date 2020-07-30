import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-eventos-dia',
  templateUrl: './lista-eventos-dia.component.html',
  styleUrls: ['./lista-eventos-dia.component.css']
})


export class ListaEventosDiaComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    {position: '07:00', name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: '08:00', name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: '09:00', name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: '10:00', name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: '11:00', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: '12:00', name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: '13:00', name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: '14:00', name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: '15:00', name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: '16:00', name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: '17:00', name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: '18:00', name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: '19:00', name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: '20:00', name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: '21:00', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: '22:00', name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: '23:00', name: 'Lithium', weight: 6.941, symbol: 'Li'}
  ];

  cars = [
    {'brand': '10:40', 'year': 'Francisca Mendonça', 'color': 'aaaaaaaaaa', 'vin': '29/07/2020'},
    {'brand': '10:40', 'year': 'Francisca Mendonça', 'color': 'aaaaaaaaaa', 'vin': '29/07/2020'},
    {'brand': '10:40', 'year': 'Francisca Mendonça', 'color': 'aaaaaaaaaa', 'vin': '29/07/2020'},
    {'brand': '10:40', 'year': 'Francisca Mendonça', 'color': 'aaaaaaaaaa', 'vin': '29/07/2020'},
    {'brand': '10:40', 'year': 'Francisca Mendonça', 'color': 'aaaaaaaaaa', 'vin': '29/07/2020'},
    {'brand': '10:40', 'year': 'Francisca Mendonça', 'color': 'aaaaaaaaaa', 'vin': '29/07/2020'},
    {'brand': '10:40', 'year': 'Francisca Mendonça', 'color': 'aaaaaaaaaa', 'vin': '29/07/2020'},
    {'brand': '10:40', 'year': 'Francisca Mendonça', 'color': 'aaaaaaaaaa', 'vin': '29/07/2020'},
    {'brand': '10:40', 'year': 'Francisca Mendonça', 'color': 'aaaaaaaaaa', 'vin': '29/07/2020'},
    {'brand': '10:40', 'year': 'Francisca Mendonça', 'color': 'aaaaaaaaaa', 'vin': '29/07/2020'}
  ];

  cols: any[];
  // tslint:disable-next-line:typedef
  resultsLength = 0;

  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.cols = [
      {field: 'brand', header: 'Hora'},
      {field: 'year', header: 'Nome'},
      {field: 'color', header: 'Comentario'},
      {field: 'vin', header: 'Data'}
    ];
  }


  // tslint:disable-next-line:typedef
  loadCarsLazy($event: any) {

  }
}
