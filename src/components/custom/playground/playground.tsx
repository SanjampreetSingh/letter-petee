"use client";

import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Playground() {
  const [letter, setLetter] = useState<string>("");

  return (
    <div className="flex h-[240px] flex-row gap-10">
      <Textarea onChange={(e) => setLetter(e.target.value)} />
      <>
        <Separator orientation="vertical" className="h-full">
          {" "}
        </Separator>
      </>
      <div>{letter}</div>
    </div>
  );
}
