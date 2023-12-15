import { AddCounter } from "./counter";
import r from "@/server/redis-server";

export default async function Home() {
  let data = await r.get("count");

  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center">
      <AddCounter />
      <p className="text-4xl font-extrabold tracking-tight">Hi! Minna</p>
      <div className="text-4xl font-extrabold tracking-tight flex gap-2 items-center">
        <p className="text-sm font-light text-red-500 text-center">Clicked</p>
        <span className="text-red-500">{data}</span>
        <p className="text-sm font-light text-red-500 text-center">times</p>
      </div>
    </div>
  );
}
