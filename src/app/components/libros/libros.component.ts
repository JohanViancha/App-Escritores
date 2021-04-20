import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {


  arrayLibro:Libro[];
  constructor(private activaRoute: ActivatedRoute, private libroServices: LibrosService) { }


  ngOnInit(): void {

    this.activaRoute.parent.params.subscribe(async params=>{
       this.arrayLibro = await this.libroServices.getLibrosEscritor(params.escritorId);
    })

  }

}
