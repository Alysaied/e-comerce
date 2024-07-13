import {Component, OnInit} from '@angular/core';
import {SpinnerComponent} from "../../Shared/spinner/spinner.component";
import {ProductService} from "../../services/product/product.service";
import {Product} from "../../models/Product";
import {NgForOf, NgIf} from "@angular/common";
import {SelectComponent} from "../../Shared/select/select.component";
import {RouterLink} from "@angular/router";
import {productComponent} from "../products/products.component";

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [
    NgForOf,
    SpinnerComponent,
    NgIf,
    SelectComponent,
    productComponent,
    RouterLink
  ],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css'
})
export class AllProductComponent implements OnInit{
  products:Product[]=[]
  categories:string[]=[]
  loading:boolean=false
  cartProducts:any[]=[]
  constructor(private _productService:ProductService){
    console.log("hello1");

  }
  ngOnInit():void{
     this.getProducts()
    this.getCategories();
    console.log("hello2");

  }
  getProducts(){
    this.loading=true
    this._productService.getAllProducts().subscribe((res:any)=>{
      this.products=res
      this.loading=false
    }, error=>{
      this.loading=false
      alert(error)})
  }
  getCategories(){
    this.loading=true
    this._productService.getAllCategories().subscribe((res:any)=>{
        debugger;
        this.categories=res
        console.log(res)
        this.loading=false
      },error =>{
        this.loading=false
        alert(error)}
    )
  }
  filterCategory(event:any){
    let value= event.target.value;
    (value=="all") ? this.getProducts():this.getProductCategory(value)
  }
  getProductCategory(keyword:string){
    this.loading=true
    this._productService.getProductByCategory(keyword).subscribe((res:any)=>{
      this.products=res
      this.loading=false
    })
  }
  addToCart(event:any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if (exist) {
        alert("product is already in your cart")
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))  // to send data to localStorage
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))  //to receive data from local Storage
    }
  }
}
