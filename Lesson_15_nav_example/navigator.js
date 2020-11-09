(
    function ()
    {
        let App = window.App || {}
// const navigator = new App.Navigator(arrLi,0);
        function Navigator(selectors, activeItem)
        {
            this.previousActiveIndex = -1
            //this.controls = selectors.map(createControl)
            // selectors - array!!!!
            this.controls = [];
            selectors.forEach(function (selector){
                // control ->{ li from nav (navItem), div from body (areaItem) }
                let control = {}
                control.$navItem = $(selector) // li from nav
                const idOfDiv = control.$navItem.attr('aria-controls');
                control.$areaItem = $('#' + idOfDiv)
                control.$areaItem.hide()
                this.controls.push(control)
            }.bind(this))

            addHandler.call(this)
            showActiveIndex.call(this, activeItem)
        }

        function createControl(selector)
        {
            let control = {}
            control.$navItem = $(selector)
            control.$areaItem = $('#' + control.$navItem.attr('aria-controls'))
            return control
        }
        // private
        function  addHandler()
        {
            this.controls.forEach(function (control, index)
            {
                control.$navItem.on('click', function (event)
                {
                    event.preventDefault()
                    showActiveIndex.call(this, index)
                }.bind(this))
            }.bind(this))
        }

        function showActiveIndex(activeIndex)
        {
            if(activeIndex===this.previousActiveIndex)
                return

            if(this.previousActiveIndex>=0)
            {
                hideControl(this.controls[this.previousActiveIndex])
            }

            showControl(this.controls[activeIndex])

            this.previousActiveIndex = activeIndex
        }

        function hideControl(control)
        {
            control.$navItem.removeClass('active')
            control.$areaItem.attr('hidden', true)
        }

        function showControl(control)
        {
            control.$navItem.addClass('active')
            control.$areaItem.attr('hidden', false)
        }

        App.Navigator = Navigator
        window.App = App
    }
)()
