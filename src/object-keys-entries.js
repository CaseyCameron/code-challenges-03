export function capitalizeObjectKeys(obj){
  return Object.keys(obj).map(key => key.toUpperCase());
}

export function sortedKeys(obj){
  return Object.keys(obj).sort((a, b) => a.length - b.length);
}

export function getFilteredKey(obj){
  return Object.keys(obj).filter(n => n === 'age');
}

export function getArrayOfKeysAndValues(obj){
  return Object.entries(obj);
}

export function sortedArraysByValuesLength(obj){
  return Object.entries(obj).sort((a, b) => b[1].length - a[1].length);
}