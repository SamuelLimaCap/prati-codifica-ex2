import promptSync from "prompt-sync";
import CColors from "./colors.mjs";

const prompt = promptSync();

const exercises = {
  section1: {},
  section2: {},
  section3: {},
};

const alreadyPlayedExercises = {};

function start() {
  let wannaRunAgain = true;
  do {
    wannaRunAgain = runQuestions();
  } while (wannaRunAgain);
}

function runQuestions() {
  console.log(CColors["FgBlue"], "Lista de exercícios 2 - prati+");

  console.log("");
  consoleLogInfo("Selecione o número da questão que deseja testar");

  displayQuestionList();
  consoleLogDivider();
  console.log(CColors["Reset"], "");
  let questionSelected = Number(prompt("Opção: "));
  consoleLogDivider();

  if (
    Object.keys(questions).length < questionSelected ||
    questionSelected == 0 ||
    isNaN(questionSelected)
  ) {
    console.log(CColors["Reset"], "");
    console.log(CColors["FgRed"], "Não existe esse exercício");
    console.log(CColors["Reset"], "");
  } else {
    console.log("");
    console.log(
      `  Executando exercicio ${questionSelected} -> ${questions[questionSelected].descricao()}`,
    );

    console.log;
    playExercise(questionSelected);
    alreadyPlayedExercises[questionSelected] = true;
    console.log("----------");
    console.log("");
  }

  displayWannaPlayAgain();
  let shouldRunAgain = prompt("Opção: ");
  if (shouldRunAgain == "s") {
    return true;
  }
  return false;
}

function playExercise(questionNumber) {
  questions[questionNumber].questao();
}

function displayWannaPlayAgain() {
  consoleLogInfo("Deseja voltar para a lista de seleção?");
  console.log(
    CColors["BgGreen"],
    CColors["FgWhite"],
    "s || sim",
    CColors["Reset"],
  );
  console.log(
    CColors["BgRed"],
    CColors["FgWhite"],
    "n || não",
    CColors["Reset"],
  );
  consoleLogDivider();
  console.log(CColors["Reset"], "");
}

function displayQuestionList() {
  for (let indexValue in questions) {
    let indexToString = indexValue < 10 ? "0" + indexValue : indexValue;
    let iconChecked = alreadyPlayedExercises[indexValue]
      ? CColors["FgGreen"] + "\u2713" + CColors["Reset"]
      : "";
    console.log(
      `  ${indexToString} || ${questions[indexValue].descricao()} ${iconChecked}`,
    );
  }
}

function consoleLogInfo(...textArguments) {
  consoleLogDivider();
  console.log(
    CColors["BgBlue"],
    CColors["FgWhite"],
    CColors["Bright"],
    ...textArguments,
    CColors["Reset"],
  );
  consoleLogDivider();
}

function consoleLogDivider() {
  console.log(
    CColors["BgBlue"],
    CColors["FgWhite"],
    "----------",
    CColors["Reset"],
  );
}

start();
