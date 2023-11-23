"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "Blur"
    | "Grayscale"
    | "pixelate"
    | "removeBackground"
  >();

  const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");

  return (
    <section className="container ">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">Edit by Saqib </h1>
        </div>

        <div className="flex flex-col md:flex-row  flex-wrap gap-4 px-10">
          <Button
            variant="ghost"
            onClick={() => setTransformation(undefined)}
            className="w-[100px] h-[40px]"
          >
            Clear All
          </Button>
          <div className="flex flex-col">
            <Button
              onClick={() => {
                setTransformation("generative-fill");
                setPrompt(pendingPrompt);
              }}
              className="w-[180px] h-[40px]"
            >
              Apply Generative Fill
            </Button>
            <Label className="mt-4 mb-4">Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}
              className="w-[180px] h-[40px]"
            />
          </div>
          <Button onClick={() => setTransformation("Blur")}  className="w-[180px] h-[40px]">Apply Blur</Button>
          <Button onClick={() => setTransformation("Grayscale")}  className="w-[180px] h-[40px]">
            Convert to Gray
          </Button>
          <Button onClick={() => setTransformation("pixelate")}  className="w-[180px] h-[40px]">
            Pixelate
          </Button>
          <Button onClick={() => setTransformation("removeBackground")}  className="w-[180px] h-[40px]">
            Remove
          </Button>
        </div>
         
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 flex-wrap">
          <CldImage
            src={publicId}
            width="300"
            height="200"
            alt="some image"
            className="w-full h-auto"
          />

          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width="1800"
              height="1200"
              alt="some image"
              crop="pad"
              fillBackground={{
                prompt,
              }}
              className="w-full h-auto"
            />
          )}
          {transformation === "Blur" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="some image"
              effects={[{ blur: "800" }]}
              className="w-full h-auto"
            />
          )}

          {transformation === "Grayscale" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="some image"
              effects={[{ grayscale: true }]}
              className="w-full h-auto"
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="some image"
              effects={[{ pixelate: true }]}
              className="w-full h-auto"
            />
          )}
          {transformation === "removeBackground" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="please wait"
              removeBackground
              className="w-full h-auto"
            />
          )}
        </div>
      </div>
    </section>
  );
}
