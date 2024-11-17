package com.ulasgltkn.bookcase.repositories;

import com.ulasgltkn.bookcase.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    Optional findByName(String name);
}