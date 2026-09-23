import { Link } from "react-router-dom";

function Cadastro() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Criar conta
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Cadastre-se para acessar o Quiz Integrador
                    </p>
                </div>

                <form className="space-y-5">
                    <div>
                        <label
                            htmlFor="nome"
                            className="mb-2 block font-medium text-slate-700"
                        >
                            Nome
                        </label>

                        <input
                            type="text"
                            id="nome"
                            placeholder="Digite seu nome"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="usuario"
                            className="mb-2 block font-medium text-slate-700"
                        >
                            Usuário
                        </label>

                        <input
                            type="text"
                            id="usuario"
                            placeholder="Digite seu usuário"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="senha"
                            className="mb-2 block font-medium text-slate-700"
                        >
                            Senha
                        </label>

                        <input
                            type="password"
                            id="senha"
                            placeholder="Digite sua senha"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Criar conta
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Já possui conta?{" "}
                    <Link
                        to="/"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Entrar
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Cadastro;