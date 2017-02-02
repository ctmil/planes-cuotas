import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculo de valor de cuotas';
  contado: any;
  tasa_interes: any;
  cuotas: any;
  tasa_arancel: any;
  monto_total: any;
  monto_cuota: any;

  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    this.contado = 0;
    this.tasa_interes = 0;
    this.cuotas = 0;
    this.tasa_arancel = 0;
    this.monto_total = 0;
    this.monto_cuota = 0;
  }
  calculateAmounts() {
    // this.monto_total = this.contado + this.contado * this.tasa_interes + this.contado * this.tasa_arancel ;
    this.monto_total = Number(this.contado) * Number(this.tasa_interes) + Number(this.contado);
    this.monto_cuota = this.monto_total / this.cuotas;
  }
   
}
