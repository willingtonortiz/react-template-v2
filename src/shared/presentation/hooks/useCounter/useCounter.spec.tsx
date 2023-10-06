import { renderHook } from "@testing-library/react";
import { useCounter } from "@shared/presentation/hooks/useCounter/useCounter.tsx";

describe("Calculator", () => {
  it("should sum two values", () => {
    expect(10).toBe(10);
  });
});

describe("useCounter", () => {
  it("should render normally", () => {
    const { result } = renderHook(useCounter);

    expect(result.current.counter).toBe(0);
  });
});
