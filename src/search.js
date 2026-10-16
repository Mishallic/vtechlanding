const normalize = (text) => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

/** True when every word of the query appears somewhere in the given texts ("pos cloud" matches "POS Cloud"). */
export function matches(query, ...texts) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  const haystack = normalize(texts.join(' '));
  return words.every((word) => haystack.includes(word));
}
