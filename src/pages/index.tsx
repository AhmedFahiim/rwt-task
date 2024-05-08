import SignIn from "@/components/auth/sign-in";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Log in</title>
      </Head>
      <SignIn />
    </>
  );
}
