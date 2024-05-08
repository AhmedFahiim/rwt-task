import { Text } from "@/ui/text";
import { Stack } from "@chakra-ui/react";
import { useSession, signOut } from "next-auth/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function MainLayout({ children }: Props) {
  const { data: userSession } = useSession();

  return (
    <main>
      <header
        className={"bg-primary-100 lg:px-[103px] lg:pt-[46px] lg:pb-[45px] p-5"}
      >
        {userSession && (
          <Stack
            justifyContent="end"
            alignItems="center"
            direction="row"
            spacing={3}
          >
            <Text color="white" fontSize={"medium"}>
              {userSession?.name} |
            </Text>
            <button
              onClick={() => signOut()}
              className="text-white text-xl font-semobild"
            >
              Log Out
            </button>
          </Stack>
        )}
      </header>

      <section className="md:pb-[143px] md:pt-[73px]">{children}</section>
    </main>
  );
}
