import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { AuditoriaComponent } from './components/auditoria/auditoria.component';
import { UneteComponent } from './components/unete/unete.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';


const routes: Routes = [
  {path:'auditoria',component:AuditoriaComponent},
  {path:'unete',component:UneteComponent},
  {path:'nosotros',component:NosotrosComponent},
  { path: '', component : AuditoriaComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
