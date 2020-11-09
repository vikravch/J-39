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
            let element = document.createElement('li')
            element.textContent = string
            this.selector.appendChild(element)
            createRemoveButton(this.removeFunction,element)
        }

        function createRemoveButton(rf, e)
        {
            let button = document.createElement('button')
            button.textContent = 'fire'

            let itemStr = e.textContent
            button.addEventListener('click', function (event)
            {
                    event.preventDefault()
                    if (rf(itemStr))
                    {
                        e.remove()
                    }
            })
            e.appendChild(button)
        }

        List.prototype.removeItem = function(rf)
        {
            this.removeFunction = rf;
        }

        App.List = List
        window.App = App
    }
)()
