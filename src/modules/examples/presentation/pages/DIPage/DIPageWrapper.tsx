import { container } from "tsyringe";
import { ProductsRepository } from "@modules/examples/domain/repositories/products-repository";
import { ProductsRepositoryImpl } from "@modules/examples/infrastructure/repositories/products-repository-impl";
import { DIPage } from "./DIPage";
import { DIPageDepsProvider } from "./DIPage-deps";

export async function loader() {
  container.register(ProductsRepository, { useClass: ProductsRepositoryImpl });
  return null;
}

export function Component() {
  return (
    <DIPageDepsProvider
      value={{
        productsRepository: container.resolve(ProductsRepository),
      }}
    >
      <DIPage />
    </DIPageDepsProvider>
  );
}
