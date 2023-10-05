export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  if (typeof startString !== 'string') {
    return '';
  }
  const result = [];
  set.forEach((element) => {
    if (typeof element !== 'undefined' && element !== null) {
      if (element.startsWith(startString)) {
        result.push(element.slice(startString.length));
      }
    }
  });
  return result.join('-');
}
