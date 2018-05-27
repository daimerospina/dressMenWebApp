import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from './enterprise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Distribuidora DAOS';
  
  public enterprise:Enterprise  = new Enterprise;

  constructor(private router:Router) { 
    let enterprise:Enterprise  = new Enterprise;
    enterprise.name = "Daos";
    enterprise.image = '../../assets/images/distribuidora-daos-logo-1454518252.jpg';
    enterprise.description = "Empresa dedicada a la comercialización de productos textileros del seda ibérica, a través de Internet, con la posibilidad de ir ampliando progresivamente la gama de productos de vestuario disponibles, siguiendo siempre la más estricta línea de calidad de nuestros productos (Camisas, pantalones, chachetas, corbatas, etc). Nos destacamos en el mercado por la gran calidad de nuestros productos y el buen servio hacia el cliente.";
    enterprise.contact = {
      phone:"263 32 75",
      cel_phone:"311 605 9483",
      adress:"Calle 65 # 45 - 27"
    }
    this.enterprise = enterprise;
  }

  ngOnInit() {
  }

}
