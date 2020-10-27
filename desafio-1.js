const example = "Eu, Fulano, CPF 123.234.345/56, casado com Beltrana, CPF 234.345.456/67, gostaria de solicitar o registro do imóvel adquirido de Sicrano, CPF 345.456.567/78."

const removeCPF = (str) => {
  const regex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\/[0-9]{2}/g;
  return str.replace(regex, 'xxx')
}

removeCPF(example)
