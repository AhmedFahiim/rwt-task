import { Card, Stack } from "@chakra-ui/react";
import React from "react";
import Upload from "@/svg/upload.svg";
import Delete from "@/svg/delete.svg";
import { Text } from "@/ui/text";
import { useFormikContext } from "formik";
import Image from "next/image";
import clsx from "clsx";
import { useUploadHelpers } from "../helpers/useUploadHelpers";

type Props = {};

export default function AdStepTwo({}: Props) {
  const { values, setFieldValue } = useFormikContext<{ images: Blob[] }>();

  const { inputRef, onClickToUpload, onDeleteImage, onUploadImage } =
    useUploadHelpers(values, setFieldValue);

  return (
    <Card className="h-[347px] !grid grid-cols-12 gap-7 md:my-[66px] md:py-[31px] md:ps-6 md:pe-[31px] !rounded-xl">
      {/* upload box */}
      <button
        className={clsx(
          "grid place-items-center h-full bg-[#F0F0F0] border-[1px] border-primary-200 border-dashed rounded-md col-span-12",
          { "col-span-6": values.images?.length > 0 }
        )}
        onClick={onClickToUpload}
      >
        <Stack alignItems="center" spacing={2}>
          <Upload />
          <Text fontSize="lg" className="!text-primary-200 block">
            Drag files to upload
          </Text>
        </Stack>
      </button>

      {/* uploaded images */}
      {values.images?.length > 0 && (
        <Stack spacing={5} className="sm:col-span-6 col-span-12">
          {values.images?.map((image, index: number) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              className="bg-[#F3F3F3] rounded-lg pe-2"
            >
              <Stack direction="row" alignItems="center">
                <a href={URL.createObjectURL(image)} target="_blank">
                  <Image
                    src={URL.createObjectURL(image)}
                    width={40}
                    height={40}
                    className="rounded !w-10 !h-10"
                    alt="Ad Image"
                  />
                </a>

                <Text>{image.name}</Text>
              </Stack>
              <button onClick={() => onDeleteImage(index)}>
                <Delete className="size-5" />
              </button>
            </Stack>
          ))}
        </Stack>
      )}

      {/* file input */}
      <input
        type="file"
        hidden
        ref={inputRef}
        accept="image/*"
        size={2000}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onUploadImage(e.target.files?.[0] as Blob)
        }
      />
    </Card>
  );
}
