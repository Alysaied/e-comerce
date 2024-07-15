package com.ecomerce.backend.Services;

import com.ecomerce.backend.Repository.CategoryRepo;
import com.ecomerce.backend.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepo categoryRepo;
   public List<Category> getAllCategories(){
        return this.categoryRepo.findAll();
    }
}
