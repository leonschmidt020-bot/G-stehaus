"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/(admin)/admin/actions";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-2xl font-serif text-white mb-8 text-center">
        Admin Login
      </h1>

      <form action={formAction} className="space-y-4">
        <div>
          <label className="block text-sm text-neutral-400 mb-1">
            Benutzername
          </label>
          <input
            name="username"
            type="text"
            required
            className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-400 mb-1">
            Passwort
          </label>
          <input
            name="password"
            type="password"
            required
            className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none"
          />
        </div>

        {state?.error && (
          <p className="text-red-400 text-sm">{state.error}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50"
        >
          {pending ? "Anmelden..." : "Anmelden"}
        </button>
      </form>
    </div>
  );
}
