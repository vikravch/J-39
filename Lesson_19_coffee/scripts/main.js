(
  function ()
  {
      let App = window.App
      let orders = new App.Orders(1000)
      let truck = new App.Truck(orders)
      let table = new App.Table(['coffee', 'email', 'size', 'flavor', 'strength'], '#orders')
      let formHandler = new App.FormHandler('form')
      let navigator = new App.Navigator(['#liOrder', '#liList'], 0)

      formHandler.addHandler(function (order)
      {
          return truck.createOrder(order).then(function (res)
          {
              if(res)
                  table.addRow(order)
              return res ? '' : `order with email ${order.email} already exists`
          }).catch(function (error)
          {
              alert(error.responseText)
              throw  new Error(error)
          })
      })

      formHandler.addAsyncValidator('#email', function (email)
      {
          return orders.get(email).then(function (res)
          {
              console.log(res)
              return res ? false : true
          }).catch(errorHandler)
      }, "order with this email already exist")

      function errorHandler(error)
      {
          alert(error.responseText)
          throw new Error(error)
      }

      App.orders = orders
}
)()
