(
    function ()
    {
        let App = window.App || {}

        function List(selector)
        {
            this.selector = document.querySelector(selector)
        }

        List.prototype.addItem = function (string)
        {
            let element = document.createElement('li')  //<li></li>
            element.textContent = string                       //<li>string</li>
            this.selector.appendChild(element)                 //<ul><li>string</li></ul>
        }

        App.List = List
        window.App = App
    }
)()
