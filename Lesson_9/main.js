for(i=0; i<=10; i++){console.log(i)}
let arr = [23,12,3,2,1,5,6,4,2]
for(i=0; i<arr.length; i++){ console.log(arr[i])}
arr[20] = 100
for(i=0; i<arr.length; i++){ console.log(arr[i])}
for(i in arr){ console.log(i)}
for(v of arr){ console.log(v)}
arr.length
let emptyArr = [];
emptyArr[0] = emptyArr[0]||12
emptyArr[0]
emptyArr[0] = emptyArr[0]||100
emptyArr[0]
emptyArr[1] = (emptyArr[1]||0) + 1
emptyArr[1]
emptyArr[1] = (emptyArr[1]||0) + 1
emptyArr[1]
emptyArr[2] = emptyArr[2] + 1
let myObject = {x:23, y:12, z:56}
myObject.x
emptyArr[5] = "str"
for(i=0; i<emptyArr.length; i++){ console.log(emptyArr[i])}
emptyArr[6] = function(){ console.log("aaaa")}
for(i=0; i<emptyArr.length; i++){ console.log(emptyArr[i])}
emptyArr[6]
Object.entries(myObject)
for(entity of Object.entries(myObject)){ console.log(`0 item - ${entity[0]}; 1 item - ${entity[1]}`)}
myObject.k
if(myObject.k === undefined){console.log("key is undefined")}
myObject["k"] = 10
if(myObject.k === undefined){console.log("key is undefined")} else {console.log("defined")}
const points = [{x:10,y:20}, {x:40, y:50}, {x:60, y:-10}]
for(point of points){ console.log(`point x - ${point.x} y - ${point.y}`) }
points[3] = {x:12}
for(point of points){ console.log(`point x - ${point.x} y - ${point.y}`) }
for(i=0; i<arr.length; i++){ if(arr[i]===undefined) continue else console.log(arr[i])}
for(i=0; i<arr.length; i++){ if(arr[i]===undefined) continue; console.log(arr[i])}