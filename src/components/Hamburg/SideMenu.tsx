
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart } from "@/components/icons/heart";
import { Folder } from "@/app/albums/page";


interface SideMenuProps {
  folders: Folder[];
}

const SideMenu: React.FC<SideMenuProps> = ({ folders }) => {
  return (
    <div className="pb-12 w-full md:w-1/5 md:flex-shrink-0">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href="/gallery">Gallery</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href="/albums">Albums</Link>
            </Button>
            {folders.map((folder) => (
              <Button
                asChild
                key={folder.name}
                className="w-full justify-start flex gap-2"
                variant="ghost"
              >
                <Link href={`/albums/${folder.path}`}>{folder.name}</Link>
              </Button>
            ))}
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href="/favorites">
                <Heart />
                Favorites
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
