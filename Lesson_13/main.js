(
  function ()
  {
      let App = window.App
      let orders = new App.Orders()
      let truck = new App.Truck(orders)
      let random = new App.Random()
      let orderGenerator = new App.OrderGenerator(random)
      let list = new App.List('ul')

      for(let i=0; i<20; i++)
      {
          truck.createOrder(orderGenerator.getRandomOrder())
      }

      truck.processOrders(function (item)
      {
          list.addItem(JSON.stringify(item))
      })
  }
)()
