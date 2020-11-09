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
          truck.createOrder(order)
          list.addItem(JSON.stringify(order))
      })
  }
)()
