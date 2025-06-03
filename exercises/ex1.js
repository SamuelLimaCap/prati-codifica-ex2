import promptSync from "prompt-sync";

const prompt = promptSync();

function description() {
  return "Validação de Datas";
}

function code() {
  let dia = Number(prompt("Digite o dia:"));
  let mes = Number(prompt("Digite o mes:"));
  let ano = Number(prompt("Digite o ano:"));

  let isDataValida = ehValidaData(dia, mes, ano);

  if (isDataValida) {
    console.log("A data que você digitou é uma data valida");
    return true;
  }

  console.log("Data invalida");
}

function ehValidaData(dia, mes, ano) {
  const mes30Dias = [4, 6, 9, 11];

  if (isNaN(dia) || isNaN(mes) || isNaN(ano)) return false;

  if (dia < 0 || dia > 31) return false;
  if (mes < 0 || mes > 12) return false;
  if (ano < 0) return false;

  if (mes == 2) {
    if (ehAnoBissexto(ano) && dia <= 29) return true;
    if (dia <= 28) return true;

    return false;
  }

  if (mes30Dias.includes(mes) && dia > 30) return false;

  if (!mes30Dias.includes(mes) && dia > 31) return false;

  return true;
}

function ehAnoBissexto(ano) {
  if (ano % 4 == 0) {
    if (ano % 100 != 0) {
      return true;
    } else if (ano % 400 == 0) {
      return true;
    }

    return false;
  }
}

export default {
  description: description,
  code: code,
};
