"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/useCurentUser";
import { signOut, useSession } from "next-auth/react";

const SettingPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <form>
        <button onClick={onClick} type="submit">
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingPage;
