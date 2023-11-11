import CollectionCard from "@/components/CollectionCard";
import CreateCollectionButton from "@/components/CreateCollectionButton";
import Footer from "@/components/Footer";
import { NewLog } from "@/components/NewLog";
import SadFace from "@/components/icons/SadFace";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { prisma } from "@/lib/prisma";
import { wait } from "@/lib/wait";
import { currentUser } from "@clerk/nextjs";
import e from "express";
import { Suspense } from "react";

// interface user {
//   firstName: string;
//   lastName: string;
//   email: string;
// }
export default async function Home() {
  return (
    <div>
      <Suspense fallback={<WelcomeMsgFallback />}>
        <WelcomeMsg />
      </Suspense>
      <Suspense fallback={<div>Loading Collections.</div>}>
        {/* <NewLog /> */}
        <CollectionList />
        <Footer />
      </Suspense>
    </div>
  );
}

async function WelcomeMsg() {
  try {
    const user = await currentUser();
    await wait(1000);
    if (!user) {
      return <div>Error, Name not found</div>;
    }

    return (
      <div className="flexx w-full mb-12 ">
        <h1 className="text-2xl font-bold">
          Welcome,{" "}
          <span
            className="bg-gradient-to-r
    from-red-700 via-blue-700 to-red-600 bg-clip-text text-transparent text-2xl font-bold"
          >
            {" "}
            {user.firstName}
          </span>{" "}
          <br />
          This is a reminder app for you, by you.
        </h1>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return <div>An error occurred while fetching user data.</div>;
  }
}

function WelcomeMsgFallback() {
  return (
    <div className="flexx w-full mb-12">
      <h1 className="text-xl font-bold">
        <Skeleton className="w-[150px] h-[36px]" />
        <Skeleton className="w-[150px] h-[36px]" />
      </h1>
    </div>
  );
}

async function CollectionList() {
  try {
    const user = await currentUser();

    const collections = await prisma.collection.findMany({
      include: {
        tasks: true,
      },
      where: {
        userId: user?.id,
      },
    });

    if (collections.length === 0) {
      return (
        <div className="flex flex-col gap-5">
          <Alert>
            <SadFace />
            <AlertTitle>There are no collections yet!</AlertTitle>
            <AlertDescription>
              Please, Create a collection to start 😃
            </AlertDescription>
          </Alert>
          <CreateCollectionButton />
        </div>
      );
    }

    return (
      <>
        <CreateCollectionButton />
        <div className="flex flex-col gap-4 mt-6">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching collections:", error);
    return <div>An error occurred while fetching collections.</div>;
  }
}
