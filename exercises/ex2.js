import promptSync from "prompt-sync";

let prompt = promptSync();

function description() {
  return "Jogo de advinhação";
}

function code() {
  const random = Math.floor(Math.random() * 100) + 1;

  let userGotItRight = false;
  let attempts = 0;
  console.log("Caso queira desistir, digite -1");
  do {
    let number = Number(prompt("Digite um valor de 1 até 100: "));
    attempts++;

    if (isNaN(number)) console.log("O que você digitou não é um número");

    if (number == -1) {
      break;
    }

    if (number < 1 || number > 100) {
      console.log("Eu falei pra ser um número entre e 1 e 100...");
    }

    if (number == random) {
      userGotItRight = true;
      continue;
    }

    if (number > random)
      console.log("O número que você digitou está acima do número gerado");
    if (number < random)
      console.log("O número que você digitou está abaixo do número gerado");
  } while (!userGotItRight);

  if (userGotItRight) {
    console.log("Parabens! Você acertou o número!");
  } else {
    console.log("Encerrando o jogo por motivos de desistência do jogador");
  }
  console.log(`Número de tentativas: ${attempts}`);
}

export default {
  description: description,
  code: code,
};
