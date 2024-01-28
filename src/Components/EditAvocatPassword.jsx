import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import { Button } from "./ui/button";
import { KeyRound } from "lucide-react";

import InputField from "./reusable/InputField";
import { useContext } from "react";
import { authContext } from "@/routes/AuthContext";
import axios from "axios";
import { base_url } from "@/lib/constants";
import { useToast } from "./ui/use-toast";

const EditAvocatPassword = () => {
  const { user } = useContext(authContext);
  const form = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = async (values) => {
    try {
      const res = await axios.post(
        `${base_url}/profile/change-password`,
        values,
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );
      console.log(res.data);
      if (res.data?.message) {
        toast({
          description: res.data.message,
        });
      }
    } catch (e) {
      toast({
        description: e?.message || "error",
        variant: "destructive",
      });
    }
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
