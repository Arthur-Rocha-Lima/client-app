package br.com.arthurrocha.clientes.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.arthurrocha.clientes.model.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{

}
