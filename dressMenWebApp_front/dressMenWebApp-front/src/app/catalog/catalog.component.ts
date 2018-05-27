import { Component, OnInit } from '@angular/core';
import { Catalog } from './catalog';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  private urlProducts = 'http://localhost:8080/products/product';
  public productList:any;
  

  constructor(public http: HttpClient) {
    this.getProducts();
   }

  ngOnInit() {
  }

  getProducts(){
    this.http.get(this.urlProducts)
    .subscribe(
      (data) => {
        console.log(data);
        this.productList = data;
      }
    )
  }

}
