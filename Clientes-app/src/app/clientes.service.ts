import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente() : Cliente {
    let cliente = new Cliente();
    cliente.nome = 'Fulano de tal';
    cliente.cpf = '88888888888';
    return cliente;     
  }
}
