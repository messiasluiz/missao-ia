const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
      enunciado: "Em um mundo onde a preocupação com o meio ambiente é prioridade, você é um estudante dedicado à causa da preservacão. Ao sair da sua casa, você se depara com uma comunidade engajada em práticas que agregam aulgo pta natureza, onde o descarte de residuos, o uso consciente da água e a energia renovável são parte do cotidiano. Qual seu pensamento inicial?",
      alternativas: [
          {
              texto: "Você se sente inspirado e se une a um grupo de pesquisa locais para participar de ações de conscientização e limpeza do meio ambiente.",
              afirmacao: "Decidiu agir e contribuir para um mundo mais organico."
          },
          {
              texto: "Você fica surpreso com o comprometimento das pessoas e decide pesquisar mais sobre práticas sustentáveis para implementar em sua própria vida.",
              afirmacao: "Decidiu investigar mais sobre preservacão para incorporá-la em seu dia a dia."
          }
      ]
  },
  {
      enunciado: "Após participar de diversas ações em prol do meio ambiente, você decide liderar um projeto de reciclagem na sua escola. Como você aborda essa iniciativa?",
      alternativas: [
          {
              texto: "Você envolve seus colegas e professores, promovendo palestras e workshops sobre a importância da reciclagem e como implementá-la no ambiente escolar.",
              afirmacao: "Engajou a comunidade escolar e promoveu a conscientização sobre reciclagem."
          },
          {
              texto: "Você pesquisa sobre métodos eficientes de reciclagem e propõe um plano estratégico para a gestão de resíduos na escola.",
              afirmacao: "Realizou um plano de ação baseado em pesquisa e análise."
          }
      ]
  },
  {
      enunciado: "O projeto de reciclagem na escola é um sucesso e desperta o interesse de outras instituições na região. Como você decide expandir essa iniciativa?",
      alternativas: [
          {
              texto: "Você cria uma rede de escolas sustentáveis, promovendo a troca de experiências e ações conjuntas para o meio ambiente.",
              afirmacao: "Expandiu o projeto para impactar mais comunidades e promover a sustentabilidade em larga escala."
          },
          {
              texto: "Você realiza parcerias com empresas locais para a coleta e reciclagem dos materiais, ampliando o impacto positivo na comunidade.",
              afirmacao: "Buscou soluções práticas para fortalecer a iniciativa e aumentar sua efetividade."
          }
      ]
  },
  {
      enunciado: "Após algum tempo, você percebe que o engajamento da comunidade está diminuindo. Como você motiva as pessoas a continuarem se envolvendo com a causa?",
      alternativas: [
          {
              texto: "Você organiza eventos e campanhas de conscientização regulares, destacando os benefícios da sustentabilidade e celebrando as conquistas.",
              afirmacao: "Manteve o interesse da comunidade por meio de ações contínuas e motivadoras."
          },
          {
              texto: "Você busca novas abordagens e parcerias inovadoras para revitalizar o projeto e atrair mais participantes.",
              afirmacao: "Buscou soluções criativas para manter o engajamento e a relevância do projeto."
          }
      ]
  },
  {
      enunciado: "Com o passar do tempo, o projeto de reciclagem se torna uma referência na região e recebe reconhecimento nacional. Como você se sente com essa conquista?",
      alternativas: [
          {
              texto: "Você se sente orgulhoso do impacto positivo que teve na comunidade e se motiva a continuar lutando por um mundo mais sustentável.",
              afirmacao: "A conquista impulsionou você a buscar novos desafios e ações em prol da sustentabilidade."
          },
          {
              texto: "Você se sente responsável por inspirar outras pessoas e comunidades a adotarem práticas sustentáveis em suas vidas.",
              afirmacao: "Reconheceu seu papel como agente de mudança e promotor da sustentabilidade."
          }
      ]
  },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();