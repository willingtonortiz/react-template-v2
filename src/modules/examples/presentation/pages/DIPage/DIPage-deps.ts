import { createContext, useContext } from "react";
import { ProductsRepository } from "@modules/examples/domain/repositories/products-repository";

export type DIPageDeps = {
  productsRepository: ProductsRepository;
};

const DIPageDepsContext = createContext<DIPageDeps>({} as DIPageDeps);

export const DIPageDepsProvider = DIPageDepsContext.Provider;

export function useDIPageDeps() {
  return useContext(DIPageDepsContext);
}
