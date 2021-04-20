import { Component } from '@angular/core';
import { Escritor } from './models/escritor.model';
import { EscritoresService } from './services/escritores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaEscritores';

  arrayEscritores:Escritor[];
  constructor(private escritoresService:EscritoresService){

  }

  async ngOnInit() {
    
    try{
      this.arrayEscritores = await this.escritoresService.listEscritores();

    }catch(error){
      console.log(error);
    }
  }


  
}
