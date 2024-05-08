import { Text } from "@/ui/text";
import React, { useState } from "react";
import Stepper from "./stepper";
import { Form, Formik } from "formik";
import AdStepOne from "./step-1";
import AdStepTwo from "./step-2";
import { Button } from "@/ui/button";
import { Stack, useSteps } from "@chakra-ui/react";
import { useStepValidation } from "./helpers/useStepValidation";
import { AdInitialValues } from "./helpers/types";

type Props = {};

const initialValues: AdInitialValues = {
  images: [],
  make: null,
  model: null,
  year: null,
};

export default function CreateAd({}: Props) {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: 3,
  });

  const { errors, onNext, onPrevious } = useStepValidation(
    activeStep,
    setActiveStep
  );

  return (
    <div className="max-w-[1025px] mx-auto">
      <Text
        as="h1"
        fontSize="34px"
        fontWeight="600"
        className="text-center mb-[45px]"
      >
        Post Your Ad
      </Text>

      {/* Ad Creation Form  */}
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ values }) => (
          <Form>
            {/* stepper */}
            <Stepper
              activeStep={activeStep}
              onNext={onNext}
              setStep={setActiveStep}
            />
            {[1, 3].includes(activeStep) ? <AdStepOne errors={errors} /> : ""}

            {[2, 3].includes(activeStep) ? <AdStepTwo /> : ""}

            <Stack
              alignItems="center"
              justifyContent={"center"}
              direction={"row"}
              spacing={4}
            >
              {activeStep !== 1 && (
                <Button
                  variant="outline"
                  className="font-medium text-lg md:w-[233px] h-[52px] !rounded-lg"
                  onClick={onPrevious}
                >
                  Previous
                </Button>
              )}
              <Button
                variant="solid"
                className="font-medium text-lg !bg-primary-100 !text-white md:w-[233px] h-[52px] !rounded-lg"
                onClick={() => onNext(values)}
              >
                {activeStep !== 3 ? "Next" : "Submit"}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  );
}
