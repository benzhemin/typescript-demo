function findIndex(S: string, T: string) {
  if (T.length > S.length) return -1;

  for (let i=0; i<S.length; i++) {
    if (S.length - i < T.length)  return -1;
    if (S.slice(i, T.length) === T) return i;
  }
}