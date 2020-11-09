(
    function ()
    {
        let App = window.App || {}

        function FormHandler(selector)
        {
            this.$formElement = $(selector)
        //    this.formSelector = document.querySelector(selector)
        }

        FormHandler.prototype.addHandler = function (fn)
        {
            this.$formElement.on('submit', function (event)
            {
                event.preventDefault()
                let objData = {}

                this.$formElement.serializeArray().forEach(function (obj)
                {
                    objData[obj.name] = obj.value
                })
                let res = fn(objData)
                if(res)
                {
                    alert(res)
                    return
                }
                event.target.reset()
            }.bind(this))
        }

        App.FormHandler = FormHandler
        window.App = App
    }
)()
