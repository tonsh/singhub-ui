import { useState } from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Check, ChevronRight, ChevronsUpDown, SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3 border-gray-300"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
        "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
        className
        )}
        {...props}
      />
    </div>
  )
}

const categories = [
    {
      value: "bishan",
      label: "Bishan",
      subCategories: [
        { value: "123", label: "Bishan Sports Hall" },
        { value: "456", label: "Bishan Swimming Complex" },
        { value: "789", label: "Bishan CC"},
      ]
    },
    {
      value: "vegetables",
      label: "Vegetables",
      subCategories: [
        { value: "carrot", label: "Carrot" },
        { value: "broccoli", label: "Broccoli" },
      ]
    },
  ]

  export function SiteMenu({className}: {className: string}) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [currentLevel, setCurrentLevel] = useState(categories)

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("base-button filter-button overflow-hidden", className)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-5 stroke-gray-400 stroke-1.5 mr-2">
              <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

            {value
              ? categories.flatMap(c => c.subCategories).find((item) => item?.value === value)?.label.slice(0, 17) + '...'
              : "Select item..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 border-gray-300">
          <Command>
            <CommandInput placeholder="Search item..." />
            <CommandList>
              <CommandEmpty>No item found.</CommandEmpty>
              <CommandGroup>
                {/* <ArrowLeft className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                {currentLevel.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      if (item.subCategories) {
                        setCurrentLevel(item.subCategories)
                      } else {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                        setCurrentLevel(categories)
                      }
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === item.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {item.label}

                    {item.subCategories && (
                      <ChevronRight className="ml-auto h-4 w-4" />
                    )}
                  </CommandItem>

                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
