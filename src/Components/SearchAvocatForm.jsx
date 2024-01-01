import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import CostumLink from "../Components/reusable/CostumLink";
// eslint-disable-next-line import/no-unresolved
import { Search } from "lucide-react";
import SelectFilter from "../Components/reusable/SelectFilter";
import Checkbox from "./reusable/CheckBoxDemo";
import InputField from "./reusable/InputField";
import CategoriesCheckbox from "./reusable/CategoriesCheckbox";


const SearchAvocatForm = () => {
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
                className="flex items-center  justify-around"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="flex items-center flex-row justify-between">
                    <FormField
                        control={form.control}
                        name="nom"
                        render={({ field }) => (
                            <InputField
                                placeholder="Le nom de l’avocat"
                                field={field}
                                type="text"
                                icon={<Search />}
                            />
                        )}
                    />
                    <CategoriesCheckbox form={form} />
                    <FormField
                        control={form.control}
                        name="wilaya"
                        render={({ field }) => (
                            <SelectFilter field={field} type={"wilaya"} />
                        )}
                    />
                </div>
                
                <Checkbox />
                <CostumLink dist={"/search"} text={"Search"} />
            </form>
        </Form>
    );
};

export default SearchAvocatForm;
