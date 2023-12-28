import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";

const DaysOfWork = ({ form }) => {
  const DaysOfWorkList = ["dimanche", "lundi", "mardi", "mercredi", "jeudi"];

  return (
    <div className="flex flex-col gap-2">
      <h3>Jours de travail:</h3>
      <div className="flex flex-wrap gap-2">
        {DaysOfWorkList.map((Element, index) => (
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

export default DaysOfWork;
