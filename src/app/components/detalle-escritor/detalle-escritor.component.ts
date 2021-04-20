import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.css']
})
export class DetalleEscritorComponent implements OnInit {

  escritor:Escritor;
  constructor(private activaRoute:ActivatedRoute, private escritoresServide:EscritoresService) { 
  
  }

   ngOnInit(){
    this.activaRoute.params.subscribe(async param=>{
    
        this.escritor = await this.escritoresServide.getId(parseInt(param.escritorId));
    })
  }

}
