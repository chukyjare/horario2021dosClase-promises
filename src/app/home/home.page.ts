import { DatosService } from './../datos.service';
import { CopiaService } from './../copia.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(private copiaService:CopiaService, private datosService:DatosService) {}
  ngOnInit(): void {
    
  }
  copia(){
    this.copiaService.copiarBBDD();
  }
  abrir(){
    this.datosService.openDB();
  }
  getHoras(){
    this.datosService.getHoras();
  }
}
