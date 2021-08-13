package br.com.arthurrocha.clientes.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.arthurrocha.clientes.model.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

}
