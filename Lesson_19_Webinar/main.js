const login = "test@server.test" // get from input login
const password = "qwerty12345675" // get from input password

//                       executor - hard process
let promise = new Promise(function (resolve, reject){
    // request to server
    setTimeout(function (){
        if(login==="test@server.test" && password==="qwerty12345"){
            resolve(login)
        } else {
            reject(new Error("access denied"))
        }

        //resolve("One")
        //reject("Error")
    }, 3000)

})

promise.then(
    // good result - resolve
    function(res){
        console.log("success! "+res)
    },
    // bad result - error|rejected
    function (error){
        console.log("Error "+error)
    }
)

function outer(){
    let var1 = 100;
    let arr = [12,34,12,23,12,9];
    //________________________________________________________
    arr.forEach(function (value){
        let str = "Hello!"
        console.log(`value - ${value} outer var1 - ${var1}`)
    })
    //_________________________________________________________
    console.log(str)
}

outer()

/*
* Замыкание — это функция, у которой есть доступ к области видимости,
* сформированной внешней по отношению к ней функции даже после того,
* как эта внешняя функция завершила работу.
*
* */

function outer(){ // внешняя по отношению функция
    let var1 = 100;
    let name = "John";

    function inner(){
        console.log(var1+" - "+name);
    }

    let text = var1+name;
    return function (str){ // замыкание
        console.log(text+" "+str)
    }
}

let resOuter = outer()
resOuter("added text")

function prepareCake(flavor){
    console.log('order delivered')

    return function (){
        console.log('started baking...')
        setTimeout(function (){
            console.log(`made a ${flavor} cake`)
        }, 4000)
    }
}

const makeCakeLater = prepareCake('banana');
//  'order delivered'

makeCakeLater()
// `made a banana cake` after 4000 ms