import React from "react";
import { ErrorMessage, Field, FieldProps } from "formik";
import clsx from "clsx";
import { Select, SelectProps } from "@chakra-ui/react";

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
          <div className={clsx("w-full", wrapperClassName)}>
            <label htmlFor={name} className="block text-xl mb-2">
              {label} {required && <span className="text-danger-100">*</span>}
            </label>

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
                  : "!border-primary-200"
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
          </div>
        );
      }}
    </Field>
  );
}
