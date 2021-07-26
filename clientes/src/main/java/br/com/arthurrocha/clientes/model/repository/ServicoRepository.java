package br.com.arthurrocha.clientes.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.arthurrocha.clientes.model.entity.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Integer>{

}
