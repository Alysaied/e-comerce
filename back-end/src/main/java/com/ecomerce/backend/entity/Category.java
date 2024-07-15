package com.ecomerce.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

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

}
