import { Text } from "@/ui/text";
import React, { useState } from "react";
import Stepper from "./stepper";
import { Form, Formik } from "formik";
import { useCreateAdActions } from "./helpers/use-step-validation";
import AdStepOne from "./step-1";
import AdStepTwo from "./step-2";
import { Button } from "@/ui/button";
import { Stack } from "@chakra-ui/react";
import { useCreateAdFormikHelpers } from "./helpers/use-formik-helpers";

type Props = {};

export default function CreateAd({}: Props) {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(2);

  const { initialValues, validationSchema } = useCreateAdFormikHelpers();

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

      {/* stepper */}
      <Stepper />

      {/* Ad Creation Form  */}
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>
          {[1, 3].includes(activeStep) ? <AdStepOne /> : ""}

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
              >
                Previous
              </Button>
            )}
            <Button
              variant="solid"
              className="font-medium text-lg !bg-primary-100 !text-white md:w-[233px] h-[52px] !rounded-lg"
            >
              {activeStep !== 3 ? "Next" : "Submit"}
            </Button>
          </Stack>
        </Form>
      </Formik>
    </div>
  );
}
