(
    function ()
    {
        let App = window.App || {}

        function Truck(orders)
        {
            this.orders = orders
        }

        Truck.prototype.createOrder = function (order)
        {
            return this.orders.add(order)
        }

        Truck.prototype.deliveryOrder = function (email)
        {
            return this.orders.remove(email)
        }

        Truck.prototype.processOrders = function (process)
        {
            this.orders.getAll().then(function (orders)
            {
                orders.forEach(process)
            }).catch(function (error)
            {
                alert(error.responseText)
            })
        }

        App.Truck = Truck
        window.App = App
    }
)()
