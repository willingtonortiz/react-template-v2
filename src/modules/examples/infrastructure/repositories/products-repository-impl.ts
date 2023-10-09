import { v4 as uuidv4 } from "@lukeed/uuid";
import { Observable, of } from "rxjs";
import { singleton } from "tsyringe";
import {
  Product,
  ProductsRepository,
} from "@modules/examples/domain/repositories/products-repository";

@singleton()
export class ProductsRepositoryImpl implements ProductsRepository {
  getProducts(): Observable<Product[]> {
    return of([
      { id: uuidv4(), name: "Apple iPhone 13 Pro", price: 999 },
      { id: uuidv4(), name: "Samsung Galaxy S21 Ultra", price: 1199 },
      { id: uuidv4(), name: "Google Pixel 6 Pro", price: 899 },
      { id: uuidv4(), name: "Dell XPS 15", price: 1499 },
      { id: uuidv4(), name: "Lenovo ThinkPad X1 Carbon", price: 1399 },
      { id: uuidv4(), name: "Sony WH-1000XM4", price: 349 },
      { id: uuidv4(), name: "Bose QuietComfort 45", price: 329 },
      { id: uuidv4(), name: "Nintendo Switch OLED", price: 349 },
      { id: uuidv4(), name: "Sony PlayStation 5", price: 499 },
      { id: uuidv4(), name: "Microsoft Xbox Series X", price: 499 },
    ]);
  }
}
