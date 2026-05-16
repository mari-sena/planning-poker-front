"use client";

import { useState } from "react";

export function PlanningCard() {
  const [selected, setSelected] = useState<string | null>(null);
  const planningCards = [
    "0",
    "½",
    "1",
    "2",
    "3",
    "5",
    "8",
    "13",
    "20",
    "40",
    "100",
    "?",
    "☕",
  ];

  function handleSelectCard(card: string) {
    setSelected(card);
  }
  return (
    <>
      {planningCards.map((card) => (
        <button
          type="button"
          onClick={() => handleSelectCard(card)}
          className={`
			group relative h-40 w-28 rounded-lg border bg-zinc-950
			transition-all duration-200
			hover:-translate-y-1 hover:border-blue-500
        ${
          selected === card
            ? "border-blue-500 shadow-lg shadow-blue-500/30"
            : "border-zinc-700"
        }
      `}
        >
          <span
            className={`absolute left-2 top-1 text-lg ${selected === card ? "text-blue-400" : "text-zinc-400"}`}
          >
            {card}
          </span>

          <div
            className={`absolute left-1/2 top-1/2 flex h-24 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border ${selected === card ? "border-blue-500" : "border-zinc-700"}`}
          >
            <span
              className={`text-4xl font-light ${selected === card ? "text-blue-400" : "text-zinc-100"}`}
            >
              {card}
            </span>
          </div>

          <span
            className={`absolute bottom-1 right-2 rotate-180 text-lg ${selected === card ? "text-blue-400" : "text-zinc-400"}`}
          >
            {card}
          </span>
        </button>
      ))}
    </>
  );
}
