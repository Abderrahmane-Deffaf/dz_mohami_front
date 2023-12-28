import { useEffect, useState } from "react";
import { FormControl, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
// eslint-disable-next-line import/no-unresolved
import avatar from "@/assets/icons/avatar.png";

const ImageInput = ({ field }) => {

  const [preview, setPreview] = useState(avatar);
  // create a preview from the initial image
  useEffect(() => {
    if (field?.value) {
      setPreview(field?.value);
    }
  }, [field?.value]);
  return (
    <FormItem>
      <FormLabel
        htmlFor={field?.name}
        className="relative overflow-hidden  flex h-[8rem]  w-[8rem]   cursor-pointer  items-center justify-center rounded-lg   "
      >
          <img
            className="h-full w-full object-cover  "
            src={preview}
            alt="preview"
          />
      </FormLabel>
      <FormControl>
        <Input
          className="hidden"
          onChange={(event) => {
            const file = event?.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setPreview(reader?.result );
              };
              reader.readAsDataURL(file);
            } else {
              setPreview(avatar);
            }
            field?.onChange(event?.target?.files[0]);
          }}
          accept="image/*"
          type="file"
          id={field?.name}
          name={field?.name || "image"}
        />
      </FormControl>
    </FormItem>
  );
};

export default ImageInput;
