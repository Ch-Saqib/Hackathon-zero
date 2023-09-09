"use client";

import { CloudinaryImages } from "../../components/cloudinary-images";
import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImages={(imageData: SearchResult) => {
        return (
          <CloudinaryImages
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}
