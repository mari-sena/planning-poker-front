"use client";

import { FormEvent, useState } from "react";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SessionCreation() {
  const [sessionName, setSessionName] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionName,
          participantName,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar sessão.");
      }

      const data = await response.json();

      router.push(
        `/session/${data.id}?title=${encodeURIComponent(data.name)}&creator=${encodeURIComponent(data.owner.name)}`,
      );
    } catch (error) {
      setErrorMessage("Não foi possível criar a sessão. Tente novamente.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Planning Poker</h1>
        <p className="text-zinc-400">
          Crie uma sessão para estimar tarefas com seu time.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="sessionName"
            className="block text-sm font-medium text-zinc-300 mb-2"
          >
            Nome da sessão
          </label>

          <input
            id="sessionName"
            name="sessionName"
            type="text"
            value={sessionName}
            onChange={(event) => setSessionName(event.target.value)}
            className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-4 py-3 text-white placeholder:text-zinc-600 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="participantName"
            className="block text-sm font-medium text-zinc-300 mb-2"
          >
            Seu nome
          </label>

          <input
            id="participantName"
            name="participantName"
            type="text"
            value={participantName}
            onChange={(event) => setParticipantName(event.target.value)}
            className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-4 py-3 text-white placeholder:text-zinc-600 outline-none focus:border-blue-500"
          />
        </div>

        {errorMessage && (
          <div className="flex items-start gap-3 rounded-xl border border-red-900/60 bg-red-950/40 px-4 py-3 text-red-300">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

            <p className="text-sm font-medium">{errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 transition-colors py-3 font-semibold"
        >
          {isLoading ? "Criando..." : "Criar sessão"}
        </button>
      </form>
    </section>
  );
}
