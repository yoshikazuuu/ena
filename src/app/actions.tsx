"use server";

import r from "@/server/redis-server";
import { revalidatePath } from "next/cache";

export async function addCounter() {
  try {
    await r.incr("count");
    revalidatePath("/");
    return { message: "Incremented!" };
  } catch (error) {
    return { message: "Failed to increment" };
  }
}
