import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: any[]): string => {
  return twMerge(clsx(...inputs));
};

export default cn;
