"use client";
import { CloudinaryImages } from "@/components/cloudinary-images";
import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

const MAX_COLUMNS = 4;

export function ImageGrid({
  images,
  getImages,
}: {
  images: SearchResult[];

  getImages: (imageData: SearchResult) => ReactNode;
}) {
  function GetColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 ml-[40px] md:ml-0 lg:ml-0">
      {[GetColumns(0), GetColumns(1), GetColumns(2), GetColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map(getImages)}
          </div>
        )
      )}
    </div>
  );
}
