import { useState } from "react";
import * as Yup from "yup";
import { AdInitialValues } from "./types";
import { useToast } from "@chakra-ui/react";

const useStepValidation = (
  step: number,
  setStep: React.Dispatch<React.SetStateAction<number>>
) => {
  const toast = useToast();

  /* ---------------------------------- */
  /*   Check the first step validation  */
  /* ---------------------------------- */

  const [errors, setErrors] = useState<{ name: string; error: string }[] | []>(
    []
  );

  const validationSchema = Yup.object({
    make: Yup.string().required("You can't procced without selecting a make"),
    model: Yup.string().required("You can't procced without selecting a model"),
    year: Yup.string().required("You can't procced without selecting a year"),
  });

  const stepOneValidation = async (
    values: AdInitialValues,
    updateStep = false
  ) => {
    try {
      await validationSchema.validateSync(values, {
        abortEarly: false,
      });

      updateStep && setStep(2);

      setErrors([]);
    } catch (error: any) {
      const erros = error.inner.map((err: any) => ({
        name: err.path,
        error: err.errors[0],
      }));

      setErrors(erros);
    }
  };

  const stepTwoValidation = (images: Blob[]) => {
    if (images.length !== 0) {
      setStep(3);
    } else {
      toast({
        title: "Please Upload at least one image",
        status: "error",
        isClosable: true,
      });
    }
  };

  /* ------------------ */
  /*   On next step   */
  /* ------------------ */
  const onNext = (values: AdInitialValues) => {
    if (step === 1) stepOneValidation(values, true);

    if (step === 2) stepTwoValidation(values.images);
  };

  /* ------------------ */
  /*   On previous step   */
  /* ------------------ */
  const onPrevious = () => setStep((prev) => prev - 1);

  return { onNext, onPrevious, stepOneValidation, errors };
};
export { useStepValidation };
