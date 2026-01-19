const COURSE = [
  {
    id: "w1",
    title: "Semana 1 - Dominio da conversa",
    subtitle: "O metodo de sondagem",
    days: [
      {
        id: "w1d1",
        title: "Dia 1: DNA da queixa",
        focus: "Ouvir, traduzir e identificar o mecanismo dominante.",
        lesson: {
          intro:
            "Aprenda a ouvir e traduzir a queixa antes de sugerir qualquer caminho.",
          points: [
            "Ruga pode ser dinamica (expressao) ou estatica (marcada em repouso).",
            "Caiu pode ser flacidez (qualidade/colageno) ou perda de suporte/volume.",
            "Bigode chines muitas vezes e consequencia de suporte mal distribuido no meio da face, nao so a linha.",
            "Olheira pode ser sombra, sulco, pigmento ou vascular, e nem todo mundo e candidato.",
          ],
          callout:
            "Objetivo do dia: ouvir a queixa e traduzir para o mecanismo real.",
        },
        training: {
          title: "Traducao instantanea",
          time: "10 min",
          description:
            "Repita em voz alta e transforme a queixa em pergunta de mecanismo.",
          prompts: [
            "Quando voce diz ruga, eu preciso entender se aparece em repouso ou so com expressao.",
            "Quando voce diz caiu, eu preciso entender se e mais pele frouxa ou perda de volume.",
            "Quando voce diz bigode chines, eu preciso entender se veio com bochecha murcha.",
            "Quando voce diz olheira, eu preciso entender se e sombra ou cor.",
            "Quando voce diz cara cansada, eu preciso entender se e contorno ou pele.",
            "Quando voce diz testa marcada, eu preciso entender se some ao relaxar.",
            "Quando voce diz ruga entre as sobrancelhas, eu preciso entender se e so movimento ou ja marcou.",
            "Quando voce diz rosto derretendo, eu preciso entender se e firmeza ou estrutura.",
            "Quando voce diz bochecha murcha, eu preciso entender se quer natural ou perceptivel.",
            "Quando voce diz flacidez, eu preciso entender se aceita evolucao gradual.",
          ],
          drill:
            "Treine 2 vezes cada frase, alternando um tom consultivo e um tom caloroso.",
        },
        quiz: {
          id: "quiz-w1d1",
          title: "Qual mecanismo domina?",
          description:
            "15 frases do paciente. Marque o mecanismo principal.",
          questions: [
            {
              q: "As linhas da testa aparecem quando levanto a sobrancelha.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 0,
              tip: "Linhas guiadas por expressao.",
            },
            {
              q: "Meu pe de galinha aparece so quando sorrio.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 0,
              tip: "Relaciona ao musculo.",
            },
            {
              q: "Minha bochecha murchou e o bigode chines marcou.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Perda de suporte costuma ser volume.",
            },
            {
              q: "Minha pele esta mais fina e sem firmeza.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 2,
              tip: "Firmeza e qualidade da pele.",
            },
            {
              q: "A ruga entre as sobrancelhas fica mesmo quando relaxo.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Ha movimento e marca estatica.",
            },
            {
              q: "Minha olheira parece um afundado, com sombra.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Sombra e sulco costumam ser volume.",
            },
            {
              q: "Minha olheira e mais escura, parece cor.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Pode ser pigmento, nao e volume.",
            },
            {
              q: "Minha pele do rosto parece derreter.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 2,
              tip: "Flacidez e colageno.",
            },
            {
              q: "Quero levantar o canto da boca sem mudar muito.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Pode ser suporte e volume.",
            },
            {
              q: "Rugas na testa marcam mais no fim do dia.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Movimento com marca estatica.",
            },
            {
              q: "Minha mandibula perdeu contorno.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Perda de estrutura e suporte.",
            },
            {
              q: "Sinto que o rosto caiu, ficou molinho.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 2,
              tip: "Firmeza da pele.",
            },
            {
              q: "Meu labio sumiu, ficou fino.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Volume e suporte.",
            },
            {
              q: "Quero suavizar o entre-sobrancelhas, mas sem ficar travada.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 0,
              tip: "Queixa de movimento.",
            },
            {
              q: "Tenho ruga e pele caida ao mesmo tempo.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Tem mais de um mecanismo.",
            },
          ],
        },
      },
      {
        id: "w1d2",
        title: "Dia 2: Funil de sondagem",
        focus: "6 perguntas que resolvem 80% dos casos.",
        lesson: {
          intro: "Use um roteiro simples e repetivel para ganhar clareza.",
          points: [
            "Queixa principal em 1 frase: Se tivesse que escolher uma coisa so...",
            "Quando aparece? repouso vs expressao vs foto.",
            "O que mudou nos ultimos anos? emagreceu, envelhecimento, estresse, rotina.",
            "O que voce quer sentir ao se ver? leve, descansada, jovem, firme.",
            "Medo do procedimento: travada, artificial, inchada, mudou meu rosto.",
            "Prazo: evento proximo muda abordagem e expectativa.",
          ],
          callout: "Objetivo: nao pular etapas do funil.",
        },
        training: {
          title: "Aberturas que criam conexao",
          time: "10 min",
          description:
            "Simule 3 aberturas: calorosa, objetiva e premium.",
          prompts: [
            "Calorosa: Oi! Antes de qualquer coisa, quero te entender bem para nao te dar chute.",
            "Objetiva: Vamos direto: se tivesse que escolher uma coisa so, o que mais incomoda?",
            "Premium: Quero te orientar com seguranca. Me diz a queixa principal em uma frase.",
          ],
          drill:
            "Repita cada abertura 3 vezes mudando ritmo e tom de voz.",
        },
        quiz: {
          id: "quiz-w1d2",
          title: "Qual a proxima pergunta?",
          description: "12 mini casos. Escolha a melhor pergunta seguinte.",
          questions: [
            {
              q: "Paciente diz: Quero tratar bigode chines.",
              options: [
                "Se tivesse que escolher uma coisa so, qual e?",
                "Isso aparece mais em repouso ou em expressao?",
                "O que voce mais teme no procedimento?",
                "Voce quer resultado imediato?",
              ],
              answer: 0,
              tip: "Comece pela queixa principal em 1 frase.",
            },
            {
              q: "Paciente: Notei que minha testa marca mais em fotos.",
              options: [
                "Isso aparece em repouso ou so quando faz expressao?",
                "Voce quer parecer mais jovem ou mais firme?",
                "Quando foi a ultima vez que preencheu?",
                "Tem evento em 10 dias?",
              ],
              answer: 0,
              tip: "Repouso vs expressao vem logo no inicio.",
            },
            {
              q: "Paciente: Estou com medo de ficar com o rosto artificial.",
              options: [
                "O que mudou nos ultimos anos?",
                "Se pudesse escolher uma coisa so?",
                "O que voce mais teme no procedimento?",
                "Qual o seu prazo?",
              ],
              answer: 2,
              tip: "Medo e um passo chave.",
            },
            {
              q: "Paciente: Emagreci e meu rosto caiu.",
              options: [
                "O que mudou nos ultimos anos?",
                "Isso aparece so com expressao?",
                "O que voce quer sentir ao se ver?",
                "Tem evento em 10 dias?",
              ],
              answer: 0,
              tip: "Mudancas recentes ajudam a entender a causa.",
            },
            {
              q: "Paciente: Quero parecer mais descansada.",
              options: [
                "O que voce quer sentir ao se ver?",
                "Quando aparece a queixa?",
                "Qual o prazo?",
                "Qual o seu medo?",
              ],
              answer: 0,
              tip: "Confirmar objetivo e valor.",
            },
            {
              q: "Paciente: Tenho um casamento daqui 10 dias.",
              options: [
                "Qual o prazo?",
                "Se tivesse que escolher uma coisa so...",
                "O que mudou nos ultimos anos?",
                "Qual seu medo?",
              ],
              answer: 0,
              tip: "Prazo ajusta expectativa.",
            },
            {
              q: "Paciente: Acho meu rosto pesado, cansado.",
              options: [
                "Quando aparece: repouso ou expressao?",
                "Qual o seu medo?",
                "Quer natural ou perceptivel?",
                "Tem evento proximo?",
              ],
              answer: 0,
              tip: "Repouso vs expressao ajuda a classificar.",
            },
            {
              q: "Paciente: Minha olheira piora a noite.",
              options: [
                "O que mudou nos ultimos anos?",
                "E mais sombra ou e cor escura?",
                "Tem medo de ficar inchada?",
                "Quer resultado imediato?",
              ],
              answer: 1,
              tip: "Pergunta que separa causa.",
            },
            {
              q: "Paciente: Quero um resultado mais leve.",
              options: [
                "O que voce quer sentir ao se ver?",
                "Isso aparece em repouso?",
                "Qual seu prazo?",
                "O que mudou nos ultimos anos?",
              ],
              answer: 0,
              tip: "Explorar a sensacao desejada.",
            },
            {
              q: "Paciente: Tenho medo de ficar travada.",
              options: [
                "Quando aparece?",
                "Medo do procedimento?",
                "O que mudou nos ultimos anos?",
                "Qual seu prazo?",
              ],
              answer: 1,
              tip: "Medo e uma pergunta direta.",
            },
            {
              q: "Paciente: Minha ruga da testa some quando relaxo.",
              options: [
                "Quando aparece?",
                "O que mudou nos ultimos anos?",
                "O que voce quer sentir ao se ver?",
                "Qual o prazo?",
              ],
              answer: 0,
              tip: "Classifique o mecanismo primeiro.",
            },
            {
              q: "Paciente: Quero saber o preco logo.",
              options: [
                "Antes do preco, deixa eu entender sua queixa principal.",
                "O preco e X.",
                "Tem evento em 10 dias?",
                "Voce ja fez antes?",
              ],
              answer: 0,
              tip: "Voltar para o funil com elegancia.",
            },
          ],
        },
      },
      {
        id: "w1d3",
        title: "Dia 3: Autoridade sem arrogancia",
        focus: "Consultor + humano, sem parecer venda.",
        lesson: {
          intro: "Use frases que mostram direcao sem parecer robotico.",
          points: [
            "Pelo que voce descreveu, pode ser mais X do que Y, mas confirmo com 2 perguntinhas.",
            "O erro comum e tratar a linha quando o problema e suporte. Por isso entendo a causa.",
            "Tem casos que resolvem com um procedimento so, e outros que ficam melhores em etapas.",
            "Por ligacao eu te dou direcao, mas o plano certo e no rosto, ao vivo.",
          ],
          callout:
            "Objetivo: guiar com firmeza e manter empatia.",
        },
        training: {
          title: "Audio de 60 segundos",
          time: "10 min",
          description:
            "Grave um audio com empatia + clareza + conducao.",
          prompts: [
            "Abra com empatia: entendo como isso incomoda.",
            "Traduza a queixa para o mecanismo.",
            "Explique que a ligacao da direcao, mas o plano final e na avaliacao.",
          ],
          drill:
            "Repita duas vezes: uma mais calorosa e outra mais premium.",
        },
        quiz: {
          id: "quiz-w1d3",
          title: "Preco cedo demais",
          description:
            "Complete a resposta mais consultiva.",
          questions: [
            {
              q: "Paciente: Quanto custa?",
              options: [
                "O valor depende do que a gente vai indicar. Me fala a queixa principal em uma frase?",
                "O valor e X, pode parcelar.",
                "A gente ve isso depois da avaliacao, tchau.",
                "Depende, mas e caro.",
              ],
              answer: 0,
              tip: "Reconhece e volta ao funil.",
            },
            {
              q: "Paciente: Quero saber preco antes de marcar.",
              options: [
                "Eu explico os caminhos possiveis e na avaliacao a gente confirma. Posso te fazer duas perguntas?",
                "Sem avaliacao nao falo preco.",
                "Tem promocao hoje.",
                "Precisa depositar.",
              ],
              answer: 0,
              tip: "Direcao primeiro, preco depois.",
            },
            {
              q: "Paciente: Me fala logo quanto e o botox.",
              options: [
                "Antes de falar de botox, quero entender se a linha vem de movimento ou de marca estatica.",
                "Botox custa X por area.",
                "Nao trabalho com valores por telefone.",
                "Depende da quantidade.",
              ],
              answer: 0,
              tip: "Autoridade sem dureza.",
            },
            {
              q: "Paciente: Ja quero saber o pacote todo.",
              options: [
                "Primeiro eu entendo sua causa, depois a gente fala do melhor plano e valores.",
                "Pacote completo e Y.",
                "Nao faco pacote.",
                "Pacote depende do mes.",
              ],
              answer: 0,
              tip: "Firmeza, sem parecer empurrao.",
            },
          ],
        },
      },
      {
        id: "w1d4",
        title: "Dia 4: Conduzir para avaliacao",
        focus: "Fechamento consultivo sem empurrao.",
        lesson: {
          intro: "Transforme a avaliacao no proximo passo logico.",
          points: [
            "Vamos fazer assim: eu te explico os caminhos possiveis e na avaliacao a gente confirma qual e o melhor.",
            "A avaliacao e onde o profissional ve proporcao e movimento, isso muda tudo.",
          ],
          callout:
            "Objetivo: conduzir com leveza e sem prometer resultado.",
        },
        training: {
          title: "3 finais de ligacao",
          time: "10 min",
          description:
            "Treine finais com tempo curto, indecisao e medo.",
          prompts: [
            "Tempo curto: encurte, confirme proximo passo e deixe claro o que vai acontecer na avaliacao.",
            "Indecisao: reforce que a avaliacao e para confirmar caminho, sem obrigacao.",
            "Medo: valide o medo e explique que o plano certo e personalizado ao vivo.",
          ],
          drill:
            "Use 30 segundos para cada final e mantenha um tom calmo.",
        },
        quiz: {
          id: "quiz-w1d4",
          title: "Objecoes ao vivo",
          description:
            "10 objecoes. Escolha a resposta consultiva.",
          questions: [
            {
              q: "Tenho medo de ficar travada.",
              options: [
                "Entendo. A ideia e naturalidade, e isso a gente confirma na avaliacao.",
                "Fica travada mesmo.",
                "Nao se preocupe.",
                "Entao nao faca.",
              ],
              answer: 0,
              tip: "Valida o medo e mostra cuidado.",
            },
            {
              q: "Nao quero mudar meu rosto.",
              options: [
                "O objetivo e manter sua identidade, por isso a avaliacao e essencial.",
                "Vai mudar um pouco.",
                "Todo mundo muda.",
                "Entao nao da.",
              ],
              answer: 0,
              tip: "Mostra foco em naturalidade.",
            },
            {
              q: "E se eu nao gostar?",
              options: [
                "Por isso a gente alinha expectativa e faz um plano seguro na avaliacao.",
                "Nao tem erro.",
                "Nunca aconteceu.",
                "Isso depende.",
              ],
              answer: 0,
              tip: "Mostra processo e alinhamento.",
            },
            {
              q: "Ja vi gente ficar inchada.",
              options: [
                "A escolha da tecnica e do plano evita excesso, e isso a gente ajusta ao vivo.",
                "Incha mesmo.",
                "E so beber agua.",
                "Depende da pessoa.",
              ],
              answer: 0,
              tip: "Explica sem prometer.",
            },
            {
              q: "Nao tenho tempo para avaliacao.",
              options: [
                "Entendo. A avaliacao e rapida e garante o plano certo. Posso ver um horario curto?",
                "Sem avaliacao nao da.",
                "Entao nao consigo ajudar.",
                "Nao precisa.",
              ],
              answer: 0,
              tip: "Oferece uma solucao.",
            },
            {
              q: "Tenho evento semana que vem.",
              options: [
                "Vamos alinhar expectativa. Algumas coisas precisam de tempo para aparecer.",
                "Entao faz tudo hoje.",
                "Nao da.",
                "A gente ve depois.",
              ],
              answer: 0,
              tip: "Alinha prazo.",
            },
            {
              q: "Quero resultado imediato.",
              options: [
                "Alguns resultados sao imediatos e outros evoluem. A avaliacao define isso.",
                "Tudo e imediato.",
                "Nao prometo nada.",
                "Nao sei.",
              ],
              answer: 0,
              tip: "Equilibra expectativa.",
            },
            {
              q: "Nao quero procedimento invasivo.",
              options: [
                "A gente pode falar de opcoes menos invasivas na avaliacao.",
                "Entao nao da.",
                "Todos sao invasivos.",
                "Isso e besteira.",
              ],
              answer: 0,
              tip: "Mostra caminhos.",
            },
            {
              q: "Ja fiz antes e nao gostei.",
              options: [
                "Entendo. Por isso vamos entender a causa para indicar algo mais adequado.",
                "Entao nao faz mais.",
                "Foi azar.",
                "Vamos repetir.",
              ],
              answer: 0,
              tip: "Mostra cuidado.",
            },
            {
              q: "Posso decidir depois?",
              options: [
                "Claro. A avaliacao e para te dar seguranca. Podemos deixar um horario opcional.",
                "Nao, precisa agora.",
                "Decide logo.",
                "Entao nao da.",
              ],
              answer: 0,
              tip: "Sem pressao.",
            },
          ],
        },
      },
      {
        id: "w1d5",
        title: "Dia 5: Prova da semana",
        focus: "Ligacao completa com roteiro flexivel.",
        lesson: {
          intro:
            "Treine 3 simulacoes completas (2-3 min cada) e mantenha o roteiro sem ficar engessado.",
          points: [
            "Caso botox: ruga dinamica na testa e pe de galinha.",
            "Caso preenchimento: bigode chines com perda de suporte.",
            "Caso misto: bigode chines + flacidez da pele.",
          ],
          callout: "Aprovado: 80% e empatia constante.",
        },
        training: {
          title: "Simulacoes guiadas",
          time: "12 min",
          description:
            "Use o timer e siga o script mestre, mas com naturalidade.",
          prompts: [
            "Simulacao 1: queixa principal e ruga dinamica. Foque em movimento.",
            "Simulacao 2: bigode chines com bochecha murcha. Foque em suporte.",
            "Simulacao 3: sulco + flacidez. Foque em plano em etapas.",
          ],
          drill:
            "Apos cada simulacao, avalie se voce fez: queixa, mecanismo, medo, proximo passo.",
        },
        quiz: {
          id: "quiz-w1d5",
          title: "Check-up da semana",
          description:
            "6 perguntas de roteiro. Valide se voce lembra cada etapa.",
          questions: [
            {
              q: "Qual a primeira frase para abrir a ligacao?",
              options: [
                "Antes de explicar qualquer coisa, deixa eu entender direitinho.",
                "Qual o seu valor?",
                "Tem procedimento em promocao?",
                "Voce ja fez antes?",
              ],
              answer: 0,
              tip: "Conexao vem antes.",
            },
            {
              q: "Depois da queixa principal, qual pergunta e essencial?",
              options: [
                "Isso aparece mais em repouso ou expressao?",
                "Qual o valor?",
                "Tem evento daqui 6 meses?",
                "Voce ja fez cirurgia?",
              ],
              answer: 0,
              tip: "Classifique o mecanismo.",
            },
            {
              q: "Qual frase evita prometer resultado?",
              options: [
                "Por ligacao eu te dou direcao, mas o plano certo e no rosto, ao vivo.",
                "Vai dar certo, certeza.",
                "Em uma sessao resolve tudo.",
                "Isso e rapido.",
              ],
              answer: 0,
              tip: "Direcao sem prometer.",
            },
            {
              q: "Quando a pessoa pede preco cedo, voce...",
              options: [
                "Volta para entender a queixa e causa.",
                "Fala o valor direto.",
                "Diz que nao fala preco.",
                "Ignora.",
              ],
              answer: 0,
              tip: "Conduz o funil.",
            },
            {
              q: "Proximo passo elegante:",
              options: [
                "Confirmar caminho na avaliacao.",
                "Empurrar para fechar hoje.",
                "Prometer resultado.",
                "Encerrar sem indicar nada.",
              ],
              answer: 0,
              tip: "Avaliacao como logica.",
            },
            {
              q: "Qual elemento nao pode faltar?",
              options: [
                "Empatia e validacao do medo.",
                "Falar apenas de preco.",
                "Prometer rapidez.",
                "Criticar outros profissionais.",
              ],
              answer: 0,
              tip: "Empatia gera confianca.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "w2",
    title: "Semana 2 - Biblioteca de queixas",
    subtitle: "O aluno domina o que pode ser e como falar",
    days: [
      {
        id: "w2d1",
        title: "Dia 1: Botox",
        focus: "Queixas tipicas e sondagem chave.",
        lesson: {
          intro:
            "Botox atua no musculo, ideal para linhas de movimento.",
          points: [
            "Queixas: testa marcada, pe de galinha, cara brava, ruga entre as sobrancelhas.",
            "Sondagem: aparece so com expressao? quer naturalidade ou zerar? medo de ficar travada?",
            "Explicacao simples: Botox atua no musculo, entao e otimo para linhas de movimento.",
          ],
          callout: "Foco em naturalidade e alinhamento de expectativa.",
        },
        training: {
          title: "Roleplay de botox",
          time: "10 min",
          description:
            "Treine perguntas que diferenciam ruga dinamica x estatica.",
          prompts: [
            "Pergunte: some quando relaxa?",
            "Pergunte: o objetivo e suavizar ou zerar?",
            "Pergunte: medo de ficar travada?",
          ],
          drill:
            "Responda a 2 pacientes imaginarios com objetivos diferentes.",
        },
        quiz: {
          id: "quiz-w2d1",
          title: "Botox ou nao?",
          description:
            "Escolha a melhor direcao para cada queixa.",
          questions: [
            {
              q: "Ruga da testa some quando relaxo.",
              options: ["Botox", "Preenchimento", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Pe de galinha aparece ao sorrir.",
              options: ["Botox", "Preenchimento", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Ruga entre sobrancelhas fica marcada mesmo parado.",
              options: ["Botox", "Preenchimento", "Bioestimulador", "Misto"],
              answer: 3,
              tip: "Movimento com marca estatica.",
            },
            {
              q: "Testa muito marcada e pele fina.",
              options: ["Botox", "Preenchimento", "Bioestimulador", "Misto"],
              answer: 3,
              tip: "Pode precisar estrategia combinada.",
            },
            {
              q: "Cara brava quando franze.",
              options: ["Botox", "Preenchimento", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Rugas finas em volta dos olhos com pele seca.",
              options: ["Botox", "Preenchimento", "Bioestimulador", "Misto"],
              answer: 3,
              tip: "Movimento + qualidade de pele.",
            },
            {
              q: "Ruga da testa so aparece no fim do dia.",
              options: ["Botox", "Preenchimento", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Quero evitar que marque mais.",
              options: ["Botox", "Preenchimento", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Preventivo de movimento.",
            },
          ],
        },
      },
      {
        id: "w2d2",
        title: "Dia 2: Preenchimento",
        focus: "Volume, suporte e sulcos.",
        lesson: {
          intro:
            "Preenchimento reorganiza volume e suporte, nao e so encher uma linha.",
          points: [
            "Queixas: olheira funda, bochecha murcha, bigode chines, labio, mandibula.",
            "Sondagem: e sombra ou cor? perdeu sustentacao aqui em cima? quer mudanca perceptivel ou so descansada?",
            "Explicacao simples: suporte e harmonia geram naturalidade.",
          ],
          callout: "Evite tratar apenas a linha sem olhar a causa.",
        },
        training: {
          title: "Mapa de suporte",
          time: "10 min",
          description:
            "Descreva como o suporte muda a linha sem prometer.",
          prompts: [
            "Explique: nao e so preencher a linha, e devolver suporte ao meio da face.",
            "Pergunte: parece mais afundado/sombra ou cor escura?",
            "Pergunte: quer resultado perceptivel ou so descansado?",
          ],
          drill: "Use exemplos simples e evite termos tecnicos.",
        },
        quiz: {
          id: "quiz-w2d2",
          title: "Volume ou nao?",
          description:
            "Escolha a melhor direcao para cada queixa.",
          questions: [
            {
              q: "Olheira funda, faz sombra em foto.",
              options: ["Preenchimento", "Botox", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Sulco e volume.",
            },
            {
              q: "Bochecha murcha e rosto cansado.",
              options: ["Preenchimento", "Botox", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Suporte e volume.",
            },
            {
              q: "Bigode chines marcou depois de emagrecer.",
              options: ["Preenchimento", "Botox", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Perda de volume.",
            },
            {
              q: "Labio fino, quer mais definicao.",
              options: ["Preenchimento", "Botox", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Volume pontual.",
            },
            {
              q: "Mandibula sem contorno.",
              options: ["Preenchimento", "Botox", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Estrutura.",
            },
            {
              q: "Olheira escura por pigmento.",
              options: ["Preenchimento", "Botox", "Bioestimulador", "Misto"],
              answer: 3,
              tip: "Nao e volume.",
            },
            {
              q: "Bigode chines + pele frouxa.",
              options: ["Preenchimento", "Botox", "Bioestimulador", "Misto"],
              answer: 3,
              tip: "Pode precisar combinacao.",
            },
            {
              q: "Quer so aparencia descansada, sem mudar demais.",
              options: ["Preenchimento", "Botox", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Preenchimento estrategico.",
            },
          ],
        },
      },
      {
        id: "w2d3",
        title: "Dia 3: Bioestimulador",
        focus: "Flacidez, pele e colageno.",
        lesson: {
          intro:
            "Bioestimulador melhora qualidade e firmeza ao longo das semanas.",
          points: [
            "Queixas: pele caida, sem firmeza, sem vico, derretendo.",
            "Sondagem: inicio gradual, expectativa de resultado, disposicao para plano em etapas.",
            "Explicacao simples: melhora a qualidade da pele e firmeza com o tempo.",
          ],
          callout: "Alinhar que nao e resultado imediato.",
        },
        training: {
          title: "Expectativa gradual",
          time: "10 min",
          description:
            "Treine como explicar a evolucao sem prometer.",
          prompts: [
            "Frase: o resultado vem em semanas, com melhora de firmeza.",
            "Pergunte: voce topa um plano em etapas?",
            "Pergunte: o que pesa mais, firmeza ou contorno?",
          ],
          drill:
            "Simule um paciente que quer resultado rapido.",
        },
        quiz: {
          id: "quiz-w2d3",
          title: "Pele e firmeza",
          description:
            "Escolha quando o bioestimulador faz mais sentido.",
          questions: [
            {
              q: "Pele fina e sem vico.",
              options: ["Bioestimulador", "Botox", "Preenchimento", "Misto"],
              answer: 0,
              tip: "Qualidade de pele.",
            },
            {
              q: "Rosto derretendo com perda de firmeza.",
              options: ["Bioestimulador", "Botox", "Preenchimento", "Misto"],
              answer: 0,
              tip: "Flacidez.",
            },
            {
              q: "Olheira de sombra, sulco fundo.",
              options: ["Bioestimulador", "Botox", "Preenchimento", "Misto"],
              answer: 2,
              tip: "Volume.",
            },
            {
              q: "Bigode chines e pele frouxa.",
              options: ["Bioestimulador", "Botox", "Preenchimento", "Misto"],
              answer: 3,
              tip: "Combinar estrategias.",
            },
            {
              q: "Quer efeito imediato para evento.",
              options: ["Bioestimulador", "Botox", "Preenchimento", "Misto"],
              answer: 3,
              tip: "Alinhar expectativa e combinar.",
            },
            {
              q: "Pele sem firmeza na mandibula.",
              options: ["Bioestimulador", "Botox", "Preenchimento", "Misto"],
              answer: 0,
              tip: "Firmeza.",
            },
          ],
        },
      },
      {
        id: "w2d4",
        title: "Dia 4: Quizzes de casos",
        focus: "30 casos rapidos para ganhar velocidade.",
        lesson: {
          intro:
            "Aqui voce vira o medico da conversa: rapido e seguro.",
          points: [
            "Regra: quase toda queixa tem 1 causa dominante + 1 contribuinte.",
            "Use 3 perguntas curtas para confirmar mecanismo.",
            "Foque em direcionar para avaliacao, sem prometer.",
          ],
          callout: "Meta: acertar 80% das hipoteses.",
        },
        training: {
          title: "Mapa mental rapido",
          time: "10 min",
          description:
            "Treine seu radar: diga o mecanismo em 5 segundos.",
          prompts: [
            "Leia cada queixa e responda: movimento, volume, flacidez-pele ou misto.",
            "Depois escolha 3 perguntas curtas para confirmar.",
          ],
          drill: "Repita em 2 ciclos de 15 casos.",
        },
        quiz: {
          id: "quiz-w2d4",
          title: "30 casos em 1 frase",
          description:
            "Escolha o caminho mais provavel.",
          questions: [
            {
              q: "Testa marcada quando faz expressao.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Bochecha murcha depois de emagrecer.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Volume.",
            },
            {
              q: "Pele sem vico e frouxa.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 2,
              tip: "Firmeza.",
            },
            {
              q: "Bigode chines + bochecha descida.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Suporte.",
            },
            {
              q: "Olheira escura, parece cor.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Nao e volume.",
            },
            {
              q: "Ruga entre sobrancelhas marcada e dinamica.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Misto.",
            },
            {
              q: "Queixo perdeu definicao.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Estrutura.",
            },
            {
              q: "Rosto derretendo lentamente.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 2,
              tip: "Flacidez.",
            },
            {
              q: "Pe de galinha so ao sorrir.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Mandibula sem contorno + pele frouxa.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Misto.",
            },
            {
              q: "Olheira com sombra e bochecha murcha.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Volume.",
            },
            {
              q: "Ruga da testa que some ao relaxar.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Pele fina, textura ruim.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 2,
              tip: "Qualidade de pele.",
            },
            {
              q: "Bigode chines sem perda de volume aparente.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Pode ser pele + suporte.",
            },
            {
              q: "Lateral do rosto mais flacida.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 2,
              tip: "Firmeza.",
            },
            {
              q: "Rugas finas no olho com pele seca.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Misto.",
            },
            {
              q: "Rosto cansado apos estresse.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Precisa sondagem.",
            },
            {
              q: "Labios com perda de volume.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Volume.",
            },
            {
              q: "Sobrancelha pesada e testa marcada.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Pele sem firmeza no pescoco.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 2,
              tip: "Flacidez.",
            },
            {
              q: "Olheira com sombra e pele fina.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Misto.",
            },
            {
              q: "Linha da mandibula sumindo.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Volume/estrutura.",
            },
            {
              q: "Bochecha muito caida.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 2,
              tip: "Firmeza.",
            },
            {
              q: "Ruga entre sobrancelhas que aparece em foto.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Bigode chines + evento em 10 dias.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Alinhar prazo e combinar.",
            },
            {
              q: "Pele derretendo e volume perdido.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Misto.",
            },
            {
              q: "Testa lisa em repouso, marca no fim do dia.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Olheira de cor escura e vasos.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Nao e volume.",
            },
            {
              q: "Queixo retraido e contorno fraco.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Estrutura.",
            },
            {
              q: "Rugas finas e perda de firmeza.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Misto.",
            },
          ],
        },
      },
      {
        id: "w2d5",
        title: "Dia 5: Evento em 10 dias",
        focus: "Alinhar expectativa e conduzir.",
        lesson: {
          intro:
            "Quando ha prazo curto, o discurso muda. Seja claro e seguro.",
          points: [
            "Alinhe o que e imediato e o que evolui em semanas.",
            "Explique que o melhor plano precisa de avaliacao.",
            "Ofereca alternativas seguras sem prometer.",
          ],
          callout: "Objetivo: expectativa realista e proximo passo elegante.",
        },
        training: {
          title: "Script de prazo curto",
          time: "10 min",
          description:
            "Treine como ajustar expectativa sem perder o fechamento.",
          prompts: [
            "Pergunte: o evento muda sua prioridade?",
            "Explique: alguns efeitos sao imediatos, outros precisam de semanas.",
            "Conduza: vamos avaliar ao vivo para indicar o que cabe no prazo.",
          ],
          drill:
            "Simule 2 chamadas com pressa e ansiedade.",
        },
        quiz: {
          id: "quiz-w2d5",
          title: "Prazo apertado",
          description: "10 casos com evento em 10 dias.",
          questions: [
            {
              q: "Evento em 10 dias, quer bioestimulador.",
              options: [
                "Alinhar que o resultado e gradual e sugerir avaliacao.",
                "Prometer resultado imediato.",
                "Dizer que nao da.",
                "Falar so de preco.",
              ],
              answer: 0,
              tip: "Alinhar expectativa.",
            },
            {
              q: "Evento em 10 dias, quer botox zerar rugas.",
              options: [
                "Explicar tempo de efeito e alinhar suavizacao.",
                "Prometer zero ruga.",
                "Nao atender.",
                "Vender pacote.",
              ],
              answer: 0,
              tip: "Tempo de efeito importa.",
            },
            {
              q: "Evento em 10 dias, quer olheira sumir.",
              options: [
                "Entender se e sombra ou cor e ajustar expectativa.",
                "Prometer que some.",
                "Dizer que e impossivel.",
                "Ignorar.",
              ],
              answer: 0,
              tip: "Sondagem antes.",
            },
            {
              q: "Evento em 10 dias, quer bigode chines.",
              options: [
                "Explicar caminhos possiveis e confirmar na avaliacao.",
                "Prometer resultado maximo.",
                "Dizer que nao da.",
                "Fechar sem avaliar.",
              ],
              answer: 0,
              tip: "Avaliacao define.",
            },
            {
              q: "Evento em 10 dias, medo de ficar inchada.",
              options: [
                "Validar o medo e explicar que o plano e personalizado.",
                "Prometer zero inchaco.",
                "Dizer que sempre incha.",
                "Ignorar.",
              ],
              answer: 0,
              tip: "Sem prometer.",
            },
            {
              q: "Evento em 10 dias, quer melhorar pele sem vico.",
              options: [
                "Alinhar que a melhora de pele e gradual.",
                "Prometer brilho imediato.",
                "Dizer que nao da.",
                "Oferecer qualquer procedimento.",
              ],
              answer: 0,
              tip: "Efeito gradual.",
            },
            {
              q: "Evento em 10 dias, quer rejuvenescimento total.",
              options: [
                "Explicar limites e priorizar uma queixa principal.",
                "Prometer total.",
                "Dizer que nao da.",
                "Ignorar.",
              ],
              answer: 0,
              tip: "Priorizar.",
            },
            {
              q: "Evento em 10 dias, ansiosa com resultado.",
              options: [
                "Mostrar que a avaliacao ajuda a escolher o melhor caminho no prazo.",
                "Prometer certeza.",
                "Falar apenas de preco.",
                "Encerrar.",
              ],
              answer: 0,
              tip: "Avaliacao e chave.",
            },
            {
              q: "Evento em 10 dias, quer mudar mandibula.",
              options: [
                "Explicar que depende de avaliacao e que podemos alinhar o que e possivel.",
                "Prometer transformacao.",
                "Dizer que nao da.",
                "Ignorar.",
              ],
              answer: 0,
              tip: "Cautela.",
            },
            {
              q: "Evento em 10 dias, pede preco rapido.",
              options: [
                "Explicar que o valor depende do plano e pedir a queixa principal.",
                "Falar valor direto.",
                "Nao falar.",
                "Encerrar.",
              ],
              answer: 0,
              tip: "Funil primeiro.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "w3",
    title: "Semana 3 - Casos mistos",
    subtitle: "Onde o aluno vira monstro de atendimento",
    days: [
      {
        id: "w3d1",
        title: "Dia 1: Bigode chines",
        focus: "Causa dominante + contribuinte.",
        lesson: {
          intro:
            "Bigode chines quase nunca e so a linha. Entenda suporte e pele.",
          points: [
            "Pode ser sulco por perda de suporte do meio da face (volume).",
            "Pode ser sulco + flacidez/qualidade da pele (bioestimulador como complemento).",
            "Pode ser sulco + perda de estrutura geral (plano em etapas).",
          ],
          callout:
            "Script consultivo: bigode chines nem sempre resolve so preenchendo a linha.",
        },
        training: {
          title: "Perguntas perfeitas",
          time: "10 min",
          description:
            "Treine as 3 perguntas chave.",
          prompts: [
            "Isso aparece mais em foto e luz de lado, ou no espelho sempre?",
            "Voce sente que a bochecha murchou ou desceu?",
            "Seu incomodo e mais a linha ou a sensacao de rosto cansado?",
          ],
          drill:
            "Leia o script consultivo e depois fale sem olhar.",
        },
        quiz: {
          id: "quiz-w3d1",
          title: "Mapa de combinacoes",
          description: "Escolha a causa dominante para bigode chines.",
          questions: [
            {
              q: "Bigode chines com bochecha murcha.",
              options: [
                "Volume e suporte",
                "Movimento",
                "Somente pele",
                "Nao tem causa",
              ],
              answer: 0,
              tip: "Suporte do meio da face.",
            },
            {
              q: "Bigode chines com pele frouxa.",
              options: [
                "Volume + pele",
                "Somente movimento",
                "So botox",
                "Nao precisa avaliacao",
              ],
              answer: 0,
              tip: "Combinar abordagens.",
            },
            {
              q: "Bigode chines e rosto sem estrutura.",
              options: [
                "Plano em etapas",
                "So botox",
                "Nao tem solucao",
                "Prometer resultado",
              ],
              answer: 0,
              tip: "Etapas e naturalidade.",
            },
          ],
        },
      },
      {
        id: "w3d2",
        title: "Dia 2: Olheira",
        focus: "Sombra, sulco, pigmento ou vasos.",
        lesson: {
          intro:
            "Olheira tem causas diferentes. Nao prometa por ligacao.",
          points: [
            "Pode ser sulco/volume (preenchimento).",
            "Pode ser pele fina/frouxa (bioestimulador ou outras estrategias).",
            "Pode ser pigmento/vasos (nao e preenchimento).",
          ],
          callout:
            "Script: entendo o tipo e direciono com seguranca.",
        },
        training: {
          title: "Perguntas que separam a causa",
          time: "10 min",
          description:
            "Treine 3 perguntas objetivas.",
          prompts: [
            "E mais afundado/sombra ou e cor escura?",
            "De manha melhora e a noite piora?",
            "Tem foto que piora muito?",
          ],
          drill:
            "Explique que sem avaliar nao da para prometer.",
        },
        quiz: {
          id: "quiz-w3d2",
          title: "Olheira em camadas",
          description: "Escolha o melhor caminho.",
          questions: [
            {
              q: "Olheira com sombra e sulco fundo.",
              options: ["Preenchimento", "Botox", "Bioestimulador", "Nao e candidato"],
              answer: 0,
              tip: "Volume.",
            },
            {
              q: "Olheira com cor escura e vasos.",
              options: ["Preenchimento", "Botox", "Bioestimulador", "Nao e candidato"],
              answer: 3,
              tip: "Nao e preenchimento.",
            },
            {
              q: "Olheira com pele fina e frouxa.",
              options: ["Preenchimento", "Botox", "Bioestimulador", "Nao e candidato"],
              answer: 2,
              tip: "Qualidade de pele.",
            },
            {
              q: "Olheira com sombra e pele fina.",
              options: ["Preenchimento", "Botox", "Bioestimulador", "Nao e candidato"],
              answer: 2,
              tip: "Pele pode ser chave.",
            },
          ],
        },
      },
      {
        id: "w3d3",
        title: "Dia 3: Rosto caindo",
        focus: "Flacidez, volume ou ambos.",
        lesson: {
          intro: "Rosto caindo pode ser firmeza, volume ou ambos.",
          points: [
            "Flacidez: bioestimulador.",
            "Perda de volume: preenchimento.",
            "Ambos: plano em fases.",
          ],
          callout:
            "Perguntas certas revelam a prioridade do paciente.",
        },
        training: {
          title: "Prioridade do paciente",
          time: "10 min",
          description:
            "Treine perguntas para definir o foco.",
          prompts: [
            "E mais firmeza da pele ou contorno que sumiu?",
            "Te incomoda mais a bochecha ou a linha da mandibula?",
            "Quer efeito imediato ou topa evolucao gradual?",
          ],
          drill: "Monte 2 planos: imediato e gradual.",
        },
        quiz: {
          id: "quiz-w3d3",
          title: "Rosto caindo",
          description: "Escolha o caminho mais provavel.",
          questions: [
            {
              q: "Queixa principal e pele frouxa.",
              options: ["Bioestimulador", "Preenchimento", "Botox", "Misto"],
              answer: 0,
              tip: "Firmeza.",
            },
            {
              q: "Queixa principal e contorno sumindo.",
              options: ["Bioestimulador", "Preenchimento", "Botox", "Misto"],
              answer: 1,
              tip: "Volume.",
            },
            {
              q: "Pele frouxa e volume perdido.",
              options: ["Bioestimulador", "Preenchimento", "Botox", "Misto"],
              answer: 3,
              tip: "Plano em fases.",
            },
            {
              q: "Quer resultado imediato, mas tem flacidez.",
              options: ["Bioestimulador", "Preenchimento", "Botox", "Misto"],
              answer: 3,
              tip: "Alinhar e combinar.",
            },
          ],
        },
      },
      {
        id: "w3d4",
        title: "Dia 4: Rugas marcadas na testa",
        focus: "Dinamica vs estatica.",
        lesson: {
          intro:
            "Ruga na testa pode ser dinamica, estatica ou misto.",
          points: [
            "Dinamica: botox.",
            "Estatica: botox ajuda, mas pode precisar complementar.",
            "Perguntas: some quando relaxa? marca mais no fim do dia? objetivo e suavizar ou zerar?",
          ],
          callout: "Nao prometa zerar se a ruga e estatica.",
        },
        training: {
          title: "Perguntas em 30 segundos",
          time: "10 min",
          description: "Treine o funil rapido para testa.",
          prompts: [
            "Some quando relaxa?",
            "Marca mais no fim do dia?",
            "Objetivo e suavizar ou zerar?",
          ],
          drill: "Monte uma resposta com 2 frases e feche com avaliacao.",
        },
        quiz: {
          id: "quiz-w3d4",
          title: "Testa marcada",
          description: "Escolha o melhor caminho.",
          questions: [
            {
              q: "Ruga some ao relaxar.",
              options: ["Botox", "Preenchimento", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Ruga marcada mesmo em repouso.",
              options: ["Botox", "Preenchimento", "Bioestimulador", "Misto"],
              answer: 3,
              tip: "Misto.",
            },
            {
              q: "Quer zerar a ruga.",
              options: ["Alinhar expectativa", "Prometer zero", "Negar atendimento", "Ignorar"],
              answer: 0,
              tip: "Alinhar.",
            },
            {
              q: "Ruga piora no fim do dia.",
              options: ["Botox", "Preenchimento", "Bioestimulador", "Misto"],
              answer: 0,
              tip: "Movimento.",
            },
          ],
        },
      },
      {
        id: "w3d5",
        title: "Dia 5: Prova final",
        focus: "10 atendimentos simulados.",
        lesson: {
          intro:
            "Cada atendimento segue o fluxo: queixa -> hipotese -> perguntas -> caminho -> proximo passo.",
          points: [
            "Mantenha empatia.",
            "Nao prometa.",
            "Conduza com seguranca.",
            "Nao fique travado no script.",
          ],
          callout: "Padrao Botolifting: aprovado com 80% e roteiro fluido.",
        },
        training: {
          title: "Simulacao final",
          time: "12 min",
          description:
            "Use 10 mini atendimentos. Cada um com 2 minutos.",
          prompts: [
            "Caso 1: testa marcada e medo de travar.",
            "Caso 2: bigode chines e bochecha murcha.",
            "Caso 3: olheira sombra e foto ruim.",
            "Caso 4: rosto caindo e pele frouxa.",
            "Caso 5: ruga estatica na testa.",
            "Caso 6: pele sem vico e evento proximo.",
            "Caso 7: mandibula sem contorno.",
            "Caso 8: pe de galinha ao sorrir.",
            "Caso 9: olheira de cor escura.",
            "Caso 10: bigode chines + flacidez.",
          ],
          drill:
            "Depois de cada caso, avalie se houve empatia, sondagem e fechamento.",
        },
        quiz: {
          id: "quiz-w3d5",
          title: "Prova final",
          description:
            "10 atendimentos simulados. Cada caso tem 3 passos.",
          questions: [
            {
              q: "Caso 1 - Passo 1: Ruga na testa some ao relaxar.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Caso 1 - Passo 2: Melhor pergunta agora:",
              options: [
                "Tem medo de ficar travada?",
                "Qual o seu signo?",
                "Quer mudar o rosto?",
                "Tem evento em 1 ano?",
              ],
              answer: 0,
              tip: "Medo e essencial.",
            },
            {
              q: "Caso 1 - Passo 3: Proximo passo:",
              options: [
                "Explicar botox e conduzir para avaliacao.",
                "Prometer zero ruga.",
                "Encerrar.",
                "Falar so de preco.",
              ],
              answer: 0,
              tip: "Direcao com seguranca.",
            },
            {
              q: "Caso 2 - Passo 1: Bigode chines e bochecha murcha.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Suporte.",
            },
            {
              q: "Caso 2 - Passo 2: Pergunta chave:",
              options: [
                "Bochecha parece que desceu?",
                "Qual o seu peso?",
                "Qual a cor dos olhos?",
                "Tem medo de botox?",
              ],
              answer: 0,
              tip: "Suporte.",
            },
            {
              q: "Caso 2 - Passo 3: Proximo passo:",
              options: [
                "Explicar suporte e confirmar na avaliacao.",
                "Prometer resultado imediato.",
                "Falar so de preco.",
                "Encerrar.",
              ],
              answer: 0,
              tip: "Avaliacao.",
            },
            {
              q: "Caso 3 - Passo 1: Olheira com sombra em foto.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Volume.",
            },
            {
              q: "Caso 3 - Passo 2: Pergunta chave:",
              options: [
                "E sombra ou e cor escura?",
                "Quer botox?",
                "Tem evento?",
                "Ja fez cirurgia?",
              ],
              answer: 0,
              tip: "Separar causa.",
            },
            {
              q: "Caso 3 - Passo 3: Proximo passo:",
              options: [
                "Direcionar para avaliacao e explicar caminhos.",
                "Prometer preenchimento.",
                "Falar so de preco.",
                "Encerrar.",
              ],
              answer: 0,
              tip: "Sem prometer.",
            },
            {
              q: "Caso 4 - Passo 1: Rosto caindo com pele frouxa.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 2,
              tip: "Flacidez.",
            },
            {
              q: "Caso 4 - Passo 2: Pergunta chave:",
              options: [
                "Quer efeito imediato ou gradual?",
                "Qual o seu signo?",
                "Tem medo de botox?",
                "Tem alergia?",
              ],
              answer: 0,
              tip: "Alinhar expectativa.",
            },
            {
              q: "Caso 4 - Passo 3: Proximo passo:",
              options: [
                "Explicar bioestimulador e conduzir para avaliacao.",
                "Prometer resultado imediato.",
                "Encerrar.",
                "Falar so de preco.",
              ],
              answer: 0,
              tip: "Plano gradual.",
            },
            {
              q: "Caso 5 - Passo 1: Ruga estatica na testa.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Movimento + marca.",
            },
            {
              q: "Caso 5 - Passo 2: Pergunta chave:",
              options: [
                "Objetivo e suavizar ou zerar?",
                "Qual o seu trabalho?",
                "Tem evento?",
                "Quer preco?",
              ],
              answer: 0,
              tip: "Alinhar expectativa.",
            },
            {
              q: "Caso 5 - Passo 3: Proximo passo:",
              options: [
                "Explicar limites e confirmar na avaliacao.",
                "Prometer zero ruga.",
                "Encerrar.",
                "Vender pacote.",
              ],
              answer: 0,
              tip: "Sem prometer.",
            },
            {
              q: "Caso 6 - Passo 1: Pele sem vico e evento proximo.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 2,
              tip: "Qualidade de pele.",
            },
            {
              q: "Caso 6 - Passo 2: Pergunta chave:",
              options: [
                "Voce topa evolucao gradual?",
                "Qual o seu signo?",
                "Quer botox?",
                "Qual a cor da pele?",
              ],
              answer: 0,
              tip: "Alinhar tempo.",
            },
            {
              q: "Caso 6 - Passo 3: Proximo passo:",
              options: [
                "Explicar que melhora e gradual e conduzir para avaliacao.",
                "Prometer brilho imediato.",
                "Encerrar.",
                "Falar so de preco.",
              ],
              answer: 0,
              tip: "Expectativa.",
            },
            {
              q: "Caso 7 - Passo 1: Mandibula sem contorno.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 1,
              tip: "Estrutura.",
            },
            {
              q: "Caso 7 - Passo 2: Pergunta chave:",
              options: [
                "Quer resultado perceptivel ou natural?",
                "Qual o seu signo?",
                "Tem medo de botox?",
                "Tem evento?",
              ],
              answer: 0,
              tip: "Alinha objetivo.",
            },
            {
              q: "Caso 7 - Passo 3: Proximo passo:",
              options: [
                "Explicar suporte e confirmar na avaliacao.",
                "Prometer resultado.",
                "Encerrar.",
                "Vender pacote.",
              ],
              answer: 0,
              tip: "Conduzir.",
            },
            {
              q: "Caso 8 - Passo 1: Pe de galinha ao sorrir.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 0,
              tip: "Movimento.",
            },
            {
              q: "Caso 8 - Passo 2: Pergunta chave:",
              options: [
                "Quer naturalidade ou zerar?",
                "Qual o seu signo?",
                "Tem evento?",
                "Ja fez cirurgia?",
              ],
              answer: 0,
              tip: "Alinhar objetivo.",
            },
            {
              q: "Caso 8 - Passo 3: Proximo passo:",
              options: [
                "Explicar botox e confirmar na avaliacao.",
                "Prometer resultado.",
                "Encerrar.",
                "Falar so de preco.",
              ],
              answer: 0,
              tip: "Direcao.",
            },
            {
              q: "Caso 9 - Passo 1: Olheira com cor escura.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Nao e volume.",
            },
            {
              q: "Caso 9 - Passo 2: Pergunta chave:",
              options: [
                "Tem foto que piora muito?",
                "Quer botox?",
                "Qual o preco?",
                "Tem evento?",
              ],
              answer: 0,
              tip: "Sondagem.",
            },
            {
              q: "Caso 9 - Passo 3: Proximo passo:",
              options: [
                "Explicar que ha causas diferentes e conduzir para avaliacao.",
                "Prometer preenchimento.",
                "Encerrar.",
                "Vender pacote.",
              ],
              answer: 0,
              tip: "Sem prometer.",
            },
            {
              q: "Caso 10 - Passo 1: Bigode chines + flacidez.",
              options: ["movimento", "volume", "flacidez-pele", "misto"],
              answer: 3,
              tip: "Combinado.",
            },
            {
              q: "Caso 10 - Passo 2: Pergunta chave:",
              options: [
                "Seu incomodo e mais a linha ou a sensacao de rosto cansado?",
                "Qual o seu signo?",
                "Tem evento?",
                "Quer preco?",
              ],
              answer: 0,
              tip: "Prioridade.",
            },
            {
              q: "Caso 10 - Passo 3: Proximo passo:",
              options: [
                "Explicar plano em etapas e confirmar na avaliacao.",
                "Prometer resultado.",
                "Encerrar.",
                "Falar so de preco.",
              ],
              answer: 0,
              tip: "Etapas.",
            },
          ],
        },
      },
    ],
  },
];

const SCRIPT_MASTER = {
  intro:
    "Use este roteiro em quase toda ligacao. Ajuste o tom, mas mantenha a logica.",
  steps: [
    {
      title: "Conexao",
      text: "Boa! Antes de eu te explicar qualquer coisa, deixa eu entender direitinho pra te orientar sem chute.",
    },
    {
      title: "Queixa em 1 frase",
      text: "Se voce tivesse que escolher uma coisa que mais te incomoda, qual e?",
    },
    {
      title: "Repouso vs expressao",
      text: "Isso aparece quando voce esta com o rosto relaxado ou mais quando faz expressao/foto?",
    },
    {
      title: "Causa provavel",
      text: "Perfeito. Isso pode ser mais uma questao de movimento, de volume, ou de firmeza da pele.",
    },
    {
      title: "Medo",
      text: "O que voce mais tem medo de acontecer com o procedimento?",
    },
    {
      title: "Proximo passo elegante",
      text: "Pelo que voce descreveu, o caminho mais provavel e X, e as vezes combina com Y pra ficar mais natural. O ideal e confirmar na avaliacao, porque olhando proporcao e movimento a gente acerta o plano exato.",
    },
  ],
  authority: [
    "Eu prefiro entender a causa antes de falar de solucao.",
    "O mais natural normalmente vem de suporte e harmonia, nao de exagero.",
    "Tem caso que resolve com 1 passo e caso que fica melhor em etapas.",
    "Por ligacao eu te dou direcao com seguranca; o plano final e na avaliacao.",
  ],
};

const STATE_KEY = "triagem-consultiva-state";

const xpPerLesson = 120;
const xpPerTraining = 120;
const xpPerQuiz = 160;
const xpPerScript = 80;

const state = loadState();
let activeDayId = state.lastDayId || COURSE[0].days[0].id;
let activeTimer = null;

const weekList = document.getElementById("weekList");
const dayLabel = document.getElementById("dayLabel");
const dayTitle = document.getElementById("dayTitle");
const dayFocus = document.getElementById("dayFocus");
const lessonBody = document.getElementById("lessonBody");
const trainingBody = document.getElementById("trainingBody");
const quizBody = document.getElementById("quizBody");
const scriptBody = document.getElementById("scriptBody");
const completeLessonButton = document.getElementById("completeLesson");
const completeTrainingButton = document.getElementById("completeTraining");
const completeScriptButton = document.getElementById("completeScript");
const xpValue = document.getElementById("xpValue");
const levelValue = document.getElementById("levelValue");
const streakValue = document.getElementById("streakValue");
const streakCopy = document.getElementById("streakCopy");
const streakTrack = document.getElementById("streakTrack");
const questList = document.getElementById("questList");
const badgeGrid = document.getElementById("badgeGrid");
const dayRing = document.getElementById("dayRing");
const dayProgressValue = document.getElementById("dayProgressValue");
const dayProgressMeta = document.getElementById("dayProgressMeta");
const overallProgressMeta = document.getElementById("overallProgressMeta");
const overallProgressFill = document.getElementById("overallProgressFill");
const progressSummary = document.getElementById("progressSummary");

const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContents = Array.from(document.querySelectorAll(".tab-content"));

const badges = [
  {
    id: "badge-dna",
    title: "Radar da Queixa",
    description: "Concluiu o Dia 1 da Semana 1.",
    check: (s) => isDayComplete("w1d1", s),
  },
  {
    id: "badge-funil",
    title: "Funil Mestre",
    description: "Concluiu o Dia 2 da Semana 1.",
    check: (s) => isDayComplete("w1d2", s),
  },
  {
    id: "badge-autoridade",
    title: "Autoridade Serena",
    description: "Concluiu o Dia 3 da Semana 1.",
    check: (s) => isDayComplete("w1d3", s),
  },
  {
    id: "badge-fechamento",
    title: "Fechamento Elegante",
    description: "Concluiu o Dia 4 da Semana 1.",
    check: (s) => isDayComplete("w1d4", s),
  },
  {
    id: "badge-week1",
    title: "Semana 1 Completa",
    description: "Finalizou os 5 dias da Semana 1.",
    check: (s) => isWeekComplete("w1", s),
  },
  {
    id: "badge-week2",
    title: "Biblioteca Viva",
    description: "Finalizou a Semana 2 inteira.",
    check: (s) => isWeekComplete("w2", s),
  },
  {
    id: "badge-week3",
    title: "Casos Mistos",
    description: "Finalizou a Semana 3 inteira.",
    check: (s) => isWeekComplete("w3", s),
  },
  {
    id: "badge-script",
    title: "Script Mestre",
    description: "Memorizou o script base.",
    check: (s) => Boolean(s.completions["script-master"]),
  },
  {
    id: "badge-elite",
    title: "Nivel Elite",
    description: "Chegou ao Level 5.",
    check: (s) => getLevel(s.xp) >= 5,
  },
];

function loadState() {
  const raw = localStorage.getItem(STATE_KEY);
  if (!raw) {
    return {
      xp: 0,
      completions: {},
      quizScores: {},
      badges: {},
      streak: 0,
      lastActive: null,
      lastDayId: null,
    };
  }
  try {
    return JSON.parse(raw);
  } catch (error) {
    return {
      xp: 0,
      completions: {},
      quizScores: {},
      badges: {},
      streak: 0,
      lastActive: null,
      lastDayId: null,
    };
  }
}

function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function getLevel(xp) {
  return Math.max(1, Math.floor(xp / 500) + 1);
}

function getTodayKey() {
  const now = new Date();
  return now.toISOString().slice(0, 10);
}

function updateStreakOnActivity() {
  const today = getTodayKey();
  if (!state.lastActive) {
    state.streak = 1;
  } else {
    const last = new Date(state.lastActive);
    const diffDays = Math.floor((new Date(today) - last) / 86400000);
    if (diffDays === 0) {
      state.streak = state.streak || 1;
    } else if (diffDays === 1) {
      state.streak = (state.streak || 0) + 1;
    } else {
      state.streak = 1;
    }
  }
  state.lastActive = today;
}

function getDayById(dayId) {
  for (const week of COURSE) {
    for (const day of week.days) {
      if (day.id === dayId) return day;
    }
  }
  return COURSE[0].days[0];
}

function getWeekById(weekId) {
  return COURSE.find((week) => week.id === weekId);
}

function getWeekForDay(dayId) {
  for (const week of COURSE) {
    if (week.days.some((day) => day.id === dayId)) return week;
  }
  return COURSE[0];
}

function getModuleId(dayId, type) {
  return `${dayId}-${type}`;
}

function isDayComplete(dayId, currentState = state) {
  const types = ["lesson", "training", "quiz"];
  return types.every((type) => currentState.completions[getModuleId(dayId, type)]);
}

function isWeekComplete(weekId, currentState = state) {
  const week = getWeekById(weekId);
  if (!week) return false;
  return week.days.every((day) => isDayComplete(day.id, currentState));
}

function getTotalModules() {
  return COURSE.reduce((total, week) => total + week.days.length * 3, 0);
}

function getCompletedModules() {
  const modules = getTotalModules();
  let completed = 0;
  COURSE.forEach((week) => {
    week.days.forEach((day) => {
      ["lesson", "training", "quiz"].forEach((type) => {
        if (state.completions[getModuleId(day.id, type)]) {
          completed += 1;
        }
      });
    });
  });
  return { completed, total: modules };
}

function renderWeekList() {
  weekList.innerHTML = "";
  COURSE.forEach((week, weekIndex) => {
    const weekCard = document.createElement("div");
    weekCard.className = "week-card";
    weekCard.style.animationDelay = `${weekIndex * 0.08}s`;

    const weekTitle = document.createElement("div");
    weekTitle.className = "week-title";
    weekTitle.textContent = week.title;

    const weekSub = document.createElement("div");
    weekSub.className = "day-meta";
    weekSub.textContent = week.subtitle;

    const dayList = document.createElement("div");
    dayList.className = "day-list";

    week.days.forEach((day) => {
      const dayCard = document.createElement("div");
      dayCard.className = "day-card";
      if (day.id === activeDayId) {
        dayCard.classList.add("active");
      }

      const completedCount = ["lesson", "training", "quiz"].filter((type) =>
        state.completions[getModuleId(day.id, type)]
      ).length;

      const dayTitle = document.createElement("div");
      dayTitle.className = "day-title";
      dayTitle.textContent = day.title;

      const dayMeta = document.createElement("div");
      dayMeta.className = "day-meta";
      dayMeta.textContent = `${completedCount}/3 passos concluidos`;

      dayCard.appendChild(dayTitle);
      dayCard.appendChild(dayMeta);
      dayCard.addEventListener("click", () => {
        activeDayId = day.id;
        state.lastDayId = day.id;
        saveState();
        renderActiveDay();
        renderWeekList();
      });

      dayList.appendChild(dayCard);
    });

    weekCard.appendChild(weekTitle);
    weekCard.appendChild(weekSub);
    weekCard.appendChild(dayList);
    weekList.appendChild(weekCard);
  });
}

function renderActiveDay() {
  const day = getDayById(activeDayId);
  const week = getWeekForDay(activeDayId);
  const weekLabel = week.title.split("-")[0].trim();
  const titleParts = day.title.split(":");
  const dayShort = titleParts[0].trim();
  dayLabel.textContent = `${weekLabel} - ${dayShort}`;
  dayTitle.textContent =
    titleParts.length > 1 ? titleParts.slice(1).join(":").trim() : day.title;
  dayFocus.textContent = day.focus;

  renderLesson(day);
  renderTraining(day);
  renderQuiz(day);
  renderScript();
  updateDayProgress(day);
  updateQuestList(day);
  updateButtons(day);
}

function renderLesson(day) {
  lessonBody.innerHTML = "";
  const card = document.createElement("div");
  card.className = "info-card";

  const title = document.createElement("h3");
  title.textContent = "Aula";

  const intro = document.createElement("p");
  intro.textContent = day.lesson.intro;

  const list = document.createElement("ul");
  list.className = "bullet-list";
  day.lesson.points.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    list.appendChild(li);
  });

  const callout = document.createElement("p");
  callout.innerHTML = `<strong>${day.lesson.callout}</strong>`;

  card.appendChild(title);
  card.appendChild(intro);
  card.appendChild(list);
  card.appendChild(callout);

  lessonBody.appendChild(card);
}

function renderTraining(day) {
  trainingBody.innerHTML = "";

  const card = document.createElement("div");
  card.className = "info-card";

  const title = document.createElement("h3");
  title.textContent = day.training.title;

  const time = document.createElement("p");
  time.textContent = `Tempo sugerido: ${day.training.time}`;

  const description = document.createElement("p");
  description.textContent = day.training.description;

  const list = document.createElement("ul");
  list.className = "bullet-list";
  day.training.prompts.forEach((prompt) => {
    const li = document.createElement("li");
    li.textContent = prompt;
    list.appendChild(li);
  });

  const drill = document.createElement("p");
  drill.innerHTML = `<strong>${day.training.drill}</strong>`;

  card.appendChild(title);
  card.appendChild(time);
  card.appendChild(description);
  card.appendChild(list);
  card.appendChild(drill);

  const timerCard = document.createElement("div");
  timerCard.className = "info-card";
  timerCard.innerHTML = `
    <h3>Timer de treino</h3>
    <p>Use para manter o ritmo do treino de fala.</p>
    <div class="timer">
      <span class="timer-display" id="timerDisplay">10:00</span>
      <button id="timerStart">Iniciar</button>
      <button id="timerPause">Pausar</button>
      <button id="timerReset">Resetar</button>
      <button data-time="360">6 min</button>
      <button data-time="480">8 min</button>
      <button data-time="600">10 min</button>
    </div>
  `;

  trainingBody.appendChild(card);
  trainingBody.appendChild(timerCard);
  setupTimer();
}

function setupTimer() {
  if (activeTimer) {
    clearInterval(activeTimer);
    activeTimer = null;
  }

  const display = document.getElementById("timerDisplay");
  const start = document.getElementById("timerStart");
  const pause = document.getElementById("timerPause");
  const reset = document.getElementById("timerReset");
  const presetButtons = Array.from(
    document.querySelectorAll("button[data-time]")
  );

  if (!display || !start || !pause || !reset) return;

  let duration = 600;
  let remaining = duration;

  const updateDisplay = () => {
    const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
    const seconds = String(remaining % 60).padStart(2, "0");
    display.textContent = `${minutes}:${seconds}`;
  };

  const stopTimer = () => {
    if (activeTimer) {
      clearInterval(activeTimer);
      activeTimer = null;
    }
  };

  start.addEventListener("click", () => {
    if (activeTimer) return;
    activeTimer = setInterval(() => {
      if (remaining <= 0) {
        stopTimer();
        return;
      }
      remaining -= 1;
      updateDisplay();
    }, 1000);
  });

  pause.addEventListener("click", () => {
    stopTimer();
  });

  reset.addEventListener("click", () => {
    stopTimer();
    remaining = duration;
    updateDisplay();
  });

  presetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const newTime = Number(button.dataset.time);
      duration = newTime;
      remaining = newTime;
      updateDisplay();
    });
  });

  updateDisplay();
}

function renderQuiz(day) {
  quizBody.innerHTML = "";
  const quiz = day.quiz;
  const quizContainer = document.createElement("div");
  quizContainer.className = "quiz-box";

  const title = document.createElement("h3");
  title.textContent = quiz.title;

  const description = document.createElement("p");
  description.textContent = quiz.description;

  const progressBar = document.createElement("div");
  progressBar.className = "quiz-progress";
  const progressFill = document.createElement("span");
  progressBar.appendChild(progressFill);

  const questionText = document.createElement("div");
  questionText.className = "info-card";

  const optionsWrap = document.createElement("div");
  optionsWrap.className = "quiz-options";

  const feedback = document.createElement("p");
  feedback.className = "muted";

  const footer = document.createElement("div");
  footer.className = "quiz-footer";

  const status = document.createElement("span");
  status.className = "muted";

  const nextButton = document.createElement("button");
  nextButton.className = "action";
  nextButton.textContent = "Proxima";

  const restartButton = document.createElement("button");
  restartButton.className = "action";
  restartButton.textContent = "Refazer";
  restartButton.style.display = "none";

  footer.appendChild(status);
  footer.appendChild(nextButton);
  footer.appendChild(restartButton);

  quizContainer.appendChild(title);
  quizContainer.appendChild(description);
  if (state.quizScores[quiz.id]) {
    const score = state.quizScores[quiz.id];
    const scoreText = document.createElement("p");
    scoreText.className = "muted";
    scoreText.textContent = `Ultimo score: ${score.score}/${score.total}`;
    quizContainer.appendChild(scoreText);
  }
  quizContainer.appendChild(progressBar);
  quizContainer.appendChild(questionText);
  quizContainer.appendChild(optionsWrap);
  quizContainer.appendChild(feedback);
  quizContainer.appendChild(footer);

  quizBody.appendChild(quizContainer);

  let currentIndex = 0;
  let correctCount = 0;
  let answered = false;
  let combo = 0;

  const renderQuestion = () => {
    const question = quiz.questions[currentIndex];
    questionText.textContent = question.q;
    optionsWrap.innerHTML = "";
    feedback.textContent = "";
    answered = false;

    question.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.className = "quiz-option";
      button.textContent = option;
      button.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const isCorrect = optionIndex === question.answer;
        if (isCorrect) {
          button.classList.add("correct");
          correctCount += 1;
          combo += 1;
          feedback.textContent = `Correto! ${question.tip}`;
        } else {
          button.classList.add("wrong");
          combo = 0;
          feedback.textContent = `Resposta ideal: ${
            question.options[question.answer]
          }. ${question.tip}`;
        }

        status.textContent = `Questao ${currentIndex + 1} de ${
          quiz.questions.length
        } | Combo ${combo}`;
      });
      optionsWrap.appendChild(button);
    });

    status.textContent = `Questao ${currentIndex + 1} de ${
      quiz.questions.length
    }`;
    progressFill.style.width = `${Math.round(
      (currentIndex / quiz.questions.length) * 100
    )}%`;
  };

  const finishQuiz = () => {
    const total = quiz.questions.length;
    const score = correctCount;
    const percent = Math.round((score / total) * 100);

    progressFill.style.width = "100%";
    questionText.textContent = `Resultado: ${score}/${total} (${percent}%)`;
    optionsWrap.innerHTML = "";
    feedback.textContent =
      percent >= 80
        ? "Mandou bem! Agora finalize o dia com seguranca."
        : "Refaca o quiz para chegar em 80% ou mais.";

    nextButton.style.display = "none";
    restartButton.style.display = "inline-flex";

    if (!state.completions[getModuleId(activeDayId, "quiz")]) {
      const bonus = Math.round((score / total) * 80);
      const xpGain = xpPerQuiz + bonus;
      awardXp(xpGain);
      markCompletion(activeDayId, "quiz");
    }

    state.quizScores[quiz.id] = { score, total };
    saveState();
    updateQuestList(getDayById(activeDayId));
    updateStats();
    updateDayProgress(getDayById(activeDayId));
    renderWeekList();
  };

  nextButton.addEventListener("click", () => {
    if (!answered) return;
    if (currentIndex < quiz.questions.length - 1) {
      currentIndex += 1;
      renderQuestion();
      progressFill.style.width = `${Math.round(
        (currentIndex / quiz.questions.length) * 100
      )}%`;
    } else {
      finishQuiz();
    }
  });

  restartButton.addEventListener("click", () => {
    currentIndex = 0;
    correctCount = 0;
    combo = 0;
    nextButton.style.display = "inline-flex";
    restartButton.style.display = "none";
    renderQuestion();
  });

  renderQuestion();
}

function renderScript() {
  scriptBody.innerHTML = "";
  const intro = document.createElement("p");
  intro.textContent = SCRIPT_MASTER.intro;

  const stepsCard = document.createElement("div");
  stepsCard.className = "info-card";
  const stepsTitle = document.createElement("h3");
  stepsTitle.textContent = "Script mestre";
  stepsCard.appendChild(stepsTitle);

  SCRIPT_MASTER.steps.forEach((step) => {
    const block = document.createElement("div");
    block.innerHTML = `<strong>${step.title}</strong><p>${step.text}</p>`;
    stepsCard.appendChild(block);
  });

  const authorityCard = document.createElement("div");
  authorityCard.className = "info-card";
  const authorityTitle = document.createElement("h3");
  authorityTitle.textContent = "Mini cola de autoridade";
  const list = document.createElement("ul");
  list.className = "bullet-list";
  SCRIPT_MASTER.authority.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    list.appendChild(li);
  });
  authorityCard.appendChild(authorityTitle);
  authorityCard.appendChild(list);

  scriptBody.appendChild(intro);
  scriptBody.appendChild(stepsCard);
  scriptBody.appendChild(authorityCard);
}

function updateButtons(day) {
  const lessonId = getModuleId(day.id, "lesson");
  const trainingId = getModuleId(day.id, "training");
  const quizId = getModuleId(day.id, "quiz");

  completeLessonButton.disabled = Boolean(state.completions[lessonId]);
  completeLessonButton.textContent = state.completions[lessonId]
    ? "Aula concluida"
    : "Marcar aula como feita";

  completeTrainingButton.disabled = Boolean(state.completions[trainingId]);
  completeTrainingButton.textContent = state.completions[trainingId]
    ? "Treino concluido"
    : "Marcar treino como feito";

  completeScriptButton.disabled = Boolean(state.completions["script-master"]);
  completeScriptButton.textContent = state.completions["script-master"]
    ? "Script memorizado"
    : "Marcar script como memorizado";

}

function updateDayProgress(day) {
  const types = ["lesson", "training", "quiz"];
  const done = types.filter((type) =>
    state.completions[getModuleId(day.id, type)]
  ).length;
  const percent = Math.round((done / types.length) * 100);

  dayRing.style.background = `conic-gradient(var(--accent) ${
    percent * 3.6
  }deg, rgba(15, 27, 22, 0.12) 0deg)`;
  dayProgressValue.textContent = `${percent}%`;
  dayProgressMeta.textContent = `${done}/${types.length} passos`;
}

function updateQuestList(day) {
  const lessonDone = Boolean(state.completions[getModuleId(day.id, "lesson")]);
  const trainingDone = Boolean(
    state.completions[getModuleId(day.id, "training")]
  );
  const quizScore = state.quizScores[day.quiz.id];
  const quizDone = Boolean(state.completions[getModuleId(day.id, "quiz")]);
  const quizGoalMet = quizScore
    ? Math.round((quizScore.score / quizScore.total) * 100) >= 80
    : false;

  questList.innerHTML = "";
  const quests = [
    { label: "Completar a aula", done: lessonDone },
    { label: "Completar treino de fala", done: trainingDone },
    { label: "Fazer quiz com 80%", done: quizDone && quizGoalMet },
  ];

  quests.forEach((quest) => {
    const li = document.createElement("li");
    li.textContent = quest.label;
    if (quest.done) li.classList.add("completed");
    questList.appendChild(li);
  });
}

function updateStats() {
  xpValue.textContent = state.xp;
  const level = getLevel(state.xp);
  levelValue.textContent = level;
  streakValue.textContent = `${state.streak || 0} dias`;
  streakCopy.textContent =
    state.streak >= 3
      ? "Streak forte! Mantenha a consistencia."
      : "Complete um passo hoje para manter o ritmo.";

  streakTrack.innerHTML = "";
  for (let i = 0; i < 7; i += 1) {
    const dot = document.createElement("div");
    dot.className = "streak-dot";
    if (i < (state.streak || 0)) {
      dot.classList.add("active");
    }
    streakTrack.appendChild(dot);
  }

  const progress = getCompletedModules();
  const percent = Math.round((progress.completed / progress.total) * 100);
  overallProgressMeta.textContent = `${percent}% concluido`;
  overallProgressFill.style.width = `${percent}%`;
  progressSummary.textContent = `${progress.completed}/${progress.total} passos concluidos`;

  updateBadges();
}

function updateBadges() {
  badgeGrid.innerHTML = "";
  badges.forEach((badge) => {
    const unlocked = badge.check(state);
    if (unlocked) {
      state.badges[badge.id] = true;
    }
    const card = document.createElement("div");
    card.className = `badge ${unlocked ? "" : "locked"}`.trim();
    const title = document.createElement("div");
    title.className = "badge-title";
    title.textContent = badge.title;
    const desc = document.createElement("div");
    desc.className = "badge-desc";
    desc.textContent = badge.description;
    card.appendChild(title);
    card.appendChild(desc);
    badgeGrid.appendChild(card);
  });
  saveState();
}

function markCompletion(dayId, type) {
  const moduleId = getModuleId(dayId, type);
  if (state.completions[moduleId]) return;
  state.completions[moduleId] = true;
  updateStreakOnActivity();
  saveState();
}

function awardXp(amount) {
  state.xp += amount;
  updateStreakOnActivity();
  saveState();
}

completeLessonButton.addEventListener("click", () => {
  markCompletion(activeDayId, "lesson");
  awardXp(xpPerLesson);
  updateStats();
  updateButtons(getDayById(activeDayId));
  updateDayProgress(getDayById(activeDayId));
  updateQuestList(getDayById(activeDayId));
  renderWeekList();
});

completeTrainingButton.addEventListener("click", () => {
  markCompletion(activeDayId, "training");
  awardXp(xpPerTraining);
  updateStats();
  updateButtons(getDayById(activeDayId));
  updateDayProgress(getDayById(activeDayId));
  updateQuestList(getDayById(activeDayId));
  renderWeekList();
});

completeScriptButton.addEventListener("click", () => {
  if (!state.completions["script-master"]) {
    state.completions["script-master"] = true;
    awardXp(xpPerScript);
    updateStats();
    updateButtons(getDayById(activeDayId));
  }
});

function setupTabs() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));
      tab.classList.add("active");
      const target = document.getElementById(`tab-${tab.dataset.tab}`);
      if (target) target.classList.add("active");
    });
  });
}

setupTabs();
renderWeekList();
renderActiveDay();
updateStats();
