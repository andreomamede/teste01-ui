import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVeiculoComponent } from './create-veiculo/create-veiculo.component';
import { VeiculoDetailsComponent } from './veiculo-details/veiculo-details.component';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateVeiculoComponent } from './update-veiculo/update-veiculo.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateVeiculoComponent,
    VeiculoDetailsComponent,
    VeiculoListComponent,
    UpdateVeiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
