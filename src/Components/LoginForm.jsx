import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import { Button } from "./ui/button";
// eslint-disable-next-line import/no-unresolved
import { Mail, KeyRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import InputField from "./reusable/InputField";
import GoogleButton from "./reusable/GoogleButton";
import { useContext, useEffect, useState } from "react";
import { base_url } from "@/lib/constants";
import axios from "axios";
import { getUser } from "@/Fetches/global";
import { authContext } from "@/routes/AuthContext";

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //const [googleUrl, setGoogleUrl] = useState(null);
  const { setUser } = useContext(authContext);
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    console.log(values);

    try {
      const res = await axios.post(`${base_url}/auth/login`, values);
      const data = res?.data;
      if (data) {
        if (data?.token) {
          setUser(data.token);
          const currentDate = new Date();

          // Calculate the expiration date (current date + 8 hours)
          const expirationDate = new Date(
            currentDate.getTime() + 8 * 60 * 60 * 1000
          );

          // Convert the expiration date to the UTC format required by cookies
          const expiresUTC = expirationDate.toUTCString();
          document.cookie = `token=${data?.token}; expires=${expiresUTC}; path=/`;
          console.log("Cookie set:", document.cookie);
          try {
            const infos = await getUser(data.token, "/auth/me");
            console.log(infos);
            if (infos) {
              //const role = infos?.role;
              if (infos?.role == "avocat") {
                navigate("/avocat-dashboard/home");
              }
            }
          } catch (e) {
            console.log(e);
          }
        }
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
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
        <Button
          disabled={form.formState.isSubmitting}
          className="w-full"
          type="submit"
        >
          Se connecter
        </Button>
        <GoogleButton />
      </form>
    </Form>
  );
};

export default LoginForm;
