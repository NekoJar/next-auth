import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

import React from "react";

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex-col gap-y-4 items-center justify-center flex">
      <h1 className={cn("text-4xl font-semibold", font.className)}>Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
