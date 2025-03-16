import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import React from "react"

export function DatePicker({ selected, onChange }: { selected: Date | null, onChange: (date: Date | null) => void }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const today = new Date();

    const handleSelect = (selectedDate: Date | undefined) => {
        if (selectedDate) {
            onChange(selectedDate);
        }
        setIsOpen(false);
    }

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal mt-2",
                        !selected && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {selected ? format(selected, "dd-MM-yyyy") : format(today, "dd-MM-yyyy")}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Calendar
                    mode="single"
                    selected={selected || today}
                    onSelect={handleSelect}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}