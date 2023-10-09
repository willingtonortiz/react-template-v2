import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Check } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "@shared/presentation/utils/cn.ts";

const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "overflow-hidden aspect-square h-6 w-6 rounded-full border border-border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-none",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="h-full w-full flex items-center justify-center bg-success text-success-foreground">
        <Check className="h-4 w-4 text-white" strokeWidth={4} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
