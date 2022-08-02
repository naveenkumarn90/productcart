import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { Product } from '../product/product.component';
import { ProductCategory } from '../category/category.component';

@Injectable({
  providedIn: 'root'
})
export class EcommerceAppService {
  
  produrl= "http://localhost:8080/api/prod"
  prodcaturl= "http://localhost:8080/api/prodcat"

  constructor(private httpclient:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.httpclient
    .get<getProductResponse>(this.produrl)
    .pipe(map(response => response._embedded.products))
  }

  getProductById(id:number):Observable<Product>{
    const prodURL= this.produrl + "/" +  id
    return this.httpclient
    .get<Product>(prodURL)
  }


  getAllProductsCategory():Observable<ProductCategory[]>{
    return this.httpclient
    .get<getProductCategoryResponse>(this.prodcaturl)
    .pipe(map(response => response._embedded.productCategories))
  }

  saveProduct(products:Product):Observable<Product>{

    console.log(products)

    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type' :'application/json',
      'Authorization':'auth-token',
      'Access-Control-Allow-Origin':'*'
    })
  }
  
  return this.httpclient.post<Product>(this.produrl,products,httpOptions)

 
  }
}

interface getProductResponse{
  _embedded:{
    products : Product[]
  }
}
interface getProductCategoryResponse{
  _embedded:{
    productCategories : ProductCategory[]
  }
}