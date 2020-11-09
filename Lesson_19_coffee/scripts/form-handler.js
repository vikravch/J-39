(
    function ()
    {
        let App = window.App || {}

        function FormHandler(selector)
        {
            this.$formElement = $(selector)
        //    this.formSelector = document.querySelector(selector)
            this.validators = []
            this.$submitButton = this.$formElement.find('[type="submit"]')
            console.log(this.$submitButton)
        }

        FormHandler.prototype.addAsyncValidator = function (selector, validationFn, errorMessage)
        {
            // this.$submitButton = this.$formElement.attr('type', 'submit')
            // make button unactive by default
            this.$submitButton.attr('disabled', true)
            // registration new validator
            this.validators.push({selector, flag:false})
            // connect to input
            let $element = $(selector)
            // listening blur event
            $element.on('blur', function (event)
            {
                event.preventDefault()

                let valueFromInput = event.target.value
                //let valueFromInput = $(this.target).val()
                console.log(valueFromInput)

                // validation fun return promise
                const promiseValidation = validationFn(valueFromInput)
                // waiting for validation result
                promiseValidation.then(
                    // resolve
                    function (res) {
                        if(res) {
                            enablingSubmit.call(this, selector)
                        } else {
                            alert(errorMessage)
                        }
                    }.bind(this))
            }.bind(this))
        }
        // call when validation done with good result
        function enablingSubmit(selector)
        {
            // get validator value from validators by selector
            // {selector, flag:false}
            let validator = this.validators.find(function (val)
            {
                return val.selector===selector
            })
            validator.flag = true
            // check all validators if all is valid
            if(!this.validators.find(function (val)
            {
                return val.flag===false
            }))
            {
                this.$submitButton.attr('disabled', false)
            }
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
                fn(objData).then(function (res)
                {
                    if(res)
                    {
                        alert(res)
                        return
                    }
                    event.target.reset()
                    this.$submitButton.attr('disabled', true)
                }.bind(this))
           }.bind(this))
        }

        App.FormHandler = FormHandler
        window.App = App
    }
)()
