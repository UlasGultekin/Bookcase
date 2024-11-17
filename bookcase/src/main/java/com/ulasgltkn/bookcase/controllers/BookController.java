package com.ulasgltkn.bookcase.controllers;


import com.ulasgltkn.bookcase.entities.Book;
import com.ulasgltkn.bookcase.entities.Category;
import com.ulasgltkn.bookcase.services.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/book")

public class BookController {

    private final BookService bookService;
    @PostMapping
    public ResponseEntity saveBook(@Validated @RequestBody Book book){
        return bookService.saveBook(book);
    }
    @GetMapping
    public ResponseEntity getAll(){
        return bookService.getAll();
    }

}
