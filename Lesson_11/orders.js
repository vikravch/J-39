(
    function ()
    {
        let App = window.App || {}

        function Orders()
        {
            this.data = {}
        }

        Orders.prototype.add = function (order)
        {
            if(!order.email)
                throw new Error('must be email in order')

            if(this.orders[order.email])
                return false

            this.orders[order.email] = order
            return true
        }

        Orders.prototype.remove = function (email)
        {
            if(!this.data[email])
                return false

            delete this.data[email]
            return true
        }

        Orders.prototype.get = function (email)
        {
            return this.data[email]
        }

        Orders.prototype.getAll = function ()
        {
            return Object.values(this.data)
        }

        App.Orders = Orders
        window.App = App
    }
)()