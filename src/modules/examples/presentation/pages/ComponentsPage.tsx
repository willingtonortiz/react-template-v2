import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Axe, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  AlertDialog,
  AlertDialogContent,
} from "@shared/presentation/components/ui/alert-dialog.tsx";
import { Button } from "@shared/presentation/components/ui/button.tsx";
import { Calendar } from "@shared/presentation/components/ui/calendar";
import { Checkbox } from "@shared/presentation/components/ui/checkbox";
import { Input } from "@shared/presentation/components/ui/input";
import { Label } from "@shared/presentation/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@shared/presentation/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@shared/presentation/components/ui/radio-group.tsx";
import { Skeleton } from "@shared/presentation/components/ui/skeleton";
import { useDisclosure } from "@shared/presentation/hooks/useDisclosure/useDisclosure";
import cn from "@shared/presentation/utils/cn";

export function ExamplePage() {
  return (
    <div className="p-4">
      <RegisterForm />

      <AlertDialogExample />

      <DatePickerExample />

      <RadioGroup>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>

      <div className="flex flex-row items-center gap-2 my-4 flex-nowrap">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Hello world</Label>
      </div>

      <div className="flex flex-row items-center gap-2 flex-nowrap">
        <Skeleton className="w-12 h-12 bg-gray-400 rounded-full" />

        <div className="space-y-2">
          <Skeleton className="w-56 h-4 bg-gray-400" />
          <Skeleton className="h-4 bg-gray-400 w-44" />
        </div>
      </div>
    </div>
  );
}

const ZRegister = z.object({
  username: z.string().min(3, "Debe contener al menos 3 caracteres"),
  password: z.string().min(3, "Debe contener al menos 3 caracteres"),
  email: z.string().email("Debe ser una dirección de correo electrónico válida"),
});

type Register = z.infer<typeof ZRegister>;

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(ZRegister),
    defaultValues: { username: "", password: "", email: "" },
  });

  const onSubmit = (data: Register) => {
    console.log(data);
    throw new Error("There was an error");
  };

  return (
    <form className={"flex flex-col gap-4"} onSubmit={handleSubmit(onSubmit)}>
      <div className={"flex flex-col gap-1"}>
        <Label htmlFor="username">Username</Label>

        <Input id="username" {...register("username")} />

        {errors.username && <span className={"text-red-500"}>{errors.username?.message}</span>}
      </div>

      <div className={"flex flex-col gap-1"}>
        <Label htmlFor="password">Password</Label>

        <Input id="password" {...register("password")} />

        {errors.password && <span className={"text-red-500"}>{errors.password?.message}</span>}
      </div>

      <div className={"flex flex-col gap-1"}>
        <Label htmlFor="email">Email</Label>

        <Input id="email" {...register("email")} />

        {errors.email && <span className={"text-red-500"}>{errors.email?.message}</span>}
      </div>

      <Button type="submit" isRounded variant="secondary">
        Register
      </Button>
    </form>
  );
}

function DatePickerExample() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-between text-left font-normal active:scale-100",
            !date && "text-muted-foreground",
          )}
        >
          {date ? format(date, "dd/MM/yyyy") : <span>DD/MM/AAAA</span>}

          <CalendarIcon className="w-6 h-6 text-primary" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          fromDate={new Date(2023, 5, 15)}
          toDate={new Date(2023, 11, 15)}
        />
      </PopoverContent>
    </Popover>
  );
}

function AlertDialogExample() {
  const disclosure = useDisclosure();

  return (
    <>
      <Button onClick={disclosure.onOpen}>Open the dialog</Button>

      <AlertDialog open={disclosure.isOpen}>
        <AlertDialogContent className={"max-w-[320px] flex flex-col items-center"}>
          <Axe size={54} />

          <h1 className={"text-center font-bold text-xl"}>Lorem, ipsum dolor.</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum impedit, doloribus
            facilis sint culpa voluptate a aut? Eaque, dolorum?
          </p>

          <ul className={"ml-4 mb-8 list-disc"}>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sed.</li>

            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, exercitationem.
            </li>
          </ul>

          <Button variant={"secondary"} isRounded={true} isFull={true} onClick={disclosure.onClose}>
            Lorem, ipsum.
          </Button>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
