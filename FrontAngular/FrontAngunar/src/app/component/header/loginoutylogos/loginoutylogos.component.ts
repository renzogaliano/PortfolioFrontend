import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-loginoutylogos',
  templateUrl: './loginoutylogos.component.html',
  styleUrls: ['./loginoutylogos.component.css']
})
export class LoginoutylogosComponent implements OnInit {
  mislogos:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
     this.mislogos=data;

    });
  }

}
