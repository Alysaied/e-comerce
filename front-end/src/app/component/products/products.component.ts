import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/Product";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class productComponent implements OnInit {
  @Input() data!:Product
  @Output() item=new EventEmitter()
  addButton:boolean =false
  amount:number=0

  constructor() {
  }
  ngOnInit() {
  }
  add(){
    this.item.emit({item:this.data,quantity:this.amount})
  }
}
