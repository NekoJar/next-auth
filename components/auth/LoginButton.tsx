"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { LoginForm } from "./LoginForm";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onCLick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return (
      <span>
        <Dialog>
          <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
          <DialogContent className="p-0 w-auto bg-transparent border-none">
            <LoginForm />
          </DialogContent>
        </Dialog>
      </span>
    );
  }

  return (
    <span onClick={onCLick} className="cursor-pointer">
      {children}
    </span>
  );
};
