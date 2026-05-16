export default function SessionCreation() {
  return (
    <section className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Planning Poker</h1>
        <p className="text-zinc-400">
          Crie uma sessão para estimar tarefas com seu time.
        </p>
      </div>

      <form className="space-y-5">
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
            className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-4 py-3 text-white placeholder:text-zinc-600 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors py-3 font-semibold"
        >
          Criar sessão
        </button>
      </form>
    </section>
  );
}
