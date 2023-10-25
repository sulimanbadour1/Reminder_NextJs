"use client";
import { Collection } from "@prisma/client";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CollectionColor, CollectionColors } from "@/lib/constants";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import PlusIcon from "./icons/PlusIcon";
import TrashIcon from "./icons/TrashIcon";
import { Alert } from "./ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { deleteCollection } from "@/actions/collection";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

interface Props {
  collection: Collection;
}
const tasks: String[] = ["Task 1", "Task 2"];

function CollectionCard({ collection }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  //
  const [isLoading, startTransition] = useTransition();

  // remove collection
  const removeCollection = async () => {
    try {
      await deleteCollection(collection.id);
      toast({
        title: "Success",
        description: "Collection deleted successfully!",
      });
      router.refresh();
    } catch (error) {
      console.log("Error while deleting collection", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later",
        variant: "destructive",
      });
    }
  };
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "flex w-full justify-between p-6",
            isOpen && "rounded-b-none",
            CollectionColors[collection.color as CollectionColor]
          )}
        >
          <span className="text-white font-bold">{collection.name}</span>
          {!isOpen && <CaretDownIcon className="h-6 w-6" />}
          {isOpen && <CaretUpIcon className="h-6 w-6" />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent
        className="flex rounded-b-md flex-col
      dark:bg-neutral-950 shadow-lg"
      >
        {tasks.length === 0 && <div>No Tasks</div>}
        {tasks.length > 0 && (
          <>
            <Progress className="rounded-none" value={45} />
            <div className="p-4 gap-3 flex flex-col">
              {tasks.map((task) => (
                <div key={task}>{task}</div>
              ))}
            </div>
          </>
        )}
        <Separator />
        <footer
          className="h-[40px] px-4 p-[2px] text-xs text-neutral-500
        flex justify-between items-center"
        >
          <p>Created at {collection.createdAt.toDateString()}</p>
          {isLoading && <div>Deleting...</div>}
          {!isLoading && (
            <div>
              <Button size={"icon"} variant={"ghost"}>
                <PlusIcon />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size={"icon"} variant={"ghost"}>
                    <TrashIcon />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogTitle>
                    Are you sure you want to delete this collection?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone, all tasks will be deleted.
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        startTransition(removeCollection);
                      }}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
        </footer>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default CollectionCard;
