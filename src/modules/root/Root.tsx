import { Outlet } from "react-router-dom";
import { useNavigationLoading } from "@core/presentation/components/hooks/useNavigationLoading.tsx";
import { Loader } from "@shared/presentation/components/Loader";

export function Root() {
  const isLoading = useNavigationLoading();

  return (
    <>
      {isLoading && <GlobalLoader />}

      <Outlet />
    </>
  );
}

function GlobalLoader() {
  return (
    <div className={"fixed inset-0 grid place-items-center bg-primary"}>
      <Loader />
    </div>
  );
}
