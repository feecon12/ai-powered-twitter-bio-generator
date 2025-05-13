"use client";

import { createContext, useState } from "react";
// import { useFormState } from "react-dom";

interface BioContextType {
  output: { data: { bio: string }[] };
  loading: boolean;
  setOutput: React.Dispatch<React.SetStateAction<{ data: { bio: string }[] }>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const BioContext = createContext<BioContextType>({
  output: { data: [] },
  loading: false,
  setOutput: () => {},
  setLoading: () => {},
});

export const BioProvider = ({ children }: { children: React.ReactNode }) => {
  const [output, setOutput] = useState<{ data: { bio: string }[] }>({
    data: [],
  });
    const [loading, setLoading] = useState(false);
    console.log("Output:", output);     

  return (
    <BioContext.Provider value={{ output, setOutput, loading, setLoading }}>
      {children}
    </BioContext.Provider>
  );
};
