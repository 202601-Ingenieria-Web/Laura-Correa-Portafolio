import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-900 to-violet-700 px-6 py-3 text-sm font-bold uppercase tracking-normal text-white shadow-sm transition hover:from-purple-950 hover:to-violet-800 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </button>
  );
}
