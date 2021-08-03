import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors?: String[];
  id: number;

  constructor( 
    private service : ClientesService, 
    private router : Router,
    private activatedRoute : ActivatedRoute) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params : Params = this.activatedRoute.params;
    if(params && params.value && params.value.id){
      this.id = params.value.id;
      this.service
        .getClienteById(this.id)
        .subscribe( 
          response => this.cliente = response,
          erroResponse => this.cliente = new Cliente()
          );
    }
  }

  onSubmit(){
    this.service.salvar(this.cliente).subscribe( response => {
      this.success = true;
      this.errors = undefined;
      this.cliente = response;
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    });
  }

  voltarListagem(){
    this.router.navigate(['/clientes-lista']);
  }

  listaClientes(){
    this.router.navigate(['/clientes-lista']);
  }

}
