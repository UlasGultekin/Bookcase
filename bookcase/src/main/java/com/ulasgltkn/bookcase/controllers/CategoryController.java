package com.ulasgltkn.bookcase.controllers;

import com.ulasgltkn.bookcase.entities.Category;
import com.ulasgltkn.bookcase.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/category")
public class CategoryController {
  private final CategoryService categoryService;

  @PostMapping
    public ResponseEntity saveCategory(@RequestBody Category category){
        return categoryService.saveCategory(category);
    }
    @GetMapping
    public ResponseEntity getAll(){
      return categoryService.getAll();
    }

}
