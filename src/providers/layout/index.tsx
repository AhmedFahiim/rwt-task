import clsx from "clsx";
import { useSession } from "next-auth/react";
import React from "react";
import { onLogout } from "utils/onLogout";

interface Props {
  children: React.ReactNode;
}
export default function MainLayout({ children }: Props) {
  const { data: userSession } = useSession();

  return (
    <main>
      <header
        className={clsx(
          "bg-primary-100 md:px-[103px] md:pt-[46px] md:pb-[45px]",
          { session: "flex justify-end" }
        )}
      >
        {userSession && (
          <button
            onClick={onLogout}
            className="text-white text-xl font-semobild"
          >
            Log Out
          </button>
        )}
      </header>

      <section className="md:pb-[143px] md:pt-[73px]">{children}</section>
    </main>
  );
}
