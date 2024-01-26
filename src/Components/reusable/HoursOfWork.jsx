import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";

const HoursOfWork = ({ form }) => {
  const HoursOfWorkList = [
    {
      id: 1,
      value: "08:00 - 10:00",
    },
    {
      id: 2,
      value: "10:00 - 12:00",
    },
    {
      id: 3,
      value: "13:00 - 15:00",
    },
    {
      id: 3,
      value: "15:00 - 17:00",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <h3>Heures de travail:</h3>
      <div className="flex flex-wrap gap-2">
        {HoursOfWorkList.map((Element, index) => (
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

export default HoursOfWork;
