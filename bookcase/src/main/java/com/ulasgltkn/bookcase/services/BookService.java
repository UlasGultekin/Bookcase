package com.ulasgltkn.bookcase.services;

import com.ulasgltkn.bookcase.entities.Book;
import com.ulasgltkn.bookcase.entities.Book;
import com.ulasgltkn.bookcase.repositories.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class BookService {
private final BookRepository bookRepository;
    public ResponseEntity saveBook(Book book){
        HashMap<String, Object> hashMap = new HashMap<>();

        Optional book1 = bookRepository.findByName(book.getName());

        if (book1.isPresent()){
            hashMap.put("status",false);
            hashMap.put("message","Book is already");
            return new ResponseEntity<>(hashMap, HttpStatus.ALREADY_REPORTED);
        }
        try {
            bookRepository.save(book);
            hashMap.put("status",true);
            hashMap.put("message","Book saved");
            hashMap.put("result",book);
            return new ResponseEntity<>(hashMap, HttpStatus.CREATED);
        }catch (Exception ex){
            hashMap.put("status",false);
            hashMap.put("message","Book don't saved");
            hashMap.put("result",book);
            return new ResponseEntity<>(hashMap, HttpStatus.BAD_REQUEST);
        }


    }

    public ResponseEntity getAll(){
        HashMap<String, Object> hashMap = new HashMap<>();
        try {
            hashMap.put("status",true);
            hashMap.put("message","Get All Book");
            hashMap.put("result",bookRepository.findAll());
            return new ResponseEntity<>(hashMap, HttpStatus.OK);
        }catch (Exception ex){
            hashMap.put("status",false);
            hashMap.put("message","Book don't get");

            return new ResponseEntity<>(hashMap, HttpStatus.BAD_REQUEST);
        }
    }
}
