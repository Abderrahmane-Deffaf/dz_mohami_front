import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import { Button } from "./ui/button";
// eslint-disable-next-line import/no-unresolved
import { User, Mail, KeyRound, Phone, Facebook } from "lucide-react";

import InputField from "./reusable/InputField";
import ImageInput from "./reusable/ImageInput";

const RegisterAvocatForm = () => {
  const form = useForm({
    defaultValues: {
      nom: "",
      prenom: "",
      avatar: null,
      email: "",
      password: "",
      phone: "",
      facebook: "",
      description: "",
      categories: [],
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        className="flex py-6 flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
          <div className=" flex flex-col px-8 gap-8 after:block after:content-[''] after:absolute after:right-0 after:h-full after:w-[1px] after:bg-gray relative basis-[49%]">
            <div className="flex justify-between ">
              <div className="flex basis-[65%] flex-col justify-between">
                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <InputField
                      placeholder="Nom"
                      field={field}
                      type="text"
                      icon={<User />}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="prenom"
                  render={({ field }) => (
                    <InputField
                      placeholder="Prénom"
                      field={field}
                      type="text"
                      icon={<User />}
                    />
                  )}
                />
              </div>
              <div className="basis-[30%] flex justify-end">
                <FormField
                  control={form.control}
                  name="avatar"
                  render={({ field }) => <ImageInput field={field} />}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="email"
              type="mail"
              render={({ field }) => (
                <InputField placeholder="Email" field={field} icon={<Mail />} />
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
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <InputField
                  type="tel"
                  placeholder="Numéro de téléphone"
                  field={field}
                  icon={<Phone />}
                />
              )}
            />
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <InputField
                  type="text"
                  placeholder="Facebook"
                  field={field}
                  icon={<Facebook />}
                />
              )}
            />
          </div>

          <div className=" flex flex-col px-8 gap-8 basis-[49%]"></div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default RegisterAvocatForm;
