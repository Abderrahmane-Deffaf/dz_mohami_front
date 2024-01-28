import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";

const DaysOfWork = ({ form }) => {
  const DaysOfWorkList = [
    { id: 1, value: "dimanche" },
    { id: 2, value: "lundi" },
    { id: 3, value: "mardi" },
    { id: 4, value: "mercredi" },
    { id: 5, value: "jeudi" },
  ];

  return (
    <div className="flex flex-col gap-2">
      <h3>Jours de travail:</h3>
      <div className="flex flex-wrap gap-2">
        {DaysOfWorkList.map((Element, index) => (
          <FormField
            key={index}
            control={form.control}
            name={Element.value}
            render={({ field }) => (
              <FormItem className="flex bg-white flex-row items-start gap-1 rounded-lg border p-2 ">
                <FormControl>
                  <Checkbox
                    checked={field.id}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="capitalize">{Element.value}</FormLabel>
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default DaysOfWork;
