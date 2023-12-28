import * as React from "react"

// eslint-disable-next-line import/no-unresolved
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "h-10 w-full text-black  bg-transparent px-2 py-2 text-lg focus-visible:border-none focus:outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray disabled:cursor-not-allowed disabled:opacity-50 ",
        className
      )}
      ref={ref}
      {...props}
    />
  );
})
Input.displayName = "Input"

export { Input }
