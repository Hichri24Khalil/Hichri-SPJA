import { Injectable } from '@angular/core';
import { sample_products, sample_tags } from 'src/data';
import { Product } from '../Shared/models/Product';
import { Tag } from '../Shared/models/Tag';

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
getAllTags():Tag[]{
  return sample_tags ;
}
getAllProductsByTag(tag:string):Product[]{
  return tag == "All" ?
  this.getAll():
  this.getAll().filter(Product =>Product.tags?.includes(tag));

}
}
