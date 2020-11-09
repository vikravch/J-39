(
    function ()
    {
        let App = window.App || {}
        // constructor      selector of form
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
                fn(objData)
            }.bind(this))
        }

        App.FormHandler = FormHandler
        window.App = App
    }
)()
