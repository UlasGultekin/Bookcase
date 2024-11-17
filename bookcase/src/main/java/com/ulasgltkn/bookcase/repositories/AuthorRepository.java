package com.ulasgltkn.bookcase.repositories;

import com.ulasgltkn.bookcase.entities.Author;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthorRepository extends JpaRepository<Author, Long> {
    Optional findByName(String name);
}