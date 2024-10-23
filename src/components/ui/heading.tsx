import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const headingVariants = cva("", {
  variants: {
    size: {
      base: "text-xl font-bold",
      sm: "text-base font-semibold",
      lg: "text-3xl font-bold",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

interface HeadingProps
  extends ComponentProps<"h1">,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({ as = "h2", ...rest }: HeadingProps) {
  const Component = as;

  return (
    <Component
      {...rest}
      className={headingVariants({
        size: rest.size,
      })}
    />
  );
}
