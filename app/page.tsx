"use client";

import { useState } from "react";

export default function Home() {
  let [content, setContent] = useState<any>(undefined);
  async function inputHandler(e: any) {
    e.preventDefault;
    console.log(e.target.value);

    const todos = e.target.value;

    const res = await fetch("/api/chatGPT_API", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ HI: todos }),
    });

    const GPTdata = await res.json();
    setContent(GPTdata);

    console.log(content?.content);
  }
  return (
    <div>
      {content?.content ? content.content : "Nothing"}
      <input
        type="text"
        onChange={inputHandler}
        className="w-100 h-20 bg-black"
      />
    </div>
  );
}
