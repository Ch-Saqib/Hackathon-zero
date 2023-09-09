"use client";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export type Uploadresult = {
  info: {
    public_id: string;
  };
  event: "success";
};
export default function Home() {
  const [imageId, setimageid] = useState("cld-sample-5");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: Uploadresult) => setimageid(result.info.public_id)}
        uploadPreset="xkm21nti"
      />
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
