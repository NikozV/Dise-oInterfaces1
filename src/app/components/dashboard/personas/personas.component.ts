import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  @Input() textoHijo: string;
  @Output() nuevoEvento = new EventEmitter<string>()

  constructor() { 
    this.textoHijo=""
  }

  ngOnInit(): void {
  }

  cTextoPadre(valor:string):void{
    this.nuevoEvento.emit(valor)
  }

}
