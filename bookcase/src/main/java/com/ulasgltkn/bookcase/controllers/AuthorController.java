package com.ulasgltkn.bookcase.controllers;


import com.ulasgltkn.bookcase.entities.Author;
import com.ulasgltkn.bookcase.entities.Category;
import com.ulasgltkn.bookcase.services.AuthorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/author")
public class AuthorController {

    private final AuthorService authorService;

    @PostMapping
    public ResponseEntity saveAuthor(@RequestBody Author author){
        return authorService.saveAuthor(author);
    }
    @GetMapping
    public ResponseEntity getAll(){
        return authorService.getAll();
    }
}
