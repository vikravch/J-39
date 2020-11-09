// JavaScript this:
// 1. In a method, this refers to the owner object.
const obj = {
    name: "John",
    // method
    callFunction: function (){
        console.log("calling to "+this.name)
    }
}

obj.callFunction()

// 2. Alone, this refers to the global object.
console.log(this)

// 3. In a function, this refers to the global object.
var x = 15
function testFunction(){
    console.log(this)
    let x = 24
    console.log(this.x)
}
testFunction()

// 4. In a function, in strict mode, this is undefined.
//....
// 5. In an event, this refers to the element that received the event.
/*const $button = $('#btnClick')
$button.on('click',
    function (){
        console.log("Hello")
    })*/

$('#btnClick0').on('click',
    function (){
        console.log("Hello 0")
        $(this).hide()
    })
$('#btnClick1').on('click',
    function (){
        console.log("Hello 1")
        $(this).hide()
    })
$('#btnClick2').on('click',
    function (){
        console.log("Hello 2")
        $(this).hide()
    })
// 6. Methods like call(), bind() and apply() can refer this to any object.

const obj2 = {
    phoneNumber: 32424234,
    friends: ["John", "Bill", "Donald"],
    // method
    callToFriend: function (){
        this.friends.forEach(
            // inner function
            iterFunction
            // end inner function
            .bind(this)
        )
        iterFunction("George")
        iterFunction.call(this,"Harry")
        // this == obj2
    }
}

let iterFunction = function (name){
    console.log("called from "+this.phoneNumber+" invite "+name)
}

obj2.callToFriend()

// Anonymous function
// 1. self calling function
/*(function(){
    console.log("Hello")
})()*/
// 2. function as a variable

let funcSquare = function(a,b){
    return a*b
}

// 3. method
let obj3 = {
    x:23,
    y:12,
    difference: function(){
        return this.x-this.y
    }
}

// 4. function as a parameter
const arr1 = [1,2,3,4,5]
const arr2 = arr1.map(function (value){
    return value*10
})
console.log(arr2)

/*
let App = window.App
let random = new App.Random()
console.log(random.getRandomNumber(0,100))
*/

