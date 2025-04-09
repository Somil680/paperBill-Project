"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer bg-blue-200 focus-visible:border-blue-100 focus-visible:ring-blue-300 dark:bg-blue-200 inline-flex h-[1.25rem] w-10 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-blue-500 pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[1.4rem] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
