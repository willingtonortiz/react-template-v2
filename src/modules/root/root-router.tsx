import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createBrowserRouter } from "react-router-dom";
import { z } from "zod";
import { ExamplePage } from "@modules/examples/presentation/pages/ExamplePage.tsx";
import { Root } from "@modules/root/Root.tsx";
import { isDevelopment } from "@shared/presentation/helpers/is-development.ts";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <FormExample />,
      },
      {
        path: "/examples",
        element: <ExamplePage />,
      },
    ],
  },
]);

const ZCustomer = z.object({
  firstName: z
    .string()
    .min(3, "Debe contener al menos 3 caracteres")
    .max(10, "Debe contener como máximo 10 caracteres"),
  lastName: z.string().min(1, "Debe contener al menos 1 caracteres"),
});

type Customer = z.infer<typeof ZCustomer>;

function FormExample() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Customer>({
    resolver: zodResolver(ZCustomer),
    defaultValues: { firstName: "", lastName: "" },
  });

  return (
    <form
      className={"m-4 p-4 mr-64 border border-gray-400 rounded-md flex flex-col gap-4"}
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className={"flex flex-col"}>
        <label htmlFor="firstName">First Name</label>
        <input
          className={"border border-gray-200 p-2 rounded-md aria-invalid:border-red-400"}
          {...register("firstName")}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        <span className={"text-red-400"}>{errors.firstName?.message}</span>
      </div>

      <div className={"flex flex-col"}>
        <label htmlFor="lastName">Last Name</label>
        <input
          className={"border border-gray-200 p-2 rounded-md aria-invalid:border-red-400"}
          {...register("lastName")}
          aria-invalid={errors.lastName ? "true" : "false"}
        />
        <span className={"text-red-400"}>{errors.lastName?.message}</span>
      </div>

      <button type="submit">Submit</button>

      {isDevelopment && <DevTool control={control} />}
    </form>
  );
}
