import { useToast } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const useLoginActions = () => {
  const { replace } = useRouter();

  const toast = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (values: { email: string; password: string }) => {
    setIsLoading(true);

    try {
      const data = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (data?.status === 200) void replace("/ads/create-ad");

      if (data?.status === 401) {
        return toast({
          title:
            "Oops! It seems like you've entered incorrect credentials. Please double-check your email and password and try again",
          status: "error",
          isClosable: true,
        });
      }
    } catch (error) {}

    setIsLoading(false);
  };

  return { onSubmit, isLoading };
};

export { useLoginActions };
