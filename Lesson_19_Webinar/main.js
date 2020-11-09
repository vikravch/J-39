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