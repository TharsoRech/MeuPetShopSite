import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CadastrosComponent } from './Cadastros/Cadastros.component';
import { ConfiguracoesComponent } from './Configuracoes/Configuracoes.component';
import { EventosComponent } from './Eventos/Eventos.component';
import { DashBoardComponent } from './DashBoard/DashBoard.component';
import { ContatoComponent } from './Contato/Contato.component';
import { PoliticaComponent } from './Politica/Politica.component';
import { LoginComponent } from './Login/Login.component';
import { RegistrarComponent } from './Registrar/Registrar.component';
import { GeralComponent } from './Geral/Geral.component';
import { SuporteComponent } from './Suporte/Suporte.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { AnimalService } from './Animais/Animais.service';
import { ClienteService } from './Clientes/Clientes.service';
import { EventoService } from './Eventos/Evento.service';
import { AtendenteService } from './Atendentes/Atendentes.service';
import { EnderecoService } from './Enderecos/Enderecos.service';
import { TipoService } from './Tipos/Tipos.service';
import { RacaService } from './Racas/Racas.service';
import { AdicionarModalComponent } from './AdicionarModal/AdicionarModal.component';
import { EditarModalComponent } from './EditarModal/EditarModal.component';
import { AnimaisForm } from './Formularios/Animais/AnimaisForm.component';
import { AtendentesForm } from './Formularios/Atendentes/AtendentesForm.component';
import { ClientesForm } from './Formularios/Clientes/ClientesForm.component';
import { EnderecosForm } from './Formularios/Enderecos/EnderecosForm.component';
import { EventosForm } from './Formularios/Eventos/EventosForm.component';
import { TiposForm } from './Formularios/Tipos/TiposForm.component';
import { RacasForm } from './Formularios/Racas/RacasForm.component';
import { MyDatePickerModule } from 'mydatepicker';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CadastrosComponent,
    ConfiguracoesComponent,
    EventosComponent,
    DashBoardComponent,
    ContatoComponent,
    PoliticaComponent,
    LoginComponent,
    RegistrarComponent,
    NotFoundComponent,
    SuporteComponent,
    GeralComponent,
    AdicionarModalComponent,
    EditarModalComponent,
    AnimaisForm,
    AtendentesForm,
    ClientesForm,
    EnderecosForm,
    EventosForm,
    TiposForm,
    RacasForm,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Cadastros', component: CadastrosComponent },
      { path: 'Configuracoes', component: ConfiguracoesComponent },
      { path: 'Eventos', component: EventosComponent },
      { path: 'DashBoard', component: DashBoardComponent },
      { path: 'Contato', component: ContatoComponent },
      { path: 'Politica', component: PoliticaComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Registrar', component: RegistrarComponent },
      { path: 'Geral', component: GeralComponent },
      { path: 'Suporte', component: SuporteComponent},
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '/404' }
    ], { useHash: true })
  ],
  providers: [AnimalService, ClienteService, EventoService, AtendenteService, EnderecoService, TipoService, RacaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
