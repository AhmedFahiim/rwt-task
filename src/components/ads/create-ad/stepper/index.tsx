import React from "react";
import {
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper as ChakraStpper,
} from "@chakra-ui/react";
import clsx from "clsx";
import { AdInitialValues } from "../helpers/types";
import { useFormikContext } from "formik";

interface Props {
  activeStep: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onNext: (values: AdInitialValues) => void;
}

export default function Stepper({ activeStep, onNext, setStep }: Props) {
  const { values } = useFormikContext<AdInitialValues>();

  const steps = ["Basic information", "Images Upload", "Review information"];

  const onStepClick = (index: number) => {
    const newStep = index + 1;

    if (newStep < activeStep) {
      setStep(newStep);
    } else onNext(values);
  };

  return (
    <ChakraStpper
      size="sm"
      index={activeStep}
      className="max-w-[441px] mx-auto !gap-0"
    >
      {steps.map((step, index) => (
        <Step
          key={index}
          onClick={() => onStepClick(index)}
          className="cursor-pointer !gap-0"
        >
          <StepIndicator
            className={
              activeStep >= index + 1 ? "!bg-primary-100 text-white" : ""
            }
          >
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle
              className={clsx(
                "!text-xs !font-normal whitespace-nowrap  absolute top-10 -left-8",
                {
                  "text-primary-100": activeStep >= index + 1,
                }
              )}
            >
              {step}
            </StepTitle>
          </Box>

          <StepSeparator className="!m-0" />
        </Step>
      ))}
    </ChakraStpper>
  );
}
