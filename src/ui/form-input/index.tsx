import React from "react";
import { Field, FieldProps, ErrorMessage } from "formik";
import { InputComponent } from "ui/atoms/input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ElementType;
  label?: string;
  wrapperClassName?: string;
}

export function FormInput({
  name,
  label,
  Icon,
  wrapperClassName,
  ...props
}: Props) {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched, setFieldValue } }: FieldProps) => {
        return (
          <div className={wrapperClassName}>
            <InputComponent
              {...props}
              {...field}
              Icon={Icon}
              label={label}
              name={name}
              error={Boolean(
                Boolean(touched[name as string]) && errors[name as string]
              )}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFieldValue(name as string, e.target.value)
              }
            />

            <span className="text-danger-100 block mt-1 text-sm">
              <ErrorMessage name={name as string} />
            </span>
          </div>
        );
      }}
    </Field>
  );
}
