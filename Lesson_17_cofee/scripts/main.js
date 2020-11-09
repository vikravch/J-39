(
  function ()
  {
      let App = window.App
      let orders = new App.Orders()
      let truck = new App.Truck(orders)
      let random = new App.Random()
      let orderGenerator = new App.OrderGenerator(random)
      let order = orderGenerator.getRandomOrder()
      let table = new App.Table(Object.keys(order), '#orders')
      let formHandler = new App.FormHandler('form')
      let navigator = new App.Navigator(['#liOrder', '#liList'], 0)

      formHandler.addHandler(function (order)
      {
          let res = truck.createOrder(order)
          if(res)
              table.addRow(order)
          return res ? '' : `order with email ${order.email} already exists`
      })
}
)()
