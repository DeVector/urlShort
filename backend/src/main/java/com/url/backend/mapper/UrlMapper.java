package com.url.backend.mapper;

import com.url.backend.entities.Url;
import com.url.backend.entities.Usuario;
import com.url.backend.entities.dto.UrlDTO;
import com.url.backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UrlMapper {

    @Autowired
    private UsuarioService service;

    public Url toEntity(UrlDTO dto){
        Url url = new Url();
        url.setId(dto.getId());
        url.setUrlNormal(dto.getUrlNormal());
        url.setUrlShort(dto.getUrlShort());
        url.setDateCreate(dto.getDateCreate());
        Usuario usuario = service.findById(dto.getUser());
        url.setUser(usuario);
        return url;
    }

    public UrlDTO toDTO(Url url){
        UrlDTO urlDTO = new UrlDTO();
        urlDTO.setId(url.getId());
        urlDTO.setUrlNormal(url.getUrlNormal());
        urlDTO.setUrlShort(url.getUrlShort());
        urlDTO.setDateCreate(url.getDateCreate());
        urlDTO.setUser(url.getUser().getId());
        return urlDTO;
    }

}
