package com.ecomerce.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

@Table(name="products")
@Entity
@Data
public class Products {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    @Column(name="title")
    private String Title;

    @Column(name="price")
    private String Price;

    @Column(name="description")
    private String Description;

    @Column(name="category_name")
    private String categoryName;

    @Column(name="image")
    private String image;

    @JsonBackReference
    @JoinColumn(name="id",insertable = false,updatable = false)
    @ManyToOne
    private Category category;
}
