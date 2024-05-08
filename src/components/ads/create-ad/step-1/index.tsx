import { FormSelect } from "@/ui/form-select";
import { Card } from "@chakra-ui/react";
import React from "react";

interface Props {
  errors: { name: string; error: string }[] | [];
}
export default function AdStepOne({ errors }: Props) {
  const dummyOptions = [
    { label: "Choice Number One", value: "1" },
    { label: "Choice Number Two", value: "2" },
    { label: "Choice Number Three", value: "3" },
  ];

  return (
    <Card className="!grid sm:grid-cols-2 gap-x-20 gap-y-[43px] md:mt-[87px] md:mb-[66px] shadow-[0px_0px_10px_2px_rgba(0, 0, 0, 0.10)] rounded-xl bg-white md:py-[42px] md:px-12">
      <div>
        <FormSelect
          name="make"
          label={"Select a Make"}
          placeholder="Select"
          options={dummyOptions}
          error={errors.map((err) => err.name).includes("make")}
        />
        {errors.map((err) => err.name).includes("make") && (
          <div className="text-danger-100 text-sm text-start mt-1">
            {errors.find((err) => err.name === "make")?.error}
          </div>
        )}
      </div>

      <div>
        <FormSelect
          name="model"
          label={"Select a Model"}
          placeholder="Select"
          options={dummyOptions}
          error={errors.map((err) => err.name).includes("model")}
        />
        {errors.map((err) => err.name).includes("model") && (
          <div className="text-danger-100 text-sm text-start mt-1">
            {errors.find((err) => err.name === "model")?.error}
          </div>
        )}
      </div>

      <div>
        <FormSelect
          name="year"
          label={"Select A Year"}
          placeholder="Select"
          options={dummyOptions}
          error={errors.map((err) => err.name).includes("model")}
          wrapperClassName="sm:max-w-[220px] w-full"
        />

        {errors.map((err) => err.name).includes("year") && (
          <div className="text-danger-100 text-sm text-start mt-1">
            {errors.find((err) => err.name === "year")?.error}
          </div>
        )}
      </div>
    </Card>
  );
}
