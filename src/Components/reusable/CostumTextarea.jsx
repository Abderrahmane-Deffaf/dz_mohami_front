import { FormControl, FormItem } from "../ui/form";
import { Textarea } from "../ui/textarea";

const CostumTextarea = ({field, placeholder}) => {
  return (
    <FormItem>
      <FormControl>
        <Textarea
          placeholder={placeholder}
          {...field}
        />
      </FormControl>
    </FormItem>
  );
}

export default CostumTextarea