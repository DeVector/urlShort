package com.url.backend.service;

import com.url.backend.entities.Url;
import com.url.backend.entities.Usuario;
import com.url.backend.entities.dto.UrlDTO;
import com.url.backend.mapper.UrlMapper;
import com.url.backend.repositories.UrlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
public class UrlService {

    @Autowired
    private UrlRepository repository;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private UrlMapper urlMapper;


    public List<Url> findAll(){
        return repository.findAll();
    }

    public Url findByUrl(String url){
        Optional<Url> url1 = repository.findByUrlNormal(url);
        if (url1.isEmpty()){
            throw new RuntimeException("Url " + url + " not found!!");
        }
        return url1.get();
    }

    public UrlDTO save(UrlDTO dto){

        dto.setUrlShort(shortUrl(dto.getUrlNormal()));
        dto.setDateCreate(LocalDate.now());

        Url url = urlMapper.toEntity(dto);

        UrlDTO urlDTO = urlMapper.toDTO(repository.save(url));

        return urlDTO;
    }

   private String shortUrl(String urlNormal){
        String encoder = Base64.getUrlEncoder().encodeToString(urlNormal.getBytes(StandardCharsets.UTF_8));
        return encoder;
   }


}
