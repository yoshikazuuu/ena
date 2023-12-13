"use client";

import Image from "next/image";
import { useFormState } from "react-dom";
import { addCounter } from "./actions";

const initialState = {
  message: "",
};

export function AddCounter() {
  const [state, formAction] = useFormState(addCounter, initialState);
  return (
    <form action={formAction} method="POST">
      <button type="submit">
        <Image
          className="cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
          src="/ena.png"
          width={200}
          height={200}
          alt="Ena"
        />
      </button>
    </form>
  );
}
