import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import { Button } from "./ui/button";
import { User, Mail, Phone, Facebook } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import InputField from "./reusable/InputField";
import ImageInput from "./reusable/ImageInput";
import CategoriesCheckbox from "./reusable/CategoriesCheckbox";
import CostumTextarea from "./reusable/CostumTextarea";
import DaysOfWork from "./reusable/DaysOfWork";
import HoursOfWork from "./reusable/HoursOfWork";
import Location from "./reusable/Location";
import { useContext, useEffect, useState } from "react";
import { authContext } from "@/routes/AuthContext";
import { getAvocatProfile } from "@/Fetches/avocatDashboard";
import Loader from "./reusable/Loader";

const EditAvocatProfile = () => {
  const { user } = useContext(authContext);

  const form = useForm({
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      address: "",
      wilaya: "",
      phoneNumber: "",
      facebookUrl: "",
      description: "",
      longitude: 0,
      latitude: 0,
      image: null,
    },
  });
  const { data, isLoading } = useQuery({
    queryKey: ["avocat-profile"],
    queryFn: async () => {
      return getAvocatProfile(user);
    },
  });

  useEffect(() => {
    if (isLoading) return;
    console.log(data);
    if (data) {
      form.setValue("nom", data.nom);
      form.setValue("prenom", data.prenom);
      form.setValue("email", data.email);
      form.setValue("address", data.address);
      form.setValue("wilaya", data.wilaya);
      form.setValue("phoneNumber", data.phoneNumber);
      form.setValue("facebookUrl", data.facebookUrl);
      form.setValue("description", data.description);
      form.setValue("longitude", data.longitude);
      form.setValue("latitude", data.latitude);
      form.setValue("image", data.image);
    }
  }, [isLoading]);

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
                      name="image"
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
                  name="phoneNumber"
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
                  name="facebookUrl"
                  render={({ field }) => (
                    <InputField
                      type="text"
                      placeholder="Facebook"
                      field={field}
                      icon={<Facebook />}
                    />
                  )}
                />
                <div className="flex flex-col gap-2">
                  <CategoriesCheckbox form={form} />
                  <p className=" font-semibold">your categories</p>
                  <div className="flex flex-wrap gap-1">
                    {data?.categories?.map((Element, index) => (
                      <span key={index}>{Element}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className=" flex flex-col px-8 gap-8 basis-[49%]">
                <div className="flex flex-col gap-2">
                  <Location form={form} />
                  <p className=" space-x-3">
                    <span className=" font-semibold">Full address:</span>
                    <span>{data?.address}</span>
                    <span>{data?.wilaya}</span>
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <CostumTextarea placeholder="Descriptions" field={field} />
                  )}
                />
                <div className="flex flex-col gap-2">
                  <DaysOfWork form={form} />
                  <p className=" font-semibold">Your days of work</p>
                  <div className="flex flex-wrap gap-1">
                    {data?.workDays?.map((Element, index) => (
                      <span key={index}>{Element}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <HoursOfWork form={form} />
                  <p className=" font-semibold">Your Hours of work</p>
                  <div className=" flex flex-wrap gap-2">
                    {data?.availabilityIds?.map((Element, index) => {
                      if (Element == 1) {
                        return "08:00 - 10:00";
                      } else if (Element == 2) {
                        return "10:00 - 12:00";
                      } else if (Element == 3) {
                        return "13:00 - 15:00";
                      } else if (Element == 4) {
                        return "15:00 - 17:00";
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Button className="px-[7rem] " type="submit">
              Sauvgardez les changement
            </Button>
          </form>
        </Form>
      )}
    </>
  );
};

export default EditAvocatProfile;
