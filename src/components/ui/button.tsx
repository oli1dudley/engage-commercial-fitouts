import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-white hover:bg-brand-hover shadow-sm hover:shadow-md rounded-[12px]",
        secondary:
          "bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white rounded-[12px]",
        whatsapp:
          "bg-whatsapp text-white hover:bg-whatsapp-hover shadow-sm hover:shadow-md rounded-[12px]",
        ghost:
          "text-navy hover:bg-navy/5 rounded-[12px]",
        outline:
          "border-2 border-brand text-brand bg-transparent hover:bg-brand hover:text-white rounded-[12px]",
        link: "text-brand underline-offset-4 hover:underline p-0 h-auto rounded-none",
        navy: "bg-navy text-white hover:bg-navy/90 shadow-sm hover:shadow-md rounded-[12px]",
      },
      size: {
        lg: "h-14 px-8 text-base",
        md: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-sm",
        icon: "size-11 rounded-[12px]",
        "icon-sm": "size-9 rounded-[10px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
