package com.url.backend.controller;

import com.url.backend.entities.Usuario;
import com.url.backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @GetMapping("/list")
    public ResponseEntity<List<Usuario>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping("/create")
    public ResponseEntity<Usuario> save(@Valid @RequestBody Usuario usuario){
        return ResponseEntity.ok(service.save(usuario));
    }

    @GetMapping("/{login}")
    public ResponseEntity<Usuario> findByLogin(@PathVariable String login){
        return ResponseEntity.ok(service.findByLogin(login));
    }

}
