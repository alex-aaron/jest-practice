function sum(x, y){
  return x + y;
}

function getKeys(object){
  const output = [];
  for (let key in object){
    output.push(key);
  }
  return output;
}

function logObjectValues(object){
  Object.values(object).forEach(value => console.log(value));
}

module.exports = {
  sum: sum,
  getKeys: getKeys,
  logObjectValues: logObjectValues
}