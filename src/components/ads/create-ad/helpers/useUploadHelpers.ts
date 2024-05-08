import { useToast } from "@chakra-ui/react";
import { FormikErrors } from "formik";
import { useRef } from "react";
import { fromBytesToMega } from "utils/fromBytesToMega";

const useUploadHelpers = (
  values: { images: Blob[] },
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<{
    images: Blob[];
  }>>
) => {
  const toast = useToast();

  const inputRef = useRef<HTMLInputElement>(null);

  const maxImagesCount = 5;

  const maxImageSize = 2;

  const onClickToUpload = () => {
    if (values.images.length === maxImagesCount) {
      return toast({
        title: "Sorry!, you have exceeded the maximum count of the images",
        status: "error",
        isClosable: true,
      });
    }

    inputRef.current?.click();
  };

  const onUploadImage = (image: Blob) => {
    if (fromBytesToMega(image?.size) > maxImageSize) {
      return toast({
        title: `Sorry! The max size of the image is 2MB and your image size is ${Math.round(
          fromBytesToMega(image?.size)
        )}MB`,
        status: "error",
        isClosable: true,
      });
    }

    if (image) {
      setFieldValue("images", [...values.images, image]);
    }
  };

  const onDeleteImage = (index: number) => {
    values.images.splice(index, 1);
    setFieldValue("images", [...values.images]);
  };

  return { inputRef, onClickToUpload, onUploadImage, onDeleteImage };
};

export { useUploadHelpers };
