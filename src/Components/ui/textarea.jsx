import * as React from "react"

// eslint-disable-next-line import/no-unresolved
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[100px] w-full rounded-lg  bg-white px-3 py-2 text-lg placeholder:text-gray text-black focus-visible:outline-none focus-visible:border-none disabled:cursor-not-allowed disabled:opacity-50 ",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
