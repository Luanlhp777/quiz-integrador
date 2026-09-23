import { useNavigate } from "react-router-dom";

function Materias() {
    const navigate = useNavigate();

    const materias = [
        {
            id: 1,
            nome: "Banco de Dados",
            descricao: "Questões sobre modelagem, SQL e banco de dados.",
        },
        {
            id: 2,
            nome: "Desenvolvimento Web",
            descricao: "Questões sobre HTML, CSS, JavaScript e desenvolvimento web.",
        },
        {
            id: 3,
            nome: "Programação Orientada a Objetos",
            descricao: "Questões sobre classes, objetos, herança e encapsulamento.",
        },
    ];

    function iniciarQuiz(id) {
        navigate(`/aluno/quiz/${id}`);
    }

    return (
        <div className="min-h-screen bg-slate-100">
            <header className="bg-white shadow-sm">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <h1 className="text-2xl font-bold text-slate-800">
                        Quiz Integrador
                    </h1>

                    <button
                        onClick={() => navigate("/")}
                        className="rounded-lg bg-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-300"
                    >
                        Sair
                    </button>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-12">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-slate-800">
                        Escolha uma matéria
                    </h2>

                    <p className="mt-2 text-slate-500">
                        Selecione a disciplina que deseja responder.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {materias.map((materia) => (
                        <div
                            key={materia.id}
                            className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <h3 className="text-xl font-bold text-slate-800">
                                {materia.nome}
                            </h3>

                            <p className="mt-3 min-h-16 text-slate-500">
                                {materia.descricao}
                            </p>

                            <button
                                onClick={() => iniciarQuiz(materia.id)}
                                className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Iniciar Quiz
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Materias;