"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

export async function addCounter() {
  try {
    await kv.incr("counter");
    revalidatePath("/");
    return { message: "Incremented!" };
  } catch (error) {
    return { message: "Failed to increment" };
  }
}
