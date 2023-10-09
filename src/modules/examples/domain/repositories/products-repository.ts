import { Observable } from "rxjs";

export type Product = {
  readonly id: string;
  readonly name: string;
  readonly price: number;
};

export interface ProductsRepository {
  getProducts(): Observable<Product[]>;
}

export const ProductsRepository = Symbol("ProductsRepository");
