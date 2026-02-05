import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white selection:bg-indigo-500/30">
      <main className="flex flex-col items-center gap-8 text-center px-4">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            KRONIX
          </h1>
          <p className="mx-auto max-w-[600px] text-lg text-slate-400 md:text-xl">
            O Sistema Operacional para Prestadores de Serviço.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/login"
            className="inline-flex h-12 items-center justify-center rounded-md border border-slate-700 bg-transparent px-8 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 w-full sm:w-auto"
          >
            Entrar
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 w-full sm:w-auto"
          >
            Começar Agora
          </Link>
        </div>
      </main>

      <footer className="absolute bottom-8 text-sm text-slate-600">
        &copy; {new Date().getFullYear()} Kronix Systems.
      </footer>
    </div>
  );
}
