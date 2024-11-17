package com.ulasgltkn.bookcase.services;

import com.ulasgltkn.bookcase.entities.Author;
import com.ulasgltkn.bookcase.entities.Author;
import com.ulasgltkn.bookcase.repositories.AuthorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthorService {
    private final AuthorRepository authorRepository;

    public ResponseEntity saveAuthor(Author author){
        HashMap<String, Object> hashMap = new HashMap<>();

        Optional author1 = authorRepository.findByName(author.getName());

        if (author1.isPresent()){
            hashMap.put("status",false);
            hashMap.put("message","Author is already");
            return new ResponseEntity<>(hashMap, HttpStatus.ALREADY_REPORTED);
        }
        try {
            authorRepository.save(author);
            hashMap.put("status",true);
            hashMap.put("message","Author saved");
            hashMap.put("result",author);
            return new ResponseEntity<>(hashMap, HttpStatus.CREATED);
        }catch (Exception ex){
            hashMap.put("status",false);
            hashMap.put("message","Author don't saved");
            hashMap.put("result",author);
            return new ResponseEntity<>(hashMap, HttpStatus.BAD_REQUEST);
        }


    }

    public ResponseEntity getAll(){
        HashMap<String, Object> hashMap = new HashMap<>();
        try {
            hashMap.put("status",true);
            hashMap.put("message","Get All Author");
            hashMap.put("result",authorRepository.findAll());
            return new ResponseEntity<>(hashMap, HttpStatus.OK);
        }catch (Exception ex){
            hashMap.put("status",false);
            hashMap.put("message","Author don't get");

            return new ResponseEntity<>(hashMap, HttpStatus.BAD_REQUEST);
        }
    }
}
