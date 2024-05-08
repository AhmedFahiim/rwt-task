import { useState } from "react";
import * as Yup from "yup";
import { AdInitialValues } from "./types";
import { useToast } from "@chakra-ui/react";

const useStepValidation = (
  step: 1 | 2 | 3,
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>
) => {
  const toast = useToast();

  /* ---------------------------------- */
  /*   Check the first step validation  */
  /* ---------------------------------- */

  const [errors, setErrors] = useState();

  const validationSchema = Yup.object({
    mark: Yup.string().required("You can't procced without selecting a mark"),
    model: Yup.string().required("You can't procced without selecting a model"),
    year: Yup.string().required("You can't procced without selecting a year"),
  });

  const stepOneValidation = async (values: AdInitialValues) => {
    try {
      await validationSchema.validateSync(values, {
        abortEarly: false,
      });

      setStep(2);
    } catch (error: any) {
      const erros = error.inner.map((err: any) => ({
        name: err.path,
        error: err.errors[0],
      }));

      setErrors(erros);
    }
  };

  /* ------------------ */
  /*   On next step   */
  /* ------------------ */
  const onNext = (values: AdInitialValues) => {
    if (step === 1) stepOneValidation(values);

    if (step === 2) {
      if (values.images.length !== 0) {
        setStep(3);
      } else {
        toast({
          title: "Please Upload atleast one image",
          status: "error",
          isClosable: true,
        });
      }
    }

    return { errors, stepOneValidation };
  };

  return { onNext };
};
export { useStepValidation };
