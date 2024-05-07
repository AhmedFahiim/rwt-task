import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const useLoginActions = () => {
  const { replace } = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (values: any) => {
    setIsLoading(true);

    try {
      const data = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      const session: any = await getSession();

      if (session) {
        const redirectPortal =
          (await session?.user?.user_type_text) === "company"
            ? "business"
            : (await session?.user?.user_type_text) === "student"
            ? "learner"
            : await session?.user?.user_type_text;

        void replace(`/${redirectPortal}/dashboard`);
      }

      if (data?.status === 401) {
      }
    } catch (error) {}

    setIsLoading(false);
  };

  // get user data from storage if it saved before
  // useEffect(() => {
  //   const rememberdUser = sessionStorage.getItem('saved_user')

  //   if (rememberdUser) {
  //     setSavedData(JSON.parse(rememberdUser))
  //   }
  // })

  return { onSubmit, isLoading };
};

export { useLoginActions };
