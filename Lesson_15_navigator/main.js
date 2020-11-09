(
  function ()
  {
      let App = window.App
      let orders = new App.Orders()
      let truck = new App.Truck(orders)
      let list = new App.List('ul')
      let formHandler = new App.FormHandler('form')

      formHandler.addHandler(function (order)
      {
          let res = truck.createOrder(order)
          if(res)
              list.addItem(JSON.stringify(order))
          return res ? '' : `order with email ${order.email} already exists`
      })

      let navigator = new App.Navigator(['#liOrder', '#liList'], 0)
  }
)()
