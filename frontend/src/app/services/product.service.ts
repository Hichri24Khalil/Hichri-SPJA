import { Injectable } from '@angular/core';
import { sample_products } from 'src/data';
import { Product } from '../Shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAll():Product[]{
    return  sample_products;
  }
  //Porduct  PRODUCT
getAllProducutsBySearchTerm (searchTerm:string){
  return this.getAll().filter(Product => Product.name.toLowerCase().includes(searchTerm.toLowerCase()))
}
}
