(
    function ()
    {
        let App = window.App || {}
                     //  1000
        function Orders(timeout)
        {
            this.data = {}
            this.timeout = timeout
            this.rejectFlag = false
        }
                    //   true|false
        function getPromise(value)
        {
            let promiseRes = new Promise(function (resolve, reject)
            {
                setTimeout(function ()
                {
                    if(this.rejectFlag) {
                        reject({responseText: "server is unavailable"})
                    } else {
                        resolve(value)
                    }        // 1000
                }.bind(this), this.timeout)
            }.bind(this))

            console.log("promiseRes - "+ typeof promiseRes)

            return promiseRes
        }

        Orders.prototype.add = function (order)
        {
            if(!order.email)
                throw new Error('must be email in order')

            if(this.data[order.email] || this.rejectFlag)
                // getPromise(false)
                return getPromise.call(this, false)

            this.data[order.email] = order
            return getPromise.call(this, true)
        }

        Orders.prototype.remove = function (email)
        {
            if(!this.data[email] || this.rejectFlag)
                return getPromise.call(this, false)

            delete this.data[email]
            return getPromise.call(this, true)
        }

        Orders.prototype.get = function (email)
        {
            return getPromise.call(this, this.data[email])
        }

        Orders.prototype.getAll = function ()
        {
            return getPromise.call(this, Object.values(this.data))
        }

        App.Orders = Orders
        window.App = App
    }
)()
