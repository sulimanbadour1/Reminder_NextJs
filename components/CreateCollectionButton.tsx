"use client";

import { useState } from "react";
import { Button } from "./ui/button";

import CreateCollectionSheet from "./CreateSidebar";
import CreateSidebar from "./CreateSidebar";

function CreateCollectionButton() {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open: boolean) => setOpen(open);

  return (
    <div
      className="w-full rounded-md bg-gradient-to-r from-red-700 via-blue-500
    to-orange-700 p-[1px]"
    >
      <Button
        variant={"outline"}
        className="dark:text-white w-full dark:bg-neutral-950 bg-white"
        // the onclick handler here
        onClick={() => setOpen(true)}
      >
        <span
          className="bg-gradient-to-r from-red-700 via-blue-700
             to-orange-700 bg-clip-text text-transparent font-bold
              hover:via-red-700 hover:to-blue-700 hover:from-orange-700
               transition-all duration-500 ease-in-out"
        >
          Create Collection
        </span>
      </Button>
      <CreateCollectionSheet open={open} onOpenChange={handleOpenChange} />
    </div>
  );
}

export default CreateCollectionButton;
