type SessionRoomPageProps = {
  params: Promise<{
    sessionId: string;
  }>;
  searchParams: Promise<{
    title?: string;
    creator?: string;
  }>;
};

export default async function SessionRoomPage({
  params,
  searchParams,
}: SessionRoomPageProps) {
  const { sessionId } = await params;
  const { title, creator } = await searchParams;

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <section className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
        <p className="text-sm text-zinc-500 mb-2">Sala criada</p>

        <h1 className="text-3xl font-bold mb-4">{title ?? "Planning Poker"}</h1>

        <div className="space-y-2 text-zinc-300">
          <p>
            Criador:{" "}
            <span className="font-semibold text-white">
              {creator ?? "Não informado"}
            </span>
          </p>

          <p className="text-sm text-zinc-500">ID da sessão: {sessionId}</p>
        </div>
      </section>
    </main>
  );
}
