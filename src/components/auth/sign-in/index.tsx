import React from "react";
import SignInForm from "./form";
import { Text } from "@/ui/text";

export default function SignIn() {
  return (
    <div className="max-w-[520px] mx-auto px-5">
      <Text
        as="h1"
        fontSize="34px"
        fontWeight="600"
        className="text-center md:mb-12 mb-6"
      >
        Log in
      </Text>

      {/* Sign-in Form */}
      <SignInForm />
    </div>
  );
}
