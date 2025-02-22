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

export function GenderSelector({ className }: { className: string }) {
    return (
        <Select>
            <SelectTrigger className={cn("base-button filter-button", className)}>
                <SelectValue placeholder="All Genders" />
            </SelectTrigger>
            <SelectContent className="border-gray-300">
                <SelectGroup>
                <SelectItem value="all">All Genders</SelectItem>
                <SelectItem value="male">Male Only</SelectItem>
                <SelectItem value="female">Female Only</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
