import {Component, OnInit} from '@angular/core';
import {SpinnerComponent} from "../../Shared/spinner/spinner.component";
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    SpinnerComponent,
    NgIf
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  id:any
  data:any={};
  loading:boolean=false
  constructor(private route:ActivatedRoute , private service:ProductService){
    this.id=this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }
  ngOnInit() {
    this.getProduct()
  }
  getProduct() {
    this.loading=true
    this.service.getProductById(this.id).subscribe(res => {
      this.loading=false
      this.data = res
    },error =>{
      this.loading=false
      alert(error)
    } )
  }
}
