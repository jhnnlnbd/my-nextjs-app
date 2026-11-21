"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f6f3] px-4 py-10 text-slate-900">
      <section className="w-full max-w-md rounded-3xl bg-white px-8 py-12 text-center shadow-[0_24px_80px_-32px_rgba(15,35,27,0.28)] sm:px-12">
       <div className="flex justify-center">
        <Image
          src="https://i.pinimg.com/564x/a2/4c/16/a24c161fea2b24bd5967337d1684ff21.jpg"
          alt="Profile portrait"
          width={180}
          height={180}
          className="h-36 w-36 rounded-xl border border-gray-200 object-cover shadow-sm"
        />
       </div>
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#5b806a]">
          Your account
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Profile</h1>
        <p className="mt-3 text-sm text-slate-500">You are logged in.</p>
        <button
          type="button"
          onClick={() => router.push("/login")}
          className="mt-8 h-12 w-full rounded-xl bg-[#2a2b81] px-4 text-sm font-semibold text-white transition hover:bg-[#204b35] focus:outline-none focus:ring-4 focus:ring-[#285a40]/20"
        >
          Back to Login
        </button>
      </section>
    </main>
  );
}
