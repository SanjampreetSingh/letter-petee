"use client";

import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Playground() {
  const [letter, setLetter] = useState<string>("");

  return (
    <main className="flex h-[70vh] flex-col gap-8 px-8 md:flex-row">
      <Textarea
        onChange={(e) => setLetter(e.target.value)}
        className="flex-1 resize-none rounded-lg border border-gray-300 bg-white p-4 shadow-lg"
      />

      <Separator orientation="vertical" className="h-full"></Separator>
      <div className="flex-1 overflow-auto whitespace-pre-wrap break-all rounded-lg border border-gray-300 bg-white p-4 shadow-lg">
        {letter}
      </div>
    </main>
  );
}
