import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import { Button } from "./ui/button";
// eslint-disable-next-line import/no-unresolved
import {  Mail, KeyRound } from "lucide-react";

import InputField from "./reusable/InputField";
import GoogleButton from "./reusable/GoogleButton";

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        className="flex items-center py-6 flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <InputField
              type="mail"
              placeholder="Email"
              field={field}
              icon={<Mail />}
            />
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <InputField
              placeholder="Mod de passe"
              field={field}
              type="password"
              icon={<KeyRound />}
            />
          )}
        />
        <Button className="w-full" type="submit">
          Se connecter
        </Button>
        <GoogleButton />
      </form>
    </Form>
  );
};

export default LoginForm;
