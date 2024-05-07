import React from "react";
import { ErrorMessage, Field, FieldProps } from "formik";
import clsx from "clsx";
import { Select } from "@chakra-ui/react";

interface SelectProps {
  name: string;
  label: string;
  required?: boolean;
  placeholder: string;
  options: { value: string; label: string }[];
  wrapperClassName?: string;
  error?: boolean;
}

export function FormSelect({
  placeholder,
  label,
  name,
  options,
  required,
  wrapperClassName,
  error,
  ...props
}: SelectProps & Partial<FieldProps>) {
  return (
    <Field name={name}>
      {({
        field,
        form: { values, setFieldValue, errors, touched },
      }: FieldProps) => {
        return (
          <div className={clsx("w-full", wrapperClassName)}>
            <Select
              // options={options}
              {...props}
              {...field}
              value={values?.[name]}
              // label={label}
              name={name}
              required={required}
              placeholder={placeholder}
              // error={Boolean(Boolean(touched[name]) && errors[name]) || error}
              onChange={(e: any) => setFieldValue(name, e.target.value)}
            />
            <div className="text-red-500 text-sm text-start mt-1">
              <ErrorMessage name={name} />
            </div>
          </div>
        );
      }}
    </Field>
  );
}
