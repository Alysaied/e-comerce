package com.ecomerce.backend.Repository;

import com.ecomerce.backend.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepo extends JpaRepository<Products,Integer> {

}
