import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {map} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // baseUrl='localhost:8080/api'
  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get(environment.baseApi +'products')
  }
  getAllCategories(){
    // let url='localhost:8080/api/getAllcategory'
    // debugger;
    // let headers = new HttpHeaders();
    // headers.set('Contact-Type', 'application/json');
    // return this.http.get(url,{ headers: headers }).pipe(map(
    //
    //   response=>response
    //
    return this.http.get(environment.baseApi+'products/categories')
  }
  getProductByCategory(keyword:any){
    return this.http.get( environment.baseApi+'products/category/' + keyword  )
  }
  getProductById(id:any) {
    return this.http.get(environment.baseApi + 'products/' + id)
  }
}
