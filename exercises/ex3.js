import promptSync from "prompt-sync";

const prompt = promptSync();

function description() {
  return "Extrator de palavras únicas";
}

function code() {
  console.log(
    "Digite uma sequência de palavras que retornaremos um array dessas palavras para ti",
  );
  let linha = prompt("Digite aqui: ");

  if (typeof linha === "string" || linha instanceof String) {
    let linhaArrayRaw = linha.split(" ");
    let linhaArrayFiltered = linhaArrayRaw.filter((value) => value != "");
    let LAFtoSet = [...new Set(linhaArrayFiltered)];

    console.log("[");
    for (let i = 0; i < LAFtoSet.length; i++) {
      const complement = LAFtoSet.length - 1 != i ? "," : "";
      console.log(`${LAFtoSet[i]}${complement}`);
    }
    console.log("]");
  } else {
    console.log("O que você digitou não é uma sequencia de palavras");
  }
}

export default {
  description: description,
  code: code,
};
