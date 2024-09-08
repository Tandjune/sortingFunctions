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

function sort2(list: number[]): number[] {
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < list.length - 1; i++) {
      if (list[i] > list[i + 1]) {
        const tmp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = tmp;
        changed = true;
      }
    }
  }
  return list;
}

const list = [2, 5, 6, 4, 1, 7, 3];
console.log(sort1(list));

export { sort1, sort2 };
