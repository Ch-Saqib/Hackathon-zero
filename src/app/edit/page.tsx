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
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>

        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => setTransformation(undefined)}>
            Clear All
          </Button>
          <div className="flex flex-col">
            <Button
              onClick={() => {
                setTransformation("generative-fill");
                setPrompt(pendingPrompt);
              }}
            >
              Apply Generative Fill
            </Button>
            <Label className="mt-4 mb-4">Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}
            />
          </div>
          {/* <Button onClick={() => setTransformation("Blur")}>Apply Blur</Button>
          <Button onClick={() => setTransformation("Grayscale")}>
            Convert to Gray
          </Button>
          <Button onClick={() => setTransformation("pixelate")}>
            Pixelate
          </Button> */}
          <Button onClick={() => setTransformation("removeBackground")}>
            Remove
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <CldImage src={publicId} width="300" height="200" alt="some image" />

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
            />
          )}
          {/* {transformation === "Blur" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="some image"
              blur
            />
          )}

          {transformation === "Grayscale" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="some image"
              grayscale
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="some image"
              pixalate
            />
          )} */}
          {transformation === "removeBackground" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="please wait"
              removeBackground
            />
          )}
        </div>
      </div>
    </section>
  );
}
