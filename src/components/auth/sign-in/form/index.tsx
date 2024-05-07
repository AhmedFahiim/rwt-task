import React from "react";
import { Formik, Form } from "formik";
import { useLoginActions } from "../helpers/useActions";
import { FormInput } from "@/ui/form-input";
import { Button } from "@/ui/button";

const initialValues = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const { onSubmit, isLoading } = useLoginActions();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-[25px]">
        <FormInput
          name="email"
          label={"Email"}
          placeholder={"example@email.com"}
          required
        />
        <FormInput
          type="password"
          name="password"
          label={"Password"}
          placeholder={"*************"}
          required
        />
        <Button className="text-lg font-semibold !bg-primary-100 !text-white !rounded-xl">
          Log in
        </Button>
      </Form>
    </Formik>
  );
}
