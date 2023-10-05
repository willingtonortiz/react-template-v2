import { useNavigation } from "react-router-dom";

export function useNavigationLoading() {
  const { state } = useNavigation();
  return state === "loading";
}
