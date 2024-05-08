import React from "react";
import { Field, FieldProps, ErrorMessage } from "formik";
import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import ShowPassword from "@/svg/show-password.svg";
import HidePassword from "@/svg/hide-password.svg";

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
          <InputGroup
            className={wrapperClassName}
            __css={{ flexDir: "column" }}
          >
            <label htmlFor={name} className="block text-sm mb-1">
              {label} {required && <span className="text-danger-100">*</span>}
            </label>

            <Input
              {...props}
              {...field}
              type={show || type === "text" ? "text" : "password"}
              className="!border-typo-300 bg-[#fff] !text-sm !rounded-xl"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFieldValue(name as string, e.target.value)
              }
            />

            {/* show password toggle button */}
            {type === "password" && (
              <InputRightElement width="4.5rem">
                <button onClick={handleClick}>
                  {show ? <HidePassword /> : <ShowPassword />}
                </button>
              </InputRightElement>
            )}

            <span className="text-danger-100 block mt-1 text-sm">
              <ErrorMessage name={name as string} />
            </span>
          </InputGroup>
        );
      }}
    </Field>
  );
}
