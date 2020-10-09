const arr = [1,4,3,2,6,5,3];
let res = arr.reduce(functionForReduceMinus,0);
console.log(res);

function functionForReduceMinus(total, value){
    return total-value
}
function functionForReduceSum(total, value){
    return total-value
}
const element = "aaa"
const array = ["aaa","bbb","aaa","lll"]
console.log(array.join("; "))
let sum = array.reduce(function (accumulator, item, index, array) {
    console.log(`item - ${index} value - ${item} accumulator - ${accumulator} array - ${array}`)
    if (item === element)
        accumulator += 1
    return accumulator

}, 0)
console.log(sum)

//array.sort()
//console.log(array)

const arr2 = [1,"10",11,13,"22",14,8,"100"]
arr2.sort()
console.log(arr2)
// a-b>0 -> a>b
// a-b<0 -> a<b
// a-b===0 -> a===b
const arr3 = [1,10,11,13,22,14,8,100]

// ASC - ascending  DESC - descending
arr3.sort(function (a,b){
   return -(a-b);
})
console.log(arr3)

array.sort(function (a,b){
    return - a.localeCompare(b)
})
console.log(array)

// 1 - positions in alphabetic list (vocabulary)
// 2 - length of strings
let str1 = 'какой'
let str2 = 'какой-то'
console.log(str1.localeCompare(str2))

const arrObject = [{x:12,y:10}, {y:99}, {x:2,y:32}, {x:6,y:-10}, {x:11,y:-2}, {y:70},{y:18}]

arrObject.sort(ascX)
console.log(arrObject)

function ascX(obj1,obj2){
    //if(obj1.x===undefined||obj2.x===undefined){
    if(!obj1.x||!obj2.x){
        return obj1.y - obj2.y
    }
    return obj1.x - obj2.x
}

// splice -? slice -?
const values = [5,3,2,5,4,2,1,0,0,0,0,0,0,1,2,3,4,9];
const first0 = values.indexOf(0) // 7
console.log(first0)
const last0 = values.lastIndexOf(0) // 12
console.log(last0)
const sliceRes = values.slice(first0,last0+1)
console.log(sliceRes.join(" : "))

console.log(values)
values.splice(first0,last0-first0+1)
console.log(values.toString())

delete values[values.length-1]
console.log(values)