import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-escritores',
  templateUrl: './escritores.component.html',
  styleUrls: ['./escritores.component.css']
})
export class EscritoresComponent implements OnInit {

  arrEsc:Escritor[];
  arrPai:string[];
  constructor(private escritoresServide:EscritoresService, private router: Router) { }

  async ngOnInit() {

    try{
      this.arrEsc = await this.escritoresServide.listEscritores();
      this.arrPai = await this.escritoresServide.paisesEscritor();

    }catch(Error){
      console.log(Error);
    }
    
  }

  async filtraPorPais($event){
    this.arrEsc = await this.escritoresServide.filtraPorPais($event.target.value);
  }

  verEscritor($event){
    
  }





}
