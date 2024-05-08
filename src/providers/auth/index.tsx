import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const { asPath, replace } = useRouter();

  const session = useSession();

  // check if the user session is still valid
  useEffect(() => {
    const sessionChecking = async () => {
      const session = await getSession();

      if (!session) {
        void replace("/");
      }
    };

    if (!isPublic(asPath)) sessionChecking();
  }, [asPath]);

  if (session || isPublic(asPath)) {
    return <>{children}</>;
  }
}

const isPublic = (url: string) => {
  const publicRoutes = [/^\/(\?.*)?$/, /^\/404$/];

  return publicRoutes.some((path) => path.test(url));
};
