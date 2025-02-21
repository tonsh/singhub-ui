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
            className={cn("base-button filter-button", !date && "text-muted-foreground")}
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
              <span> Start Date <span className="text-gray-500 px-1">&rarr;</span> End Date </span>
            )}

            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 border-gray-300" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={(date) => date < new Date()}
            showOutsideDays={false}
            fromMonth={new Date()}
            toMonth={new Date(new Date().setMonth(new Date().getMonth() + 3))}  // 最大时间范围 3 个月
            classNames={{
              months: "flex flex-col sm:flex-row gap-4",  // 月份之间 gap-2 改为 gap-4
              head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",  // 月份头部单元格间隔改为 w-9
              day_range_start: "day-range-start !border-1 !border-blue-500",  // 开始日期的边框改为蓝色
              day_range_end: "day-range-end !border-1 !border-blue-500", // 结束日期的边框改为蓝色
              day_selected: "bg-primary text-blue-500 hover:bg-primary hover:text-blue-500 focus:bg-primary focus:text-blue-500",  // 选中日期的文字 hover & focus 时颜色改为蓝色
              day_range_middle: "aria-selected:bg-accent aria-selected:text-blue-500",  // 所有选中日期的文字颜色改为蓝色
              nav_button_previous: "absolute left-1 disabled:hidden",  // 上一页按钮隐藏
              nav_button_next: "absolute right-1 disabled:hidden",  // 下一页按钮隐藏
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
