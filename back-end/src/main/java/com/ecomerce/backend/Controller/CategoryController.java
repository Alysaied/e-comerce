package com.ecomerce.backend.Controller;

import com.ecomerce.backend.Services.CategoryService;
import com.ecomerce.backend.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.AutowiredPropertyMarker;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/api")
@CrossOrigin("*")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @GetMapping("/getAllCategory")
    public List<Category>getAllCategories(){
        return this.categoryService.getAllCategories();
    }
}
