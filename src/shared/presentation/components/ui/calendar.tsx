import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ComponentProps } from "react";
import { DayPicker } from "react-day-picker";
import { buttonVariants } from "@shared/presentation/components/ui/button";
import { cn } from "@shared/presentation/utils/cn.ts";

export type CalendarProps = ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      locale={es}
      weekStartsOn={1}
      showOutsideDays={showOutsideDays}
      formatters={{
        formatWeekdayName: (weekday) => {
          return format(weekday, "EE", { locale: es });
        },
      }}
      className={cn("p-3", className)}
      classNames={{
        root: "border border-primary rounded-md",
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",

        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-7 w-7 bg-transparent text-primary p-0",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",

        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "font-bold capitalize text-primary",

        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-foreground font-normal rounded-md w-9 m-0.5 text-[0.8rem] capitalize",

        row: "flex w-full mt-2",

        cell: "text-center text-sm text-primary p-0 m-0.5 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 rounded-full font-normal aria-selected:opacity-100",
        ),
        day_selected:
          "bg-secondary text-primary-foreground hover:bg-secondary/90 hover:text-primary-foreground focus:bg-secondary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-primary opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="w-5 h-5" />,
        IconRight: () => <ChevronRight className="w-5 h-5" />,
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
