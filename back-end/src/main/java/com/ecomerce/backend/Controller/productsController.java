package com.ecomerce.backend.Controller;

import com.ecomerce.backend.Services.ProductServices;
import com.ecomerce.backend.entity.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/api")
public class productsController {
    @Autowired
    private ProductServices productServices;
    @GetMapping("/getAllProduct")
    public List<Products> getAllProduct(){
        return this.productServices.getAllProduct();
    }
}
