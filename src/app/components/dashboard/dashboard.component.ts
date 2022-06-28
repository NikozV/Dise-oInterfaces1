import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nombre: string;
  materia: string;
  imagen: string;
  texto: string;
  textEvent: string;

  constructor() { 
    this.nombre="Nicolás"
    this.materia=""
    this.imagen="https://res.cloudinary.com/practicaldev/image/fetch/s--DYfpZirq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/990/1%2AOc2PsJ-QKOUG2I8J3HNmWQ.png"
    this.texto="Binding"
    this.textEvent="Probando Eveny Binding"
  }

  ngOnInit(): void {
  }

  getMateria(): string{
    return this.materia = "Diseño de Interfaces"
  }
  cambiarTexto(): void{
    this.textEvent = " Cambiamos el titulo con event binding "
  }

}
