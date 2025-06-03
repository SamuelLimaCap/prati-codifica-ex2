import promptSync from "prompt-sync";

const prompt = promptSync();

function description() {
  return "Fatorial Recursivo";
}

function code() {
  console.log("Digite um valor para realizar o fatorial recursivo.");

  let num = Number(prompt("Valor: "));

  try {
    let result = fatorial(num);

    console.log(`Resultado: ${result}`);
  } catch (error) {
    let errorMessage = "";

    switch (error.message) {
      case "num-minor-than-0":
        errorMessage = "Número é menor que 0";
        break;
      case "nan":
        errorMessage = "O que você digitou não é um número";
        break;
    }

    console.log(`Erro: ${errorMessage}`);
  }
}

function fatorial(num) {
  if (num < 0) throw Error("num-minor-than-0");
  if (isNaN(num)) throw Error("nan");
  if (num == 0 || num == 1) return 1;
  return num * fatorial(num - 1);
}

export { description as description, code as code, fatorial as fatorial };
