const dollars = (dollars) => {
  var soles1 = 3.25
  var pesosMexicanos2 = 18
  var pesosChilenos3 = 660
  const soles = dollars*soles1;
  const pesosMexicanos = dollars*pesosMexicanos2;
  const pesosChilenos = dollars*pesosChilenos3;
  console.log(dollars);

  return [soles, pesosMexicanos, pesosChilenos];

};

module.exports = dollars;
