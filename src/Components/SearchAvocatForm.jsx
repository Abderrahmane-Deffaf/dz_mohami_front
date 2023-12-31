import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import CostumLink from "../Components/reusable/CostumLink";
// eslint-disable-next-line import/no-unresolved
import { User } from "lucide-react";
import SelectFilter from "../Components/reusable/SelectFilte";



import InputField from "./reusable/InputField";

import CategoriesCheckbox from "./reusable/CategoriesCheckbox";

const SearchAvocatName = () => {
    const form = useForm({
        defaultValues: {
            nom: "",
        },
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Form {...form}>
            <form
                className="flex items-center "
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="">
                    <div className="flex justify-between">
                        <FormField
                            control={form.control}
                            name="nom"
                            render={({ field }) => (
                                <InputField
                                    placeholder="Le nom de l’avocat"
                                    field={field}
                                    type="text"
                                    icon={<User />}
                                />
                            )}
                        />

                        <div className="text-nowrap"><CategoriesCheckbox form={form} /></div>
                    

                    <FormField
                        control={form.control}
                        name="wilaya"
                        render={({ field }) => (
                            <SelectFilter field={field} type={"wilaya"} />
                        )}
                    />
                        
                    </div>
                </div>

             <CostumLink dist={"/search"} text={"Search"} />
            </form>
        </Form>
    );
};

export default SearchAvocatName;
