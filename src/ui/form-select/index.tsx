import React from "react";
import { ErrorMessage, Field, FieldProps } from "formik";
import clsx from "clsx";
import { FormControl, FormLabel, Select, SelectProps } from "@chakra-ui/react";

interface Props extends SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  error?: boolean;
  required?: boolean;
  wrapperClassName?: string;
}

export function FormSelect({
  placeholder,
  label,
  name,
  options,
  required,
  error,
  wrapperClassName,
  ...props
}: Props & Partial<FieldProps>) {
  return (
    <Field name={name}>
      {({
        field,
        form: { values, touched, errors, setFieldValue },
      }: FieldProps) => {
        return (
          <FormControl
            className={clsx("w-full", wrapperClassName)}
            isRequired={required}
          >
            <FormLabel className="text-dark-200">{label}</FormLabel>

            <Select
              {...props}
              {...field}
              name={name}
              required={required}
              value={values[name as string]}
              placeholder={placeholder}
              className={
                Boolean(Boolean(touched[name]) && errors[name]) || error
                  ? "!border-danger-100"
                  : "!border-dark-400"
              }
              onChange={(e: any) =>
                setFieldValue(name as string, e.target.value)
              }
            >
              {options.map((option) => (
                <option key={option.value}>{option.label}</option>
              ))}
            </Select>
            <div className="text-danger-100 text-sm text-start mt-1">
              <ErrorMessage name={name as string} />
            </div>
          </FormControl>
        );
      }}
    </Field>
  );
}
