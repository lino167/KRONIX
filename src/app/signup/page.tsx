import Link from "next/link";
import { signup } from "./actions";

export default async function SignupPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const success = searchParams?.success === "check_email";

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-slate-900 p-8 shadow-2xl border border-slate-800">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
            Criar Conta
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Comece a usar o KRONIX hoje mesmo
          </p>
        </div>

        {success ? (
          <div className="rounded-md bg-green-500/10 p-4 border border-green-500/20">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-400">
                  Verifique seu email
                </h3>
                <div className="mt-2 text-sm text-green-300">
                  <p>
                    Um link de confirmação foi enviado para o seu endereço de
                    email.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href="/login"
                    className="text-sm font-medium text-green-400 hover:text-green-300 underline"
                  >
                    Ir para Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form action={signup} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Nome Completo
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="relative block w-full rounded-md border-0 bg-slate-950 py-3 px-3 text-white ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Nome Completo"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full rounded-md border-0 bg-slate-950 py-3 px-3 text-white ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full rounded-md border-0 bg-slate-950 py-3 px-3 text-white ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Senha"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-white py-3 px-4 text-sm font-semibold text-slate-900 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
              >
                Cadastrar
              </button>
            </div>
            <div className="text-center text-sm text-slate-500">
              Já tem uma conta?{" "}
              <Link
                href="/login"
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Entrar
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
