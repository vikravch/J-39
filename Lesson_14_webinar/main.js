(
    function (){
        console.log("Hello!")
        let App = window.App
        console.log(App)
        const firstHandler = new App.FormHandler('#firstForm')
        firstHandler.addHandler(function (resObj){
            console.log(resObj)
        })

        const secondHandler = new App.FormHandler('#secondForm')
        secondHandler.addHandler( function (res){
                console.log(res)
            }
        )

        const thirdHandler = new App.FormHandler('#thirdForm')
        thirdHandler.addHandler(function (resObj){
            console.log(resObj)
        })

        const $btnFirst = $('#btnFirst')
        const $btnSecond = $('#btnSecond')
        const firstText = document.getElementById("firstText")
        const secondText = document.getElementById("secondText")


        // hide first form with document
        $btnFirst.on('click',function (){
            firstText.classList.remove('hidden')
            secondText.classList.add('hidden')
        })

        const $firstText = $('#firstText')
        const $secondText = $('#secondText')
        // hide first form with JQuery
        $btnSecond.on('click',function (){
            $firstText.addClass('hidden')
            $secondText.removeClass('hidden')
        })
    }
)()