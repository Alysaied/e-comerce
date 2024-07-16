package com.ecomerce.backend.Services;

import com.ecomerce.backend.Repository.ProductsRepo;
import com.ecomerce.backend.entity.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServices {
    @Autowired
    private ProductsRepo productsRepo;
public List<Products> getAllProduct(){
    return this.productsRepo.findAll();
}
}
