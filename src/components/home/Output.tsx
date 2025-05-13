"use client";
import React, { useContext } from "react";
import { Badge } from "../ui/badge";
import { BorderBeam } from "../magicui/border-beam";
import { BioContext } from "@/context/BioContext";
import { Skeleton } from "../ui/skeleton";
import CopyLabel from "./CopyLabel";

const Output = () => {
  const { output, loading } = useContext(BioContext);
  return (
    <div className="relative flex min-h-[50vh] mt-2 flex-col rounded-xl bg-muted/50 backdrop-blur-sm overflow-hidden border border-primary/5">
      {loading && (
        <BorderBeam
          size={1000}
          duration={4}
          className="z-10"
        />
      )}
      <Badge variant={"outline"} className="absolute top-3 right-3 z-50">
        Output
      </Badge>
      {loading ? (
        <Skeleton className="w-full h-full z-10 bg-primary/30" />
      ) : (
        <ul className="flex flex-col items-start justify-start space-y-12 p-16">
          {output?.data.map((data, index) => {
            return (
              <li
                key={index}
                className="w-full text-base border border-primary/20 rounded-md p-4 relative bg-background"
              >
                {data.bio}
                <span className="absolute top-[99%] right-0">
                  <CopyLabel text={data.bio} />
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Output;
