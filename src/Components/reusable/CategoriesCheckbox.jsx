import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { Scale } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { categories } from "@/lib/constants";

const CategoriesCheckbox = ({ form, type = "avocatReg" }) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger
          className={`w-full ${
            type == "admin"
              ? " border-lightBlue border-2 px-3 rounded-3xl py-1.5"
              : "p-4 rounded-lg"
          } flex justify-between bg-white   `}
        >
          {type == "avocatReg" ? <Scale /> : null}
          <div className="whitespace-nowrap"> Choisir les catégories</div>
          <ChevronDown />
        </PopoverTrigger>
        <PopoverContent className="max-h-[10rem] overflow-y-scroll flex min-w-[25rem] flex-col gap-3 ">
          {categories.map((Element, index) => (
            <FormField
              key={index}
              control={form.control}
              name={Element}
              render={({ field }) => (
                <FormItem className="flex gap-x-2 items-center">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>{Element}</FormLabel>
                </FormItem>
              )}
            />
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CategoriesCheckbox;
