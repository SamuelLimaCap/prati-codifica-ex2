function description() {
  return "Agrupamento por propiedade";
}

function code() {
  console.log("Vendas:");

  console.log(getSales());

  const totalSalesByCustomer = getSales().reduce((acc, ar) => {
    if (acc.cliente) {
      const temp = { ...acc };
      delete acc.cliente;
      delete acc.total;
      acc[temp.cliente] = temp.total;
    }

    if (!acc[ar.cliente]) {
      acc[ar.cliente] = 0;
    }
    acc[ar.cliente] += ar.total;
    acc[ar.cliente] = Math.round(acc[ar.cliente] * 100) / 100;

    return acc;
  });

  console.log("Vendas totais agrupadas por cliente:");

  console.log(totalSalesByCustomer);
}

function getSales() {
  return [
    {
      cliente: "Caio",
      total: 891.89,
    },
    {
      cliente: "Caio",
      total: 482.98,
    },
    {
      cliente: "Renato",
      total: 429.89,
    },
    {
      cliente: "Renato",
      total: 248.83,
    },
    {
      cliente: "Victor",
      total: 429.67,
    },
    {
      cliente: "Victor",
      total: 923.45,
    },
  ];
}

export default { code: code, description: description };
