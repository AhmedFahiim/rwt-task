import * as yup from "yup";

const useCreateAdFormikHelpers = () => {
  const initialValues = {
    images: [],
    mark: "",
    model: "",
    year: "",
  };

  const validationSchema = yup.object({
    mark: yup.string().required("You can't procced without selecting a mark"),
    model: yup.string().required("You can't procced without selecting a model"),
    year: yup.string().required("You can't procced without selecting a year"),
    images: yup
      .string()
      .required("You can't procced without uploading at least one image"),
  });

  return { validationSchema, initialValues };
};

export { useCreateAdFormikHelpers };
