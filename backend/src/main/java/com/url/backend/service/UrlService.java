package com.url.backend.service;

import com.google.common.hash.Hashing;
import com.url.backend.entities.Url;
import com.url.backend.entities.dto.UrlDTO;
import com.url.backend.mapper.UrlMapper;
import com.url.backend.repositories.UrlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
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

    @Transactional(readOnly = true)
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

    @Transactional
    public UrlDTO save(UrlDTO dto){


        dto.setUrlShort(generateUrl(dto.getUrlNormal()));
        dto.setDateCreate(LocalDate.now());

        Url url = urlMapper.toEntity(dto);

        UrlDTO urlDTO = urlMapper.toDTO(repository.save(url));

        return urlDTO;
    }


   /*private String shortUrl(){
        char[] randomString = new char[7];
        Random generator = new Random();
        for (int i = 0; i < 7; i++) {
            randomString[i] = (char) generator.nextInt(122);
        }

        return String.valueOf(randomString);
   }*/

   private String generateUrl(String urlNormal){
        String urlShort = Hashing.sha256()
                .hashString(urlNormal, StandardCharsets.UTF_8)
                .toString();
        return urlShort.substring(0, 7);
   }


}
