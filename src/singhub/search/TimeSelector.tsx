import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import "./search.css"

export function TimeSelector({ className }: { className: string }) {
    return (
        <Select>
            <SelectTrigger className={cn("base-button filter-button", className)}>
                <span className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-5 stroke-1.5 stroke-current">
                        <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </span>
                <SelectValue placeholder="Any Time" />
            </SelectTrigger>
            <SelectContent className="border-gray-300">
                <SelectGroup>
                <SelectItem value="all">Any Time</SelectItem>
                <SelectItem value="morning">07:00 AM - 12:30 PM</SelectItem>
                <SelectItem value="afternoon">12:30 PM - 17:30 PM</SelectItem>
                <SelectItem value="evening">17:30 PM - 21:30 PM</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
