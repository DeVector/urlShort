package com.url.backend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.url.backend.entities.dto.UrlDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "tb_url")
public class Url {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String urlNormal;

    private String urlShort;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private LocalDate dateCreate;

    @ManyToOne
    private Usuario user;

}
