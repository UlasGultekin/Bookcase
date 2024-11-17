package com.ulasgltkn.bookcase.services;

import com.ulasgltkn.bookcase.entities.Category;
import com.ulasgltkn.bookcase.repositories.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public ResponseEntity saveCategory(Category category){
        HashMap<String, Object> hashMap = new HashMap<>();

        Optional category1 = categoryRepository.findByName(category.getName());

        if (category1.isPresent()){
            hashMap.put("status",false);
            hashMap.put("message","Category is already");
            return new ResponseEntity<>(hashMap, HttpStatus.ALREADY_REPORTED);
        }
        try {
            categoryRepository.save(category);
            hashMap.put("status",true);
            hashMap.put("message","Category saved");
            hashMap.put("result",category);
            return new ResponseEntity<>(hashMap, HttpStatus.CREATED);
        }catch (Exception ex){
            hashMap.put("status",false);
            hashMap.put("message","Category don't saved");
            hashMap.put("result",category);
            return new ResponseEntity<>(hashMap, HttpStatus.BAD_REQUEST);
        }


    }

    public ResponseEntity getAll(){
        HashMap<String, Object> hashMap = new HashMap<>();
        try {
            hashMap.put("status",true);
            hashMap.put("message","Get All Category");
            hashMap.put("result",categoryRepository.findAll());
            return new ResponseEntity<>(hashMap, HttpStatus.OK);
        }catch (Exception ex){
            hashMap.put("status",false);
            hashMap.put("message","Category don't get");

            return new ResponseEntity<>(hashMap, HttpStatus.BAD_REQUEST);
        }
    }



}
