import * as Yup from "yup";

const useLoginFormikHelpers = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("You can't leave this field empty"),
    password: Yup.string().required("You can't leave this field empty"),
  });

  return { validationSchema, initialValues };
};

export { useLoginFormikHelpers };
