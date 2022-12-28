import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './component/acerca/acerca.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { SkillComponent } from './component/skill/skill.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginoutylogosComponent } from './component/header/loginoutylogos/loginoutylogos.component';
import { EmailComponent } from './component/header/email/email.component';
import { PerfilComponent } from './component/header/perfil/perfil.component';
import {HttpClientModule} from '@angular/common/http';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectosComponent,
    HeaderComponent,
    LoginoutylogosComponent,
    EmailComponent,
    PerfilComponent,
    IniciarSesionComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
