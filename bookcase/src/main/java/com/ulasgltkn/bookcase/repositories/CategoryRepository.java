package com.ulasgltkn.bookcase.repositories;

import com.ulasgltkn.bookcase.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional findByName(String name);
}