let old = [["1","2","3"],['1-1','1-2','1-3']];
// [{name:1,age:"1-1"},{name:2,age:"1-2"},{name:1,age:"1-3"}]
let newArr = []
old[0].forEach((item, index)=> {
    newArr.push({
       name: item,
       age: old[1][index]
    })
});
// console.log(newArr)