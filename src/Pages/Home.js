import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const lines = [
  "$ run test-suite --all",
  "✔ Login flow ........... PASSED",
  "✔ Payment API .......... PASSED",
  "✘ Checkout page ........ BUG FOUND 🐞",
  "✔ Bug reported to JIRA",
  "✔ Fix verified ......... PASSED",
];

const stats = [
  { value: "500+", label: "Test Cases" },
  { value: "100+", label: "Bugs Found" },
  { value: "100+", label: "Scripts" },
  { value: "99%", label: "Quality Focus" },
];

const results = [
  { name: "Functional Tests", pct: 96, color: "bg-green-500" },
  { name: "API Tests", pct: 90, color: "bg-blue-500" },
  { name: "Regression Tests", pct: 85, color: "bg-purple-500" },
];

const tools = ["Manual Testing", "Automation", "Selenium", "Postman", "JIRA", "API Testing", "Java"];

const colorOf = (line) => {
  if (line.includes("BUG")) return "text-red-400";
  if (line.includes("PASSED") || line.includes("✔")) return "text-green-400";
  return "text-gray-400";
};

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => (c >= lines.length + 2 ? 0 : c + 1));
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="grid-bg relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-xs text-green-500">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            All systems tested ✔
          </span>

          <h1 className="mt-5 text-4xl lg:text-6xl font-bold leading-tight dark:text-white">
            Hi 👋, I'm <span className="text-gradient">VISHWAS PATIL</span>
          </h1>

          <h2 className="mt-3 text-xl lg:text-2xl font-semibold dark:text-gray-200">
            Software Tester • Bug Hunter • Automation Ace
          </h2>

          <p className="mt-4 max-w-lg text-gray-600 dark:text-gray-400">
            I break software so your users never have to. I find the bugs
            before they find your customers, for web and mobile apps.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-md border border-gray-400/40 px-3 py-1 text-xs font-medium dark:text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex gap-4">
            <NavLink
              to="/about"
              className="rounded-3xl bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              About Me
            </NavLink>
            <NavLink
              to="/contact"
              className="rounded-3xl border border-green-600 px-6 py-2 text-sm font-medium text-green-600 hover:bg-green-600 hover:text-white"
            >
              Contact Me
            </NavLink>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-gradient">{s.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="float relative w-full max-w-md md:ml-auto md:mr-0 md:translate-x-6">
  <div className="rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
    <div className="rounded-xl bg-white dark:bg-[#14141c] p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold dark:text-white">Test Execution Report</h3>
        <span className="rounded-full bg-green-500/15 px-2 py-1 text-xs text-green-500">
          Build #128
        </span>
      </div>

      <div className="mt-5 flex items-center gap-5">
        {/* Pass / fail ring */}
        <div
          className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full"
          style={{ background: "conic-gradient(#22c55e 0% 92%, #ef4444 92% 100%)" }}
        >
          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-white dark:bg-[#14141c]">
            <span className="text-lg font-bold dark:text-white">92%</span>
            <span className="text-[10px] text-gray-500">Passed</span>
          </div>
        </div>

        {/* Progress bars */}
        <div className="flex-1 space-y-3">
          {results.map((r) => (
            <div key={r.name}>
              <div className="flex justify-between text-xs dark:text-gray-300">
                <span>{r.name}</span>
                <span>{r.pct}%</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className={`h-2 rounded-full ${r.color}`}
                  style={{ width: `${r.pct}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bug ticket */}
      <div className="mt-5 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-bold text-red-500">🐞 BUG-101</span>
          <span className="rounded bg-red-500 px-2 py-0.5 text-white">High</span>
        </div>
        <p className="mt-1 dark:text-gray-200">Checkout button not clickable on mobile</p>
        <p className="mt-1 text-green-500">Status: Fixed &amp; Verified ✔</p>
      </div>
    </div>
  </div>

  <span className="absolute -left-4 top-0 rounded-lg bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
    PASSED ✔
  </span>
  <span className="absolute -right-4 bottom-8 rounded-lg bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
    🐞 Bug Squashed
  </span>

          {/* Terminal card */}
          <div className="w-full max-w-md rounded-xl bg-[#0b0b10] p-4 font-mono text-xs shadow-xl border border-gray-700">
            <div className="mb-3 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <div className="min-h-[130px]">
              {lines.slice(0, count).map((line, i) => (
                <p key={i} className={colorOf(line)}>
                  {line}
                </p>
              ))}
              <span className="cursor text-green-400">▌</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;