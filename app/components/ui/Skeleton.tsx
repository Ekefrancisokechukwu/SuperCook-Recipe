"use client";

import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonLoader() {
  return (
    <Card className="w-full space-y-5 p-4">
      <Skeleton className="rounded-lg">
        <div className="h-[20rem] rounded-lg bg-default-300"></div>
      </Skeleton>

      <div className="space-y-7">
        <Skeleton className="w-[27rem] mx-auto bg-gray-100 shadow-xl -mt-14 rounded-lg">
          <div className="h-[4rem]   rounded-lg "></div>
        </Skeleton>
        <div className=" space-y-5">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>

          <div>
            <Skeleton className="w-full rounded-lg ">
              <div className="h-9 w-2/5 rounded-lg  bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
      </div>
    </Card>
  );
}
