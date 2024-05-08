import { FormSelect } from "@/ui/form-select";
import { Card } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function AdStepOne({}: Props) {
  const dummyOptions = [
    { label: "Choice Number One", value: "1" },
    { label: "Choice Number Two", value: "2" },
    { label: "Choice Number Three", value: "3" },
  ];

  return (
    <Card className="!grid sm:grid-cols-2 gap-x-20 gap-y-[43px] md:mt-[87px] md:mb-[66px] shadow-[0px_0px_10px_2px_rgba(0, 0, 0, 0.10)] rounded-xl bg-white md:py-[42px] md:px-12">
      <FormSelect
        name="make"
        label={"Select  Make"}
        options={dummyOptions}
        placeholder="Select"
      />

      <FormSelect
        name="make"
        label={"Select a Model"}
        options={dummyOptions}
        placeholder="Select"
      />

      <FormSelect
        name="make"
        label={"Select A Year"}
        placeholder="Select"
        options={dummyOptions}
        wrapperClassName="sm:max-w-[220px] w-full"
      />
    </Card>
  );
}
