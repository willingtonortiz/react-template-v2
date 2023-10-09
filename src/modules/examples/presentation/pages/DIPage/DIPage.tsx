import { useEffect } from "react";
import { firstValueFrom } from "rxjs";
import { useDIPageDeps } from "./DIPage-deps";

export function DIPage() {
  const { productsRepository } = useDIPageDeps();

  useEffect(() => {
    firstValueFrom(productsRepository.getProducts()).then((products) => {
      console.log("products", products);
    });
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h1>DI</h1>
    </div>
  );
}
