package com.url.backend.entities.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UrlDTO {

    private Integer id;

    private String urlNormal;

    private String urlShort;

    private LocalDate dateCreate;

    private Integer user;

}
