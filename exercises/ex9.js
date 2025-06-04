function description() {
  return "Conversão entre formatos";
}

function code() {
  const pares = [
    ["batata", 1],
    ["cenoura", 2],
    ["banana", 7],
    ["cliente", "caio"],
    ["login", { login: "admin", senha: "123" }],
    ["opa", "eae"],
  ];

  console.log("lista de pares");
  console.log(pares);

  console.log("Transformando lista de pares em objeto...");
  const obj = paresParaObjeto(pares);
  console.log("objeto:");
  console.log(obj);

  console.log("Transformando objeto em lista de pares...");
  console.log(objetoParaPares(obj));
}

function paresParaObjeto(pares) {
  const obj = pares.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  return obj;
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

export default { code: code, description: description };
