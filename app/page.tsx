"use client";
export default function Home() {
  async function inputHandler(e: any) {
    e.preventDefault;
    console.log(e.target.value);

    const todos = e.target.value;

    const res = await fetch("/api/chatGPT_API", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todos }),
    });

    const GPTdata = await res.json();
    const { content } = GPTdata;

    console.log(content);
  }
  return (
    <div>
      <input
        type="text"
        onChange={inputHandler}
        className="w-100 h-20 bg-black"
      />
    </div>
  );
}
