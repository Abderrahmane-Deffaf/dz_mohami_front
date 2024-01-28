import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import { Button } from "./ui/button";
import { User, Mail, KeyRound, Phone, Facebook } from "lucide-react";

import InputField from "./reusable/InputField";
import ImageInput from "./reusable/ImageInput";
import CategoriesCheckbox from "./reusable/CategoriesCheckbox";
import CostumTextarea from "./reusable/CostumTextarea";
import DaysOfWork, { DaysOfWorkList } from "./reusable/DaysOfWork";
import HoursOfWork from "./reusable/HoursOfWork";
import Location from "./reusable/Location";
import { base_url, categories } from "@/lib/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "@/routes/AuthContext";

const RegisterAvocatForm = () => {
  const times = ["1", "2", "3", "4"];
  const navigate = useNavigate();
  const { setUser } = useContext(authContext);

  const form = useForm({
    defaultValues: {
      nom: "",
      prenom: "",
      image: null,
      email: "",
      password: "",
      phoneNumber: "",
      facebookUrl: "",
      description: "",
      longitude: 0,
      latitude: 0,
      wilaya: "alger",
      address: "",
    },
  });

  const onSubmit = async (values) => {
    // removing null values ;
    const newValues = Object.entries(values).filter(
      (element) => element[1] && element
    );
    // getting the categories
    const cates = newValues.filter(
      (element) => categories.includes(element[0]) && element
    );

    // getting the days of work
    const days = newValues.filter(
      (element) => DaysOfWorkList.includes(element[0]) && element
    );
    // getting the times
    const hours = newValues.filter(
      (element) => times.includes(element[0]) && element
    );

    // substracting the arrays form the original
    const valuesNocategoires = newValues.filter(
      (element) => !cates.includes(element)
    );
    const valuesNoDays = valuesNocategoires.filter(
      (element) => !days.includes(element)
    );
    const valuesNoHours = valuesNoDays.filter(
      (element) => !hours.includes(element)
    );
    if (!cates.length || !days.length || !hours.length) {
      form.setError("root", {
        message: "categories and days and hours should not be emty",
      });
      return;
    }
    let categoriesValue = "";
    let daysValue = "";
    let hoursValue = "";
    cates.forEach((element, index) => {
      if (index + 1 == cates.length) {
        categoriesValue = categoriesValue + element[0];
      } else {
        categoriesValue = categoriesValue + element[0] + ",";
      }
    });
    days.forEach((element, index) => {
      if (index + 1 == days.length) {
        daysValue = daysValue + element[0];
      } else {
        daysValue = daysValue + element[0] + ",";
      }
    });
    hours.forEach((element, index) => {
      if (index + 1 == hours.length) {
        hoursValue = hoursValue + element[0];
      } else {
        hoursValue = hoursValue + element[0] + ",";
      }
    });

    const formData = new FormData();
    formData.append("categories", categoriesValue);
    formData.append("workDays", daysValue);
    formData.append("availabilityIds", hoursValue);
    valuesNoHours.map((element) => {
      if (element[0] == "image") {
        formData.append("image", values.image, values.image?.name);
      } else {
        formData.append(element[0], element[1]);
      }
    });

    try {
      const res = await axios.post(
        `${base_url}/auth/register-avocat`,
        formData
      );
      //console.log(res);
      if (res?.data?.token) {
        console.log("here");
        const currentDate = new Date();

        // Calculate the expiration date (current date + 8 hours)
        const expirationDate = new Date(
          currentDate.getTime() + 8 * 60 * 60 * 1000
        );

        // Convert the expiration date to the UTC format required by cookies
        const expiresUTC = expirationDate.toUTCString();
        document.cookie = `token=${res?.data?.token}; expires=${expiresUTC}; path=/`;
        setUser(res?.data?.token);
        navigate("/avocat-dashboard/home");
      }
    } catch (e) {
      console.log(e);
    }
  };

  function onError(e) {
    console.log(e);
  }
  return (
    <Form {...form}>
      <form
        className="flex items-center py-6 flex-col gap-9"
        onSubmit={form.handleSubmit(onSubmit, onError)}
        onChange={() => console.log(form.address, form.wilaya)}
      >
        <div className="flex justify-between">
          <div className=" flex flex-col px-8 gap-8 after:block  after:content-[''] after:absolute after:-right-3 after:h-full after:w-[1px] after:bg-gray relative basis-[49%]">
            <div className="flex justify-between ">
              <div className="flex basis-[65%] flex-col justify-between">
                <FormField
                  control={form.control}
                  name="nom"
                  rules={{ required: "Nom is required" }}
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
                  rules={{ required: "Prénom is required" }}
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
              <div className="basis-[30%] flex-col flex justify-end">
                <FormField
                  control={form.control}
                  name="image"
                  rules={{ required: "Image is required" }}
                  render={({ field }) => <ImageInput field={field} />}
                />
                {form.formState.errors.avatar?.message && (
                  <p className=" text-red">
                    {form.formState.errors.avatar.message}
                  </p>
                )}
              </div>
            </div>
            <FormField
              control={form.control}
              name="email"
              rules={{ required: "Email is required" }}
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
              rules={{ required: "Password is required" }}
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
              name="phoneNumber"
              rules={{ required: "Phone is required" }}
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
              rules={{ required: "Facebook is required" }}
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
          </div>

          <div className=" flex flex-col px-8 gap-8 basis-[49%]">
            <Location form={form} />
            <p className=" space-x-3">
              <span>full address:</span>
              <span>{form.getValues("address")}</span>
              <span>{form.getValues("wilaya")}</span>
            </p>

            <FormField
              control={form.control}
              name="description"
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <CostumTextarea placeholder="Descriptions" field={field} />
              )}
            />
            <DaysOfWork form={form} />
            <HoursOfWork form={form} />
          </div>
        </div>

        <Button className="px-[7rem] " type="submit">
          S&apos;inscrire
        </Button>
      </form>
    </Form>
  );
};

export default RegisterAvocatForm;
