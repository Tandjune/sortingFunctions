function sort1(list) {
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
function sort2(list) {
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
function sort3(list) {
    for (let i = 0; i < list.length - 1; i++) {
        let tmp = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[tmp] > list[j])
                tmp = j;
        }
        let tmp2 = list[i];
        list[i] = list[tmp];
        list[tmp] = tmp2;
    }
    return list;
}
function merge(list1, list2) {
    let list = [];
    if (list1.length == 0) {
        return list2;
    }
    else if (list2.length == 0) {
        return list1;
    }
    else if (list1[0] < list2[0]) {
        list.push(list1[0]);
        list1 = list1.slice(1);
        return list.concat(merge(list1, list2));
    }
    else {
        list.push(list2[0]);
        list2 = list2.slice(1);
        return list.concat(merge(list1, list2));
    }
}
function sort4(list) {
    if (list.length != 0 && list.length != 1) {
        let n = Math.floor(list.length / 2);
        let list1 = list.slice(0, n);
        let list2 = list.slice(n);
        list = merge(sort4(list1), sort4(list2));
    }
    return list;
}
const list = [2, 5, 6, 4, 1, 7, 3];
console.log(sort1(list));
export { sort1, sort2, sort3, merge, sort4 };
