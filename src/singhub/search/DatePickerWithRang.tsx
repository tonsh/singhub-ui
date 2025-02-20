import * as React from "react"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import "../../singhub.css"

interface DatePickerWithRangeProps {
  className?: string
  id?: string
}

function CalendarIcon() {
  return (
    <span className="ml-2 text-gray-500">
      <svg fill="none" viewBox="0 0 24 24" className="size-5 stroke-current stroke-1.5">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </span>
  )
}

export function DatePickerWithRange({ className, id="date" }: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>()

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant={"outline"}
            className={cn(
              "base-button h-10 !p-2 !gap-0 !font-normal text-left text-gray-400 !border-gray-300 rounded-md hover:text-gray-400 active:!border-gray-400",
              !date && "text-muted-foreground"
            )}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} <span className="text-gray-500 px-1">&rarr;</span> {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}

            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={(date) => date < new Date()}
            classNames={{
              months: "flex flex-col sm:flex-row gap-2",
              head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
              day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
              day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
              day_selected:  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
              day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
