import React, { useState } from "react";
import { Button } from "../ui/button";
// import { text } from "stream/consumers";

const CopyLabel = ({ text }: { text: string }) => {
  const [label, setLabel] = useState("Copy");
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setLabel("Copied!");
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
    };

  const handleClick = () => {
    copyToClipboard();
    setLabel("Copied...");
  };
    return <Button onClick={handleClick} variant={"outline"} className="text-sm text-muted-foreground bg-background my-0h-auto rounded-none border border-primary/20 border-t-0 rounded-b-lg hoover:bg-primary hoover:text-primary-forground pb-5">{label}</Button>;
};

export default CopyLabel;
