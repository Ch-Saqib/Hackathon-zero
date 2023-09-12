"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { Markasfavorite } from "../app/gallery/actions";
import { ComponentProps, useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import { FullHeart } from "@/components/icons/full-heart";
import { ImageMenu } from "./image-menu";

export function CloudinaryImages(
  props: {
    imageData: SearchResult;

    onUnheart?: (unheartedResource: SearchResult) => void;
    [key: string]: any;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();

  const { imageData, onUnheart } = props;

  const [isFavorite, setisFavorite] = useState(
    imageData.tags.includes("favorite")
  );

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorite ? (
        <FullHeart
          onClick={() => {
            onUnheart?.(imageData);
            setisFavorite(false);
            startTransition(() => {
              Markasfavorite(imageData.public_id, false);
            });
          }}
          className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() => {
            setisFavorite(true);
            startTransition(() => {
              Markasfavorite(imageData.public_id, true);
            });
          }}
          className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
        />
      )}
      <ImageMenu image={imageData} />
    </div>
  );
}
