"use client";

import { useFormStatus } from "react-dom";

export default function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-6 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Speichern..." : "Speichern"}
    </button>
  );
}
