import openai from "@/openAi";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const todos = await request.json();
  console.log("-------------> THE DATA IS :" + JSON.stringify(todos));

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 1,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding, Welcome the user always as Mr. Sushanth and say welcome to the Organizer! 
        Limit the response to 300 characters and try to add a joke at the end preferably indian jokes.`,
      },
      {
        role: "user",
        content: `Tell the user a joke! using the data. Here's the data : ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  const { data } = response;
  return NextResponse.json(data.choices[0].message);
}
