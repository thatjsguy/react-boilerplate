export function uniqKey(keyName) {
  return `${keyName}_${parseInt(Math.random() * (1000000*1000000))}`;
}
