import { act, renderHook } from "@testing-library/react";
import { useDisclosure } from "@shared/presentation/hooks/useDisclosure/useDisclosure.ts";

describe("useDisclosure", () => {
  it("should be closed by default", () => {
    const { result } = renderHook(useDisclosure);

    expect(result.current.isOpen).toEqual(false);
  });

  it("should open the disclosure when onOpen is called", () => {
    const { result } = renderHook(useDisclosure);

    act(() => {
      result.current.onOpen();
    });

    expect(result.current.isOpen).toEqual(true);
  });

  it("should close the disclosure when onClose is called", () => {
    const { result } = renderHook(useDisclosure);

    act(() => {
      result.current.onOpen();
      result.current.onClose();
    });

    expect(result.current.isOpen).toEqual(false);
  });

  it("should toggle the disclosure when onToggle is called", () => {
    const { result } = renderHook(useDisclosure);

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.isOpen).toEqual(true);

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.isOpen).toEqual(false);
  });
});
