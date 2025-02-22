"use client";

import { Stores } from "@prisma/client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, PlusCircle, StoreIcon } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useStoreModal } from "@/hooks/use-store-modal";

/*
 * note(extends)-1
 * thats how to create props that extends shadcn props
 * */

interface StoreSwitcherProps
  extends React.ComponentPropsWithRef<typeof PopoverTrigger> {
  items: Stores[];
}

const StoreSwitcher = ({ className, items }: StoreSwitcherProps) => {
  const params = useParams();
  const router = useRouter();
  const storeModal = useStoreModal();
  const [open, setOpen] = useState(false);
  const onStoreSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };

  const formattedItems = items.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  /*
   * note(array)-1:
   * searching for object in an array
   * */
  const currentStore = formattedItems.find(
    (item) => item.value === params.storeId
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className={cn("w-[200px] justify-between", className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          {currentStore?.label}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search store..." />
            <CommandEmpty>No store found.</CommandEmpty>
            <CommandGroup heading="Stores">
              {formattedItems.map((item) => (
                <CommandItem
                  onSelect={() => onStoreSelect(item)}
                  className="text-sm"
                  key={item.value}
                >
                  <StoreIcon className="mr-2 h-4 w-4" />
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentStore?.value === item.value
                        ? "visible"
                        : "invisible"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  storeModal.onOpen();
                }}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Create Store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default StoreSwitcher;
