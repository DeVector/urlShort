package com.url.backend.repositories;

import com.url.backend.entities.Url;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UrlRepository extends JpaRepository<Url, Integer> {

    Optional<Url> findByUrlShort(String url);

}
