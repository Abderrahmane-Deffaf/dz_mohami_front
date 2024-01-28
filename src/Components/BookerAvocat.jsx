import { useForm } from "react-hook-form";
import { Form, FormField } from "../Components/ui/form";
import { Phone } from "lucide-react";
// eslint-disable-next-line import/no-unresolved

import InputField from "../Components/reusable/InputField";
import CostumTextarea from "../Components/reusable/CostumTextarea";
import DatePickerDemo from "../Components/PickDate";
import HoursOfWork from "./reusable/HoursOfWork";


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
                            className="mb-1.5"
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <InputField
                                className="mb-1.5"
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
                            className="mb-1.5"
                            render={({ field }) => (
                                <CostumTextarea placeholder="Descriptions" field={field} />
                            )}
                        />
                        <DatePickerDemo/>
                        <HoursOfWork form={form} />
                    </div>
                </div>
             
            </form>
        </Form>
    );
};

export default BookerAvocat;
