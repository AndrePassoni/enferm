const questionsData = [
  // Unidade 1
  {
    unit: 1,
    question: "O que é pressão arterial normal para adultos saudáveis?",
    options: ["120/80 mmHg", "140/90 mmHg", "90/60 mmHg", "160/100 mmHg"],
    answer: "120/80 mmHg",
  },
  {
    unit: 1,
    question: "Qual equipamento é usado para medir a pressão arterial?",
    options: ["Oxímetro", "Estetoscópio", "Esfigmomanômetro", "Glicosímetro"],
    answer: "Esfigmomanômetro",
  },
  {
    unit: 1,
    question: "Qual valor indica hipertensão estágio 1?",
    options: ["120/80", "130/85", "140/90", "160/110"],
    answer: "140/90",
  },

  // Unidade 2
  {
    unit: 2,
    question: "O que é um antibiótico?",
    options: [
      "Uma vitamina",
      "Um antiviral",
      "Um agente que combate bactérias",
      "Um analgésico",
    ],
    answer: "Um agente que combate bactérias",
  },
  {
    unit: 2,
    question: "A penicilina foi descoberta por quem?",
    options: [
      "Marie Curie",
      "Alexander Fleming",
      "Louis Pasteur",
      "Albert Einstein",
    ],
    answer: "Alexander Fleming",
  },
  {
    unit: 2,
    question: "Qual a principal via de administração da penicilina G benzatina?",
    options: ["Oral", "Intramuscular", "Intravenosa", "Subcutânea"],
    answer: "Intramuscular",
  },

  // Unidade 3
  {
    unit: 3,
    question: "Qual é a temperatura corporal normal?",
    options: ["35°C", "36.5°C", "37°C", "38.5°C"],
    answer: "37°C",
  },
  {
    unit: 3,
    question: "O que significa febre?",
    options: [
      "Temperatura abaixo de 36°C",
      "Temperatura entre 36–37°C",
      "Temperatura acima de 37.8°C",
      "Temperatura estável",
    ],
    answer: "Temperatura acima de 37.8°C",
  },
  {
    unit: 3,
    question: "Qual termômetro é mais comum em hospitais?",
    options: ["De mercúrio", "Digital", "Infravermelho", "De vidro"],
    answer: "Digital",
  },

  // Unidade 4
  {
    unit: 4,
    question: "O que é hipoglicemia?",
    options: [
      "Excesso de glicose no sangue",
      "Falta de glicose no sangue",
      "Aumento da pressão",
      "Falta de sódio",
    ],
    answer: "Falta de glicose no sangue",
  },
  {
    unit: 4,
    question: "Qual o valor normal de glicemia em jejum?",
    options: ["Menor que 70 mg/dL", "70–99 mg/dL", "100–125 mg/dL", "Acima de 126 mg/dL"],
    answer: "70–99 mg/dL",
  },
  {
    unit: 4,
    question: "Qual equipamento mede a glicemia capilar?",
    options: ["Esfigmomanômetro", "Termômetro", "Glicosímetro", "Eletrocardiógrafo"],
    answer: "Glicosímetro",
  },

  // Unidade 5
  {
    unit: 5,
    question: "O que é um pulso normal em adultos?",
    options: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
    answer: "60-100 bpm",
  },
  {
    unit: 5,
    question: "Qual local é comum para aferir o pulso?",
    options: ["Carotídeo", "Femoral", "Radial", "Axilar"],
    answer: "Radial",
  },
  {
    unit: 5,
    question: "Como é chamada a frequência cardíaca acima de 100 bpm?",
    options: ["Bradicardia", "Taquicardia", "Arritmia", "Hipertensão"],
    answer: "Taquicardia",
  },

  // Unidade 6
  {
    unit: 6,
    question: "Qual exame detecta atividade elétrica do coração?",
    options: ["Raio-X", "Ultrassom", "ECG", "Tomografia"],
    answer: "ECG",
  },
  {
    unit: 6,
    question: "O que o eletrocardiograma avalia?",
    options: ["Glicose", "Batimentos cardíacos", "Níveis de oxigênio", "Temperatura"],
    answer: "Batimentos cardíacos",
  },
  {
    unit: 6,
    question: "O que significa uma linha reta no ECG?",
    options: ["Batimento acelerado", "Batimento lento", "Sem atividade elétrica", "Erro no exame"],
    answer: "Sem atividade elétrica",
  },

  // Unidade 7
  {
    unit: 7,
    question: "Qual profissional aplica vacinas?",
    options: ["Médico", "Enfermeiro", "Nutricionista", "Psicólogo"],
    answer: "Enfermeiro",
  },
  {
    unit: 7,
    question: "Onde é aplicada a vacina BCG?",
    options: ["Glúteo", "Braço direito", "Coxa", "Braço esquerdo"],
    answer: "Braço direito",
  },
  {
    unit: 7,
    question: "Qual tipo de vacina é a da gripe?",
    options: ["Vírus vivo atenuado", "Toxina", "Vírus inativado", "Bactéria morta"],
    answer: "Vírus inativado",
  },

  // Unidade 8
  {
    unit: 8,
    question: "O que é assepsia?",
    options: ["Limpeza com sabão", "Uso de álcool", "Ausência de micro-organismos", "Esterilização do ambiente"],
    answer: "Ausência de micro-organismos",
  },
  {
    unit: 8,
    question: "Qual EPI protege os olhos?",
    options: ["Máscara", "Avental", "Luvas", "Óculos de proteção"],
    answer: "Óculos de proteção",
  },
  {
    unit: 8,
    question: "Lavar as mãos evita:",
    options: ["Contaminação cruzada", "Doenças mentais", "Fraturas", "Dor muscular"],
    answer: "Contaminação cruzada",
  },

  // Unidade 9
  {
    unit: 9,
    question: "Qual a via de administração mais rápida?",
    options: ["Oral", "Intramuscular", "Intravenosa", "Subcutânea"],
    answer: "Intravenosa",
  },
  {
    unit: 9,
    question: "O que é dose terapêutica?",
    options: ["Dose mínima", "Dose máxima segura", "Dose para causar efeito", "Dose letal"],
    answer: "Dose para causar efeito",
  },
  {
    unit: 9,
    question: "Qual a via mais usada para vacinas?",
    options: ["Intravenosa", "Oral", "Subcutânea", "Intramuscular"],
    answer: "Intramuscular",
  },

  // Unidade 10
  {
    unit: 10,
    question: "Qual profissional avalia sinais vitais?",
    options: ["Nutricionista", "Fisioterapeuta", "Enfermeiro", "Farmacêutico"],
    answer: "Enfermeiro",
  },
  {
    unit: 10,
    question: "Oximetria mede:",
    options: ["Temperatura", "Glicose", "Saturação de oxigênio", "Pulso"],
    answer: "Saturação de oxigênio",
  },
  {
    unit: 10,
    question: "Qual o valor normal de saturação de O2?",
    options: ["85-90%", "90-94%", "95-100%", "100-105%"],
    answer: "95-100%",
  },
];

export default questionsData;
