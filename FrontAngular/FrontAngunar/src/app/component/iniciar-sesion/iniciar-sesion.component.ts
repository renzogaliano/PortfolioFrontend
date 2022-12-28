import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private FormBuilder:FormBuilder, private autentificacionService:AutenticacionService, private ruta:Router) {
  this.form=this.FormBuilder.group(
    {
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      deviceInfo:this.FormBuilder.group(
        { deviceId:["17867868768"],
          deviceType:["DEVICE_TYPE_ANDROID"],
          notificationToken:["6765757Seececc34"]}
      )

    }
  )
}
  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  onEnviar(event:Event)
  {
    event.preventDefault;
    this,this.autentificacionService.IniciaSesion(this.form.value).subscribe(data=>{
      console.log("DATA." + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }

}
