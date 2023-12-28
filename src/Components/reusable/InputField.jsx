import { FormControl, FormItem } from "../ui/form";
import { Input } from "../ui/input";

const InputField = ({ placeholder, field, icon, type }) => {
  return (
    <FormItem className="w-full">
      <FormControl>
        <div className="flex  items-center bg-white rounded-lg px-2 py-2 ">
          {icon}
          <Input type={type} placeholder={placeholder} {...field} />
        </div>
      </FormControl>
    </FormItem>
  );
};

export default InputField;
