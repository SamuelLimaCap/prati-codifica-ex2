import promptSync from "prompt-sync";
import { fatorial } from "./ex4.js";

const prompt = promptSync();

function description() {
  return "Memoization do fatorial";
}

function code() {
  let number = parseInt(
    prompt("Digite o número do fatorial que quer realizar: "),
  );

  const fastFat = memoize(fatorial);

  console.log(`Realizando fatorial de ${number}`);
  console.log(`Realizando memoization da função do fatorial de ${number}`);
  const timeA = performance.now();
  console.log(fatorial(number));
  const timeB = performance.now();
  console.log(fastFat(number));
  const timeC = performance.now();

  console.log(`Tempo do fatorial(${number}): ${timeB - timeA} ms`);
  console.log(`Tempo do fastFat(${number}): ${timeC - timeB} ms`);
}

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

export { description as description, code as code };
