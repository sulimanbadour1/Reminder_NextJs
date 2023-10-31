import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "@radix-ui/react-icons";

export function NewLog() {
  return (
    <div className="p-4 items-center flex justify-center w-full ">
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="w-full rounded-md bg-gradient-to-r from-red-700 via-blue-500
    to-orange-700 p-[1px]"
          >
            <Button
              variant={"outline"}
              className="dark:text-white w-full dark:bg-neutral-950 bg-white"
              // the onclick handler here
            >
              <span
                className="bg-gradient-to-r from-red-700 via-blue-700
             to-orange-700 bg-clip-text text-transparent font-bold
              hover:via-red-700 hover:to-blue-700 hover:from-orange-700
               transition-all duration-500 ease-in-out"
              >
                Add logs
              </span>
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Log</DialogTitle>
            <DialogDescription>
              Create a new log to keep track of your daily tasks.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="hour" className="text-right">
                Hour
              </Label>
              <Input id="hour" type="number" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="note" className="text-right">
                Note
              </Label>
              <Input
                id="note"
                placeholder="What did you do today?"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
