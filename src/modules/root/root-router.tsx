import { Link, createBrowserRouter } from "react-router-dom";
import { Root } from "@modules/root/Root.tsx";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/components",
        async lazy() {
          let { ExamplePage } = await import(
            "@/modules/examples/presentation/pages/ComponentsPage"
          );
          return { Component: ExamplePage };
        },
      },
      {
        path: "/di",
        lazy: () => import("@/modules/examples/presentation/pages/DIPage/DIPageWrapper"),
      },
    ],
  },
]);

function HomePage() {
  return (
    <div className="p-4 space-y-4">
      <Link className="block" to={"/components"}>
        Examples
      </Link>

      <Link className="block" to={"/di"}>
        DI
      </Link>
    </div>
  );
}
