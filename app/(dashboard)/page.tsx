import { Skeleton } from "@/components/ui/skeleton";
import { wait } from "@/lib/wait";
import { currentUser } from "@clerk/nextjs";
import { Suspense } from "react";

interface user {
  firstName: string;
  lastName: string;
  email: string;
}
export default async function Home() {
  return (
    <div>
      <Suspense fallback={<WelcomeMsgFallback />}>
        <WelcomeMsg />
      </Suspense>
    </div>
  );
}

async function WelcomeMsg() {
  const user = await currentUser();
  await wait(500);
  if (!user) {
    return <div>Error, Name not found</div>;
  }

  return (
    <div className="flexx w-full ">
      <h1 className="text-2xl font-bold">
        Welcome, {user.firstName} <br />
        This is a reminder app for you, by you.
      </h1>
    </div>
  );
}

function WelcomeMsgFallback() {
  return (
    <div className="flexx w-full ">
      <h1 className="text-xl font-bold">
        <Skeleton className="w-[150px] h-[36px]" />
        <Skeleton className="w-[150px] h-[36px]" />
      </h1>
    </div>
  );
}
