export function normalizedContains(str1: string, str2: string) {
  /**
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
   *
   * https://stackoverflow.com/a/37511463/3523645
   */
  const diacriticsRange = /[\u0300-\u036f]/g;
  const str1Normalized = str1.normalize('NFD').replace(diacriticsRange, '');
  const str2Normalized = str2.normalize('NFD').replace(diacriticsRange, '');
  return str1Normalized.includes(str2Normalized);
}
