import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  //interfaz del objeto usuario
  usuario = {
    id: '',
    nombre: '',
    apellido: '',
    email: ''

  };

  //mostrar error si no se completan campos:
  errorForm: boolean = false;

  //usuario de test (reemplazar por api)
  usuarios: any[] = [
    {
      id: 1,
      nombre: "Mark",
      apellido: "Otto",
      email: "@mdo"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  //funcion usuarios nuevos
  agregar() {
    console.log(this.usuario)
    if ( //validar que no esté vacío
      this.usuario.nombre != '' &&
      this.usuario.apellido != '' &&
      this.usuario.email != ''
    ) {
      this.errorForm = false;
      this.usuarios.push(this.usuario)
      this.usuario = {
        id: '',
        nombre: '',
        apellido: '',
        email: ''
      }
    } else {
      this.errorForm = true;
      setTimeout(() => {
        this.errorForm = false;
      }, 1500)
    }
  }

  //pasa el valor por index para eliminar usuario
  borrar(index) {
    this.usuarios.splice(index, 1);
  }

  modificar (index) {
    
  }
}
