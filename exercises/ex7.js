import promptSync from "prompt-sync";

const prompt = promptSync();

function description() {
  return "Mapeamento e Orientacão";
}

function code() {
  console.log("Produtos utilizados:");
  console.log(getProductArray());

  const valuesSorted = getProductArray().sort((a, b) => a.preco - b.preco);

  const valuesSortedMapped = valuesSorted.map((a) => a.nome);

  console.log("Produtos ordenados por preço, mostrando somente o nome deles:");
  console.log(valuesSortedMapped);
}

function getProductArray() {
  return [
    {
      nome: "Café fort 500g",
      preco: 29.99,
    },
    {
      nome: "Salsicha hot dog sadia 500g",
      preco: 12.79,
    },
    {
      nome: "Pão Hamburger 200g",
      preco: 4.49,
    },
    {
      nome: "Água mineral 510ml",
      preco: 2.25,
    },
    {
      nome: "Refri Pepsi 2L",
      preco: 8.49,
    },
    {
      nome: "Pão branco Integral 500g",
      preco: 7.99,
    },
  ];
}

export default { code: code, description: description };
