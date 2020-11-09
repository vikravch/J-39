(
  function ()
  {
      let App = window.App
      let orders = new App.Orders()
      let truck = new App.Truck(orders)
      let table = new App.Table(['coffee', 'email', 'size', 'flavor', 'strength'], '#orders')
      let formHandler = new App.FormHandler('form')
      let navigator = new App.Navigator(['#liOrder', '#liList'], 0)

      formHandler.addHandler(function (order)
      {
          let res = truck.createOrder(order)
          if(res)
              list.addItem(JSON.stringify(order))
          return res ? '' : `order with email ${order.email} already exists`
      })
}
)()
