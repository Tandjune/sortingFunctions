function sort1(list: number[]): number[] {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        const tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
      }
    }
  }
  return list;
}

export { sort1 };
