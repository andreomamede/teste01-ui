import { VeiculoDetailsComponent } from './veiculo-details/veiculo-details.component';
import { CreateVeiculoComponent } from './create-veiculo/create-veiculo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { UpdateVeiculoComponent } from './update-veiculo/update-veiculo.component';

const routes: Routes = [
  { path: '', redirectTo: 'veiculo', pathMatch: 'full' },
  { path: 'veiculos', component: VeiculoListComponent },
  { path: 'add', component: CreateVeiculoComponent },
  { path: 'update/:id', component: UpdateVeiculoComponent },
  { path: 'details/:id', component: VeiculoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
