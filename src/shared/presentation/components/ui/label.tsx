import { cn } from "@/shared/presentation/utils/cn.ts";
import * as LabelPrimitive from "@radix-ui/react-label";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const labelVariants = tv({
  base: "text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
});

const Label = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
