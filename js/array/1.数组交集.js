
// 普通数组
const arr1 = [1, 2, 3, 4, 5, 8, 9];
const arr2 = [6, 7, 8, 9];

// 交集
const intersection = arr1.filter(function (val) { return arr2.indexOf(val) > -1 })
// console.log(intersection)

// 数组对象
const arrObj1 = [
    { name: 'name1', id: 1 },
    { name: 'name2', id: 2 },
    { name: 'name3', id: 3 },
    { name: 'name5', id: 5 }
];
const arrObj2 = [
    { name: 'name1', id: 1 },
    { name: 'name2', id: 2 },
    { name: 'name3', id: 3 },
    { name: 'name4', id: 4 },
    { name: 'name5', id: 5 }
];
const result = arrObj2.filter(function (v) {
    return arrObj1.some(n => JSON.stringify(n) === JSON.stringify(v))
})
// console.log(result);
// [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name5', id: 5 }]

