import CreateAd from "@/components/ads/create-ad";
import Head from "next/head";
import React from "react";

type Props = {};

export default function CreateAdPage({}: Props) {
  return (
    <>
      <Head>
        <title>Create Ad</title>
      </Head>
      <CreateAd />
    </>
  );
}
