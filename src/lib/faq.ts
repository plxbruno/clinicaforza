/**
 * Perguntas frequentes da home.
 *
 * Servem a dois publicos ao mesmo tempo:
 * 1. O paciente que chega com duvida real antes de agendar.
 * 2. A busca — cada pergunta cobre um termo de cauda longa que hoje o site
 *    nao respondia ("tirzepatida e o mesmo que mounjaro", "quanto custa
 *    tirzepatida bh"), e o bloco inteiro vira FAQPage no JSON-LD.
 *
 * Regra da copy: nenhuma promessa de resultado, nenhum numero apresentado
 * como garantia, e toda resposta clinica termina remetendo a avaliacao
 * medica. Conteudo de saude e YMYL — o Google avalia por E-E-A-T, e o CFM
 * limita o que pode ser dito em publicidade medica.
 *
 * `answer` e texto puro de proposito: entra igual na tela e no JSON-LD,
 * sem HTML para escapar nem divergencia entre os dois.
 */

export type FaqItem = {
  question: string
  answer: string
}

/**
 * Data da ultima revisao clinica deste conteudo. Aparece na assinatura da
 * secao e vira `lastReviewed` do MedicalWebPage. Atualizar sempre que o
 * Dr. Bruno revisar as respostas — um `lastReviewed` antigo com conteudo
 * novo e pior do que nao ter o campo.
 */
export const faqLastReviewed = '2026-08-19'

export const faq: FaqItem[] = [
  {
    question: 'O que é a tirzepatida e como ela age no emagrecimento?',
    answer:
      'A tirzepatida é um medicamento injetável de aplicação semanal que ativa dois receptores ligados ao controle do apetite e do metabolismo, o GIP e o GLP-1. Na prática, ela aumenta a saciedade, retarda o esvaziamento do estômago e reduz a fome — o que torna o déficit calórico sustentável sem a sensação constante de privação. Não é um queimador de gordura nem substitui alimentação e atividade física: é uma ferramenta que se soma ao acompanhamento clínico.',
  },
  {
    question: 'Tirzepatida é o mesmo que Mounjaro?',
    answer:
      'Sim. Tirzepatida é o nome da substância ativa; Mounjaro é o nome comercial com que ela é vendida no Brasil. São o mesmo medicamento — a diferença está apenas no rótulo.',
  },
  {
    question:
      'Qual a diferença entre tirzepatida e semaglutida (Ozempic e Wegovy)?',
    answer:
      'A semaglutida age em um receptor, o GLP-1. A tirzepatida age em dois, GIP e GLP-1. Nos estudos clínicos de perda de peso, a tirzepatida mostrou perda média maior que a da semaglutida, inclusive em comparação direta entre as duas. Isso não significa que ela seja a melhor escolha para todo mundo: histórico de saúde, tolerância aos efeitos colaterais, medicações em uso e objetivo do tratamento mudam a indicação. A definição de qual usar é feita na consulta.',
  },
  {
    question: 'Quanto custa o tratamento com tirzepatida em Belo Horizonte?',
    answer:
      'Na Clínica Forza o primeiro mês do plano de acompanhamento sai por R$ 599, com a tirzepatida já inclusa. O plano tem 3 meses e cobre consulta médica, avaliação física com bioimpedância, monitoramento semanal, consultas de retorno e suporte por WhatsApp. Não há taxa de adesão. Os valores das mensalidades seguintes são apresentados na consulta, antes de qualquer compromisso.',
  },
  {
    question: 'A tirzepatida está inclusa no valor do plano?',
    answer:
      'Sim. A medicação está inclusa durante todo o período do plano.',
  },
  {
    question: 'Quais são os efeitos colaterais mais comuns?',
    answer:
      'Os mais frequentes são gastrointestinais: náusea, diarreia, constipação, vômito e má digestão. Costumam ser leves a moderados, aparecem mais no início e a cada aumento de dose, e tendem a diminuir com o tempo. O aumento gradual da dose e o ajuste da alimentação reduzem bastante esses sintomas — parte do trabalho do acompanhamento semanal é justamente esse. Efeitos mais raros e mais sérios existem e são avaliados caso a caso na consulta.',
  },
  {
    question: 'Quem pode e quem não pode usar tirzepatida?',
    answer:
      'A tirzepatida é um medicamento de prescrição e não é indicada para todos. Há contraindicações claras, como histórico pessoal ou familiar de carcinoma medular de tireoide e neoplasia endócrina múltipla tipo 2, além de situações que exigem cautela — gravidez, amamentação, histórico de pancreatite e algumas doenças gastrointestinais. Por isso a prescrição só acontece depois de avaliação clínica com exames, bioimpedância e história completa. Se não for o tratamento certo para você, o caminho é outro — e isso é dito na consulta.',
  },
  {
    question: 'Preciso usar para sempre? O que acontece se eu parar?',
    answer:
      'A obesidade é uma condição crônica, e a interrupção do medicamento costuma ser seguida de retomada de parte do peso perdido — isso é observado nos estudos e não é falha de força de vontade. O objetivo do acompanhamento é usar o período de tratamento para construir mudanças que se sustentem: alimentação, rotina, sono e força muscular. A duração do uso e a estratégia de saída são decididas junto com você, ao longo do processo, e não definidas de antemão.',
  },
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'A primeira consulta é uma avaliação clínica completa: história de saúde, medicações em uso, tentativas anteriores, exames e avaliação física com bioimpedância. Só depois disso se define se há indicação para tirzepatida e qual o plano de tratamento. Nada é prescrito antes dessa avaliação.',
  },
  {
    question: 'A clínica atende convênio?',
    answer:
      'Não. O atendimento na Clínica Forza é particular.',
  },
  {
    question: 'Onde fica a clínica e como agendar?',
    answer:
      'A Clínica Forza fica na Rua Rio Grande do Norte, 726, Sala 305, na Savassi, em Belo Horizonte. O agendamento é feito direto pelo WhatsApp (31) 98323-9199, de segunda a sexta das 8h às 19h e aos sábados das 8h às 12h.',
  },
]
