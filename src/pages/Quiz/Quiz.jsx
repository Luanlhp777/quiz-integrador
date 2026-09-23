import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Quiz() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [questaoAtual, setQuestaoAtual] = useState(0);
    const [respostaSelecionada, setRespostaSelecionada] = useState(null);

    const [respondida, setRespondida] = useState(false);
    const [statusResposta, setStatusResposta] = useState(null);

    const [pontuacao, setPontuacao] = useState(0);
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0);

    const questoes = [
        {
            id: 1,
            enunciado: "O que é uma chave primária?",
            dificuldade: "Média",
            pontos: 10,
            alternativas: [
                "Permite valores duplicados",
                "Identifica unicamente um registro",
                "É usada apenas em JOIN",
                "É uma tabela temporária",
            ],
            respostaCorreta: 1,
        },
        {
            id: 2,
            enunciado: "Qual comando SQL é utilizado para consultar dados?",
            dificuldade: "Fácil",
            pontos: 5,
            alternativas: [
                "INSERT",
                "UPDATE",
                "SELECT",
                "DELETE",
            ],
            respostaCorreta: 2,
        },
        {
            id: 3,
            enunciado: "O que representa uma chave estrangeira?",
            dificuldade: "Difícil",
            pontos: 15,
            alternativas: [
                "Uma chave utilizada para criptografia",
                "Um campo que referencia uma chave de outra tabela",
                "Um campo obrigatório em todas as tabelas",
                "Uma chave utilizada apenas em views",
            ],
            respostaCorreta: 1,
        },
    ];

    const questao = questoes[questaoAtual];

    function verificarResposta() {
        if (respostaSelecionada === null || respondida) {
            return;
        }

        const acertou = respostaSelecionada === questao.respostaCorreta;

        setRespondida(true);

        if (acertou) {
            setStatusResposta("correta");
            setPontuacao((valorAtual) => valorAtual + questao.pontos);
            setAcertos((valorAtual) => valorAtual + 1);
        } else {
            setStatusResposta("incorreta");

            const novosErros = erros + 1;
            setErros(novosErros);

            setTimeout(() => {
                avancarQuestao({
                    pontuacaoFinal: pontuacao,
                    acertosFinal: acertos,
                    errosFinal: novosErros,
                });
            }, 1500);
        }
    }

    function avancarQuestao(resultadoAtual = null) {
        const pontuacaoFinal =
            resultadoAtual?.pontuacaoFinal ?? pontuacao;

        const acertosFinal =
            resultadoAtual?.acertosFinal ?? acertos;

        const errosFinal =
            resultadoAtual?.errosFinal ?? erros;

        if (questaoAtual < questoes.length - 1) {
            setQuestaoAtual((valorAtual) => valorAtual + 1);

            setRespostaSelecionada(null);
            setRespondida(false);
            setStatusResposta(null);
        } else {
            navigate("/aluno/resultado", {
                state: {
                    pontuacao: pontuacaoFinal,
                    acertos: acertosFinal,
                    erros: errosFinal,
                    totalQuestoes: questoes.length,
                    materiaId: id,
                },
            });
        }
    }

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-8">
            <div className="mx-auto max-w-3xl">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-500">
                            Matéria ID: {id}
                        </p>

                        <h1 className="text-2xl font-bold text-slate-800">
                            Quiz Integrador
                        </h1>
                    </div>

                    <div className="rounded-lg bg-red-100 px-4 py-2 font-semibold text-red-600">
                        00:15
                    </div>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-lg">
                    <div className="mb-6 flex items-center justify-between">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                            {questao.dificuldade}
                        </span>

                        <span className="font-semibold text-slate-500">
                            {questao.pontos} pontos
                        </span>
                    </div>

                    <p className="mb-2 text-sm font-medium text-slate-500">
                        Questão {questaoAtual + 1} de {questoes.length}
                    </p>

                    <h2 className="mb-8 text-2xl font-bold text-slate-800">
                        {questao.enunciado}
                    </h2>

                    <div className="space-y-4">
                        {questao.alternativas.map((alternativa, index) => {
                            let estilo =
                                "border-slate-300 text-slate-700 hover:border-blue-500 hover:bg-blue-50";

                            if (!respondida && respostaSelecionada === index) {
                                estilo = "border-blue-600 bg-blue-50 text-blue-700";
                            }

                            if (respondida && index === questao.respostaCorreta) {
                                estilo = "border-green-500 bg-green-50 text-green-700";
                            }

                            if (
                                respondida &&
                                respostaSelecionada === index &&
                                index !== questao.respostaCorreta
                            ) {
                                estilo = "border-red-500 bg-red-50 text-red-700";
                            }

                            return (
                                <button
                                    key={index}
                                    disabled={respondida}
                                    onClick={() => setRespostaSelecionada(index)}
                                    className={`w-full rounded-xl border p-4 text-left transition ${estilo}`}
                                >
                                    <span className="mr-2 font-semibold">
                                        {String.fromCharCode(65 + index)})
                                    </span>

                                    {alternativa}
                                </button>
                            );
                        })}

                        {statusResposta === "correta" && (
                            <p className="mt-5 rounded-lg bg-green-100 p-3 text-center font-medium text-green-700">
                                Resposta correta! +{questao.pontos} pontos
                            </p>
                        )}

                        {statusResposta === "incorreta" && (
                            <p className="mt-5 rounded-lg bg-red-100 p-3 text-center font-medium text-red-700">
                                Resposta incorreta. Avançando para a próxima questão...
                            </p>
                        )}
                    </div>

                    {!respondida && (
                        <button
                            onClick={verificarResposta}
                            disabled={respostaSelecionada === null}
                            className={`mt-8 w-full rounded-lg py-3 font-semibold text-white transition ${respostaSelecionada === null
                                    ? "cursor-not-allowed bg-slate-300"
                                    : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            Responder
                        </button>
                    )}

                    {respondida && statusResposta === "correta" && (
                        <button
                            onClick={() => avancarQuestao()}
                            className="mt-8 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            {questaoAtual === questoes.length - 1
                                ? "Ver resultado"
                                : "Próxima questão"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Quiz;