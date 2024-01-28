import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

import SelectFilter from "./reusable/SelectFilter";
import { Input } from "./ui/input";
import { useContext } from "react";
import { adminState } from "@/routes/AdminDashboard";

const AdminFilter = () => {
  const { filters, setFilters } = useContext(adminState);
  const form = useForm({
    defaultValues: filters,
  });

  const onSubmit = (values) => {
    console.log(values);
    setFilters(values);
  };

  const onError = (e) => {
    console.log(e);
  };
  return (
    <Form {...form}>
      <form
        className="flex h-fit items-center justify-between  gap-9"
        onSubmit={form.handleSubmit(onSubmit, onError)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-fit">
              <FormControl>
                <div className="flex  items-center bg-white rounded-lg px-2 py-1 ">
                  <Search />
                  <Input type="text" placeholder="Rechercher" {...field} />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="wilaya"
            render={({ field }) => (
              <SelectFilter field={field} type={"wilaya"} />
            )}
          />
          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <SelectFilter field={field} type={"categorie"} />
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <SelectFilter field={field} type={"status"} />
            )}
          />
          <FormField
            control={form.control}
            name="isBlocked"
            render={({ field }) => (
              <SelectFilter field={field} type={"isBlocked"} />
            )}
          />
        </div>

        <Button
          className="px-[1rem] hover:bg-midBlue/90 bg-midBlue py-2 rounded-3xl "
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Appliquer
        </Button>
      </form>
    </Form>
  );
};

export default AdminFilter;
