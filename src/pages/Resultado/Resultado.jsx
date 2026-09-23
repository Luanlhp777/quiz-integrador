import { useLocation, useNavigate } from "react-router-dom";

function Resultado() {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        pontuacao = 0,
        acertos = 0,
        erros = 0,
        totalQuestoes = 0,
    } = location.state || {};

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">
                <h1 className="text-3xl font-bold text-slate-800">
                    Resultado
                </h1>

                <p className="mt-2 text-slate-500">
                    Quiz finalizado com sucesso!
                </p>

                <div className="my-8">
                    <p className="text-sm font-medium text-slate-500">
                        Sua pontuação
                    </p>

                    <p className="mt-2 text-5xl font-bold text-blue-600">
                        {pontuacao}
                    </p>

                    <p className="mt-2 text-slate-500">
                        pontos
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-green-50 p-4">
                        <p className="text-3xl font-bold text-green-600">
                            {acertos}
                        </p>

                        <p className="text-sm text-green-700">
                            Acertos
                        </p>
                    </div>

                    <div className="rounded-xl bg-red-50 p-4">
                        <p className="text-3xl font-bold text-red-600">
                            {erros}
                        </p>

                        <p className="text-sm text-red-700">
                            Erros
                        </p>
                    </div>
                </div>

                <p className="mt-5 text-sm text-slate-500">
                    {acertos} de {totalQuestoes} questões corretas
                </p>

                <button
                    onClick={() => navigate("/aluno/materias")}
                    className="mt-8 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    Voltar às matérias
                </button>
            </div>
        </div>
    );
}

export default Resultado;