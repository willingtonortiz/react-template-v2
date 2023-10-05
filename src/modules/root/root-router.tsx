import { createBrowserRouter } from "react-router-dom";
import { Root } from "@modules/root/Root.tsx";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <h1 className={"text-2xl"}>Hello World</h1>
          </div>
        ),
      },
    ],
  },
]);
