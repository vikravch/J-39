(
    function ()
    {
        let App = window.App

        App.Rectangle.prototype.helloStr = "Hello!"

        const rect1 = new App.Rectangle(4,2)
        console.log(
            `rec1 a - ${rect1.a} b - ${rect1.b}`)
        let res = rect1.getSquare()
        console.log(res)
        res = rect1.perimeter()
        console.log(res)

        console.log(`color - ${rect1.color}`)
        console.log(rect1.helloStr)
        console.log(rect1)
        rect1.addAValue(10)
        console.log(rect1.toStr())

        let obj = {x:13,y:45}
        console.log(obj["x"]) //13
        console.log(obj.y) //45
        obj["z"] = 100 // {x:13,y:45,z:100}
        console.log(obj)
        obj.a = 101
        console.log(obj) // {x:13,y:45,z:100,a:101}

        const arr = [65,32,4,12,7,8]
        // {item0:65, item1:32, item2:4,...}
        let resObj = arr.reduce(function (acc,item,index){
            acc[`I${index}`] = item
            return acc
        },{})
        console.log(resObj)

        const liValues = ["first","second","third"]
        let resUl = ["<ul>", ...liValues.map(
            function (str){
                return `<li> ${str}</li>`
            })
            ,"</ul>"]
        console.log(resUl)

        let arr1 = [45,32,14,32,11]
        let arr2 = [1,2,3, ...arr1,5,6,7]
        console.log(arr2)
    }
)()