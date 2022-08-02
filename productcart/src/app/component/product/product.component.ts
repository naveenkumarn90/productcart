import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/category/category.component';
import { EcommerceAppService } from 'src/app/service/service.component';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  productcat:ProductCategory[] | undefined

  constructor(private ecomservice:EcommerceAppService) { }

  ngOnInit(): void {
    this.getAllProductsCategory()
  }
  getAllProductsCategory(){

    this.ecomservice.getAllProductsCategory().subscribe(data => {console.log(data)
    this.productcat = data
    })

  }
}
