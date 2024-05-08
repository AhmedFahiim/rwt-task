import React from "react";
import { Field, FieldProps, ErrorMessage } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import ShowPassword from "@/svg/show-password.svg";
import HidePassword from "@/svg/hide-password.svg";
import clsx from "clsx";

interface Props extends InputProps {
  label?: string;
  required?: boolean;
  wrapperClassName?: string;
}

export function FormInput({
  name,
  label,
  required,
  wrapperClassName,
  type = "text",
  ...props
}: Props) {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Field name={name}>
      {({ field, form: { errors, touched, setFieldValue } }: FieldProps) => {
        return (
          <FormControl className={wrapperClassName} isRequired={required}>
            <FormLabel className="!text-sm text-black">{label}</FormLabel>
            <InputGroup>
              <Input
                {...props}
                {...field}
                type={show || type === "text" ? "text" : "password"}
                className={clsx("bg-[#fff] !text-sm !rounded-xl", {
                  "!border-danger-100": Boolean(
                    Boolean(touched[name as string]) && errors[name as string]
                  ),
                  "!border-dark-300": !Boolean(
                    Boolean(touched[name as string]) && errors[name as string]
                  ),
                })}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue(name as string, e.target.value)
                }
              />

              {/* show password toggle button */}
              {type === "password" && (
                <InputRightElement width="4.5rem">
                  <button type="button" onClick={handleClick}>
                    {show ? <HidePassword /> : <ShowPassword />}
                  </button>
                </InputRightElement>
              )}
            </InputGroup>
            <span className="text-danger-100 block mt-1 text-sm">
              <ErrorMessage name={name as string} />
            </span>
          </FormControl>
        );
      }}
    </Field>
  );
}
