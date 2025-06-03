import promptSync from "prompt-sync";
import { fatorial } from "./ex4.js";

const prompt = promptSync();

function description() {
  return "Debounce de função(fatorial)";
}

function code() {
  console.log("Nesse exercicio, iremos realizar 3 execuções:");
  console.log(
    "1° - Iremos realizar o fatorial do número digitado pelo delay de 2 segundos através do método debounce",
  );
  console.log(
    "2° - Iremos realizar o fatorial de 1 número acima do digitado antes do delay do método debounce completar",
  );
  console.log(
    "3° - Iremos realizar o fatorial de 2 números acima do digitado depois do metodo debounce completar",
  );

  let number = parseInt(prompt("Digite um valor para realizar o fatorial: "));

  let debounceFatorial = debounce(fatorial, 2000);
  debounceFatorial(number);
  debounceFatorial(number + 1);
  setTimeout(() => {
    debounceFatorial(number + 2);
  }, 2100);
}

function debounce(functionToDebounce, delayMs) {
  console.log("Criando o debounce");
  let timeoutId;

  return function (...args) {
    console.log("Executando debounce");
    if (
      timeoutId &&
      timeoutId._idlePrev != undefined &&
      timeoutId._idlePrev != null
    ) {
      console.log("Cancelando debounce requisitado anteriormente");
    }
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      const result = functionToDebounce.apply(this, args);
      if (result != null && result != undefined) {
        console.log("Resultado do debounce:" + result);
      }
    }, delayMs);
  };
}

export { description as description, code as code };
