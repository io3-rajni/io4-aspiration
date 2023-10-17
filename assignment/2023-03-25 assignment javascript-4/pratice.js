const reverseStr = (str) => {
    newarr = str.split("")
    result = [];
    x = newarr.length
    for (let i = x; i > 0; i--) {
        result.push(newarr[i])
    }
    str = result.join("")
    console.log(str)
}//[]
reverseStr("hello")
console.log(result)



// const arr = [1, 8, 2, 3, 35, 4, 5];
// const arr1 = [1, 2, 2, 256, 26, 5]
// const merage = (arr, arr1) => {
//     return [...new Set([...arr, ...arr1])]
// }
// merage()
// console.log(merage[arr, arr1])

const arr3 = [1, 5, 5221, 5];
const arr4 = []
const y = arr3.length
const revrsenum = () => {
    for (let i = y; i >= 0; i--) {
        arr4.push(arr3[i])
        console.log("first", arr3)
    }
    console.log("second", arr3)

}
console.log("third", arr4)

revrsenum()