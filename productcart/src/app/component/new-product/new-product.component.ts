import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/category/category.component';
import { Product } from 'src/app/product/product.component';
import { EcommerceAppService } from 'src/app/service/service.component';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  
  productcat:ProductCategory[] | undefined

  products:Product = new Product(0," "," "," ",0," ",0,0,new Date(),new Date(),0)

  constructor(private ecomservice:EcommerceAppService,private route:Router) { }

  ngOnInit(): void {
    this.getAllProductsCategory()
    }

  getAllProductsCategory(){

    this.ecomservice.getAllProductsCategory().subscribe(data => {console.log(data)
    this.productcat = data
    })

  }

  newProduct(){

    this.ecomservice.saveProduct(this.products).subscribe(()=>{
      this.route.navigateByUrl("/product")
    })
    console.log(this.products)
  }

}