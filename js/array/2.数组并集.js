
// 普通数组
// const arr1 = [1, 2, 3, 4, 5, 8, 9]
// const arr2 = [5, 6, 7, 8, 9];
// const result = arr1.concat(arr2.filter(v => !arr1.includes(v)))
// console.log(result)
// [1, 2, 3, 4, 5, 8, 9, 6, 7]


// 数组对象

const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
const arr2 = [{ id: 1, name: 'name1' }, { name: 'name2', id: 2 }, { name: 'name5', id: 1 }];
let arr3 = arr1.concat(arr2);
let result = [];
let obj = [];
result = arr3.reduce(function (prev, cur, index, arr) {
    prev.indexOf(JSON.stringify(cur)) === -1 && prev.push(JSON.stringify(cur));
    // 此方法仅对 键值对按一定的顺序 可用 eg:[{a:1,b:2},{b:2,a:1}]
    return prev;
}, []);
obj = result.map(v => JSON.parse(v))