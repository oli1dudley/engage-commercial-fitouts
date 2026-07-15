import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-ink hover:bg-gold/85 rounded-[2px]",
        secondary:
          "bg-transparent text-cream border border-cream/30 hover:border-cream hover:bg-cream/5 rounded-[2px]",
        ghost:
          "text-cream hover:bg-cream/5 rounded-[2px]",
        outline:
          "border border-gold text-gold-bright bg-transparent hover:bg-gold hover:text-ink rounded-[2px]",
        link: "text-gold-bright underline-offset-4 hover:underline p-0 h-auto rounded-none",
      },
      size: {
        lg: "h-14 px-6 sm:px-8 text-base",
        md: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-sm",
        icon: "size-11 rounded-[2px]",
        "icon-sm": "size-9 rounded-[2px]",
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
