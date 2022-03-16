import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';
import { HttpService } from '../../services/http.service';
import {MatDialog} from '@angular/material/dialog'; 
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.css']
})
export class AuditoriaComponent implements OnInit {
  registro:Register={
    name:"",
    enterprise:"",
    city:"",
    email:"",
    tele:0,
    help:"",
    comenta:""
  }
//datos quemados
  contactos:any[]=[
    {
      img:'../../../assets/img/jorgee.jpeg',
      name:'Jorge Eliécer Moreno',
      puesto:'Socio Líder Assurance, PwC Colombia',
      Tel:'(601) 743 1111'
    },
    { 
      img:'../../../assets/img/joaquin.jpg',
      name:'Joaquín Molina',
      puesto:'Socio Líder Oficina de Medellín, PwC',
      Tel:'(601) 743 1111'
    },
    {
      img:'../../../assets/img/jose.jpg',
      name:'José Vicente Sandoval',
      puesto:'Servicios de Auditoría, PwC Colombia',
      Tel:'(601) 743 1111'
    },
   { img:'../../../assets/img/yamile.jpg',
    name:'Yamile Sarmiento',
    puesto:'Socia Líder Oficina de Barranquilla, PwC Colombia',
    Tel:'Tel: (605) 385 5111 Ext. 226'
  },
  {
    img:'../../../assets/img/jhon.jpg',
    name:'Jhon Alexander Pineda',
    puesto:'Jhon Alexander Pineda',
    Tel:'(601) 743 1111'
  },


  ]
  constructor(private _httpService:HttpService,private _matDialog:MatDialog) {
   }

  ngOnInit(): void {
    

  }
  openPopUp(){
    this._matDialog.open(PopupComponent)
  }
  sendRegister(){
    this.openPopUp()
    this.registro
    console.log("formulario",this.registro);
    this._httpService.post('users',this.registro).subscribe(
      response => {
        if (!response) {
          console.error('Error: de crear usuario');
        } else {
          console.log("se creo  el formulario");
          

        }
      }
    );
  }
    
}



