import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../../usuario' //interface

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  //objeto usuario, con interfaz aplicada
  usuario: Usuario = {
    id: 4,
    first_name: '',
    last_name: '',
    email: '',
    avatar: ''
  };

  //mostrar error si no se completan campos:
  errorForm: boolean = false;

  usuarios: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.usuarios = []
    //traer usuarios de la api en el inicio:
    this.http.get('https://reqres.in/api/users').subscribe(res => {
      this.usuarios = res["data"];
    })
  }

  //funcion usuarios nuevos
  agregar() {
    if ( //validar que no esté vacío
      this.usuario.first_name != '' &&
      this.usuario.last_name != '' &&
      this.usuario.email != ''
    ) {
      this.errorForm = false;
      this.usuarios.push(this.usuario)
      this.usuario = {
        id: this.usuarios.length + 1,
        first_name: '',
        last_name: '',
        avatar: '',
        email: ''
      }
    } else {
      this.errorForm = true; //si está vacío no valida y da un warning
      setTimeout(() => {
        this.errorForm = false;
      }, 1500)
    }
  }

  //funcion borrar, pasa el valor por index para eliminar usuario
  borrar(index) {
    this.usuarios.splice(index, 1);
  }

  //funcion modificar usuario:
  modificar(index) {
    this.usuarios.splice(index, 1, this.usuario)
  }
}
