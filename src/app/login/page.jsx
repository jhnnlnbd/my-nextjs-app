"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const VALID_USERNAME = "student";
const VALID_PASSWORD = "password123";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    const timeoutId = setTimeout(() => router.push("/profile"), 900);
    return () => clearTimeout(timeoutId);
  }, [isLoading, router]);

  function handleLogin() {
    if (isLoading) return;

    if (!username.trim() || !password) {
      setError("Please enter both your username and password.");
    } else if (username !== VALID_USERNAME) {
      setError("Incorrect username.");
    } else if (password !== VALID_PASSWORD) {
      setError("Incorrect password.");
    } else {
      setError("");
      setIsLoading(true);
    }
  }

  if (isLoading) {
    return (
      <main
        className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#f4f6f3] px-4 text-slate-900"
        role="status"
        aria-live="polite"
      >
        <span className="h-12 w-12 animate-spin rounded-full border-4 border-[#285a40]/20 border-t-[#285a40]" />
        <p className="text-lg font-medium">Logging in...</p>
        <span className="sr-only">Please wait while we sign you in.</span>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f6f3] px-4 py-10 text-slate-900 sm:px-6">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-[0_24px_80px_-32px_rgba(15,35,27,0.28)] md:min-h-155 md:grid-cols-[1fr_1.05fr]">
        <aside className="relative hidden flex-col justify-between overflow-hidden bg-[#153d32] p-10 text-white md:flex lg:p-14">
          <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -bottom-36 -left-28 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute right-8 top-36 h-40 w-40 rounded-full bg-[#a9c8a9]/10 blur-2xl" />

          <div className="relative max-w-sm">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#c4ddbd]">
              This has been changed
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
              See the difference
            </h1>
            <p className="mt-6 max-w-xs text-base leading-7 text-white/70">
              Sign in to pick up right where you left off.
            </p>
          </div>

          <p className="relative text-sm text-white/50">
            A little progress goes a long way.
          </p>
        </aside>

        <div className="flex items-center justify-center px-6 py-12 sm:px-12 md:px-10 lg:px-16">
          <div className="w-full max-w-sm">
            <div className="mb-9">
              <p className="mb-3 text-sm font-medium text-[#5b806a]">YOUR ACCOUNT</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Log in</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enter your details to access your account.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-700">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#4b7b60] focus:ring-4 focus:ring-[#4b7b60]/10"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#4b7b60] focus:ring-4 focus:ring-[#4b7b60]/10"
                />
              </div>

              <label className="flex w-fit cursor-pointer items-center gap-2.5 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(event) => setShowPassword(event.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 accent-[#397052] focus:ring-[#397052]"
                />
                Show Password
              </label>

              <button
                type="button"
                onClick={handleLogin}
                className="flex h-12 w-full items-center justify-center rounded-xl bg-[#285a40] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#204b35] focus:outline-none focus:ring-4 focus:ring-[#285a40]/20"
              >
                Log in
              </button>
              {error && (
                <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm leading-5 text-red-700">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
