const targetSearch = (arr, target) => {
  const mapValues = {};
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let dual = target - value;
    if (mapValues.propertyIsEnumerable(dual))
      return console.log(`Índices: ${[mapValues[dual], i]}`);
    mapValues[value] = i;
  }
  return console.log("Valor não encontrado");
}

targetSearch([2,2,11,7], 9)