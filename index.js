import promptSync from "prompt-sync";
import CColors from "./colors.js";
import ex1 from "./exercises/ex1.js";
import ex2 from "./exercises/ex2.js";
import ex3 from "./exercises/ex3.js";
import ex4 from "./exercises/ex4.js";
import ex5 from "./exercises/ex5.js";
import ex6 from "./exercises/ex6.js";
import ex7 from "./exercises/ex7.js";
import ex8 from "./exercises/ex8.js";
import ex9 from "./exercises/ex9.js";

const prompt = promptSync();

const exercises = {
  section1: { 1: ex1, 2: ex2, 3: ex3 },
  section2: { 4: ex4, 5: ex5, 6: ex6 },
  section3: { 7: ex7, 8: ex8, 9: ex9 },
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
  let exSelected = Number(prompt("Opção: "));
  consoleLogDivider();

  let exitMenu = false;

  if (isNaN(exSelected) || !hasEx(exSelected)) {
    console.log(CColors["Reset"], "");
    console.log(CColors["FgRed"], "Não existe esse exercício");
    console.log(CColors["Reset"], "");
  } else {
    console.log("");
    console.log(
      `  Executando exercicio ${exSelected} -> ${getEx(exSelected).description()}`,
    );

    console.log;
    let shouldQuitMenu = playExercise(exSelected);
    if (shouldQuitMenu) exitMenu = true;

    alreadyPlayedExercises[exSelected] = true;
    console.log("----------");
    console.log("");
  }

  if (exitMenu) return false;

  displayWannaPlayAgain();
  let shouldRunAgain = prompt("Opção: ");

  if (shouldRunAgain == "s") {
    return true;
  }
  return false;
}

function playExercise(exNum) {
  return getEx(exNum).code();
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
  for (const [section, listEx] of Object.entries(exercises)) {
    console.log(`seção ${section.toString().slice(-1)}`);
    for (const [num, ex] of Object.entries(listEx)) {
      let indexToString = num < 10 ? "0" + num : num;
      let iconChecked = alreadyPlayedExercises[num]
        ? CColors["FgGreen"] + "\u2713" + CColors["Reset"]
        : "";
      console.log(`  ${indexToString} || ${ex.description()} ${iconChecked}`);
    }
  }
}

function hasEx(num) {
  if (
    num in exercises.section1 ||
    num in exercises.section2 ||
    num in exercises.section3
  )
    return true;
  return false;
}

function getEx(num) {
  if (num in exercises.section1) return exercises.section1[num];
  if (num in exercises.section2) return exercises.section2[num];
  if (num in exercises.section3) return exercises.section3[num];

  return undefined;
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
