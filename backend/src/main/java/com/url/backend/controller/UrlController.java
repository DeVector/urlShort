package com.url.backend.controller;

import com.url.backend.entities.Url;
import com.url.backend.entities.dto.UrlDTO;
import com.url.backend.service.UrlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/urls")
public class UrlController {

    @Autowired
    private UrlService service;

    @GetMapping("/list")
    public ResponseEntity<List<Url>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping("/create")
    public ResponseEntity<UrlDTO> save(@RequestBody UrlDTO url){
        return ResponseEntity.ok(service.save(url));
    }

    @PostMapping("/{urlNormal}")
    public ResponseEntity<Url> findByUrl(@PathVariable String urlNormal){
        return ResponseEntity.ok(service.findByUrl(urlNormal));
    }
}
