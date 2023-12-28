import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";

const HoursOfWork = ({ form }) => {
  const HoursOfWorkList = [
    "11:00 PM - 12:30",
    "12:00 PM - 12:30",
  ];

  return (
    <div className="flex flex-col gap-2">
      <h3>Heures de travail:</h3>
      <div className="flex flex-wrap gap-2">
        {HoursOfWorkList.map((Element, index) => (
          <FormField
            key={index}
            control={form.control}
            name={Element}
            render={({ field }) => (
              <FormItem className="flex bg-white flex-row items-start gap-1 rounded-lg border p-2 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="capitalize">{Element}</FormLabel>
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HoursOfWork;
