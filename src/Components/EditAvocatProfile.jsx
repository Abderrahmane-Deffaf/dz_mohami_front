import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import { Button } from "./ui/button";
// eslint-disable-next-line import/no-unresolved
import { User, Mail, Phone, Facebook } from "lucide-react";

import InputField from "./reusable/InputField";
import ImageInput from "./reusable/ImageInput";
import CategoriesCheckbox from "./reusable/CategoriesCheckbox";
import CostumTextarea from "./reusable/CostumTextarea";
import DaysOfWork from "./reusable/DaysOfWork";
import HoursOfWork from "./reusable/HoursOfWork";
import Location from "./reusable/Location";

const EditAvocatProfile = () => {
  const form = useForm({
    defaultValues: {
      nom: "hamid",
      prenom: "hello",
      image: null,
      email: "e@gmail.com",
      phoneNumber: "055534343",
      facebookUrl: "facebook.com",
      description: "hello",
      longitude: 0,
      latitude: 0,
      wilaya: "alger",
      address: "algies hello",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        className="flex items-center py-6 flex-col gap-9"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
          <div className=" flex flex-col px-8 gap-8 after:block  after:content-[''] after:absolute after:-right-3 after:h-full after:w-[1px] after:bg-gray relative basis-[49%]">
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
            <CategoriesCheckbox form={form} />
            <p>your categories</p>
            {"hello, ehl"}
          </div>

          <div className=" flex flex-col px-8 gap-8 basis-[49%]">
            <Location form={form} />
            <p className=" space-x-3">
              <span>Full address:</span>
              <span>{form.getValues("address")}</span>
              <span>{form.getValues("wilaya")}</span>
            </p>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <CostumTextarea placeholder="Descriptions" field={field} />
              )}
            />
            <DaysOfWork form={form} />
            <p>Your days of work</p>
            {"dimanche, lundi.."}
            <HoursOfWork form={form} />
            <p>Your Hours of work</p>
            {"12-12, ..."}
          </div>
        </div>

        <Button className="px-[7rem] " type="submit">
          Sauvgardez les changement
        </Button>
      </form>
    </Form>
  );
};

export default EditAvocatProfile;
