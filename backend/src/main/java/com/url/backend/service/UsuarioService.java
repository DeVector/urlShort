package com.url.backend.service;

import com.url.backend.entities.Usuario;
import com.url.backend.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private PasswordEncoder encoder;


    public List<Usuario> findAll(){
        return repository.findAll();
    }

    public Usuario findByLogin(String login){
        Optional<Usuario> usuario = repository.findByLogin(login);

        if (usuario.isEmpty()){
            throw new RuntimeException("Usuario " + login + " not found!!");
        }

        return usuario.get();
    }

    public Usuario save(Usuario usuario){
        validarUsuario(usuario);
        usuario.setPassword(encoder.encode(usuario.getPassword()));
        return repository.save(usuario);
    }

    public Usuario findById(Integer id){
        Optional<Usuario> usuario = repository.findById(id);
        if (usuario.isEmpty()){
            throw new RuntimeException("Usuario não encontrado");
        }
        return usuario.get();
    }

    private void validarUsuario(Usuario usuario) {

        Optional<Usuario> user = repository.findByLogin(usuario.getLogin());
        if (user.isPresent() && user.get().getId() != usuario.getId()){
            throw new RuntimeException("Login exist!!!");
        }
    }
}
