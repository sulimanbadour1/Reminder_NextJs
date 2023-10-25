"use client";
import { Collection } from "@prisma/client";
import React from "react";
import { Dialog, DialogContent } from "./ui/dialog";

interface Props {
  open: boolean;
  collection: Collection;
  setOpen: (open: boolean) => void;
}

function CreateTaskDialog({ open, setOpen, collection }: Props) {
  return (
    <Dialog>
      <DialogContent>Hey</DialogContent>
    </Dialog>
  );
}

export default CreateTaskDialog;
