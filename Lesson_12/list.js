(
    function ()
    {
        let App = window.App || {}

        //        tag <ul> or <ol> associated with list
        function List(selector)
        {
            this.selector = document.querySelector(selector)
        }

        List.prototype.addItem = function (string,image)
        {
            let element = document.createElement('li')  //<li></li>
            element.innerHTML = `<img src="${image}"><span>${string}</span>`                       //<li>string</li>
            this.selector.appendChild(element)                 //<ul><li>string</li></ul>
        }

        App.List = List
        window.App = App
    }
)()
