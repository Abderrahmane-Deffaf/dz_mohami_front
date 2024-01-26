import { useForm } from "react-hook-form";
import { Form, FormField } from "../Components/ui/form";
import { Phone } from "lucide-react";
// eslint-disable-next-line import/no-unresolved

import InputField from "../Components/reusable/InputField";
import CostumTextarea from "../Components/reusable/CostumTextarea";
import DatePickerDemo from "../Components/PickDate";


const BookerAvocat = () => {
    const form = useForm({
        defaultValues: {
            phone: "",
            description: "",
        },
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Form {...form}>
            <form
                className=""
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="p-5">
                    <div>

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
                            name="description"
                            render={({ field }) => (
                                <CostumTextarea placeholder="Descriptions" field={field} />
                            )}
                        />
                        <DatePickerDemo />
                    </div>
                </div>
             
            </form>
        </Form>
    );
};

export default BookerAvocat;
