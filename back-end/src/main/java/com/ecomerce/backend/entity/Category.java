package com.ecomerce.backend.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Table(name="Categories")
@Entity
@Data
public class Category {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="name")
    private String Name;


    @JsonManagedReference
    @OneToMany(mappedBy = "category")
    private List<Products>products;

}
