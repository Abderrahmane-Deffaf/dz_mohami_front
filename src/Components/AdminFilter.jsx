import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Button } from "./ui/button";
// eslint-disable-next-line import/no-unresolved
import { Search } from "lucide-react";

import SelectFilter from "./reusable/SelectFilter";
import { Input } from "./ui/input";

const AdminFilter = () => {
  const form = useForm({
    defaultValues: {
      nom: "",
      orderBy: "",
      order: "",
      wilaya: "",
      status: "",
      categories: [],
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        className="flex h-fit items-center justify-between  gap-9"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem className="w-fit">
              <FormControl>
                <div className="flex  items-center bg-white rounded-lg px-2 py-1 ">
                  <Search/>
                  <Input type="text" placeholder="Rechercher" {...field} />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="orderBy"
            render={({ field }) => (
              <SelectFilter field={field} type={"orderBy"} />
            )}
          />
          <FormField
            control={form.control}
            name="order"
            render={({ field }) => (
              <SelectFilter field={field} type={"order"} />
            )}
          />
          <FormField
            control={form.control}
            name="wilaya"
            render={({ field }) => (
              <SelectFilter field={field} type={"wilaya"} />
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <SelectFilter field={field} type={"status"} />
            )}
          />
        </div>

        <Button className="px-[1rem] bg-midBlue py-2 rounded-3xl " type="submit">
          Appliquer
        </Button>
      </form>
    </Form>
  );
};

export default AdminFilter;
