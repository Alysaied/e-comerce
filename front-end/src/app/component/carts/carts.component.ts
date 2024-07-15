import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CartsService} from "../../services/carts/carts.service";
import {DatePipe, NgForOf} from "@angular/common";


@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [
    DatePipe,
    ReactiveFormsModule,
    NgForOf,

  ],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit {
  cartProducts:any[]=[]
  total:any=0
  success:boolean=false
  form!:FormGroup
  carts:any[]=[]
  constructor(private service:CartsService, private build:FormBuilder) {
  }
  ngOnInit(){
    this.form=this.build.group({
      start:[''],
      end:['']
    })
    this.getAllCarts()
  }
  // getCartProducts(){
  //   if("cart" in localStorage){
  //     this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
  //   }
  //   this.getCartTotal()
  // }
  // getCartTotal(){
  //   this.total=0
  //   for(let x in this.cartProducts){
  //     this.total+=this.cartProducts[x].item.price*this.cartProducts[x].quantity
  //   }
  // }
  // AddAmount(index:number){
  //   this.cartProducts[index].quantity++
  //   this.getCartTotal()
  //   localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  // }
  // minsAmount(index:number){
  //   this.cartProducts[index].quantity--
  //   this.getCartTotal()
  //   localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  // }
  // detectChange(){
  //   this.getCartTotal()
  //   localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  // }
  // deleteProduct(index:number){
  //   this.cartProducts.splice(index,1)
  //   this.getCartTotal()
  //   localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  // }
  // clearCart(){
  //   this.cartProducts=[]
  //   this.getCartTotal();
  //   localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  // }
  // addCart(){
  //   let products=this.cartProducts.map(item=>{
  //     return {productId:item.item.id,quantity:item.quantity}
  //   })
  //   let Model={
  //     userId:5,
  //     data:new Date(),
  //     products:products
  //   }
  //   this.service.createNewCart(Model).subscribe(res=>{
  //     this.success=true
  //   })
  //   console.log(Model)
  // }
  getAllCarts(){
    this.service.getAllCarts().subscribe((res:any)=>{
      this.carts=res
    })
  }
  applyFilter(){
    let date=this.form.value
    this.service.getAllCarts(date).subscribe((res:any)=>{
      this.carts=res
    })
  }
  deleteCart(id:number){
    this.service.deleteCart(id).subscribe(res=>{
      this.getAllCarts()
      alert("cart deleted success")
    })
  }
}
