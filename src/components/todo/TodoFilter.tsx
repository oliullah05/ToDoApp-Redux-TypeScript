
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react";
const TodoFilter = () => {
    const [position, setPosition] = React.useState("bottom")
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Filter</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">High</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Medium</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Low</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default TodoFilter;