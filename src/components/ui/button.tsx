import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
          "focus-visible:ring-neon-blue/60 focus-visible:ring-2 focus-visible:outline-none",
          variant === "primary" &&
            "from-neon-blue to-neon-purple hover:shadow-neon bg-gradient-to-r text-black hover:scale-[1.03]",
          variant === "outline" &&
            "border-neon-blue/50 text-foreground hover:border-neon-green border bg-white/5 hover:bg-white/10",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
