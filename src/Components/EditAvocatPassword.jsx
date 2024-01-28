import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import { Button } from "./ui/button";
import { KeyRound } from "lucide-react";

import InputField from "./reusable/InputField";

const EditAvocatPassword = () => {
  const form = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        className="flex  w-full items-center  py-6 flex-col gap-9"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex w-full gap-4 justify-between">
          <FormField
            control={form.control}
            name="oldPassword"
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <InputField
                placeholder="Ancien mot de passe"
                field={field}
                type="password"
                icon={<KeyRound />}
              />
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <InputField
                placeholder="Nouveau mot de passe"
                field={field}
                type="password"
                icon={<KeyRound />}
              />
            )}
          />
        </div>
        <Button className="px-[7rem] " type="submit">
          Changer le mot de passe
        </Button>
      </form>
    </Form>
  );
};

export default EditAvocatPassword;
