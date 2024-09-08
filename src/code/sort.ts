function fSorting1(list: number[]): number[] {
    for (let i = 0; i < list.length - 1; i++) {
      for (let j = i + 1; j < list.length; j++) {
        if (list[i] > list[j]) {
          var tmp = list[i];
          list[i] = list[j];
          list[j] = tmp;
        }
      }
    }
    return list;
  }
