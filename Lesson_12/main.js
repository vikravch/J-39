(
  function ()
  {
      // components initialization
      let App = window.App
      let orders = new App.Orders()
      let truck = new App.Truck(orders)
      let random = new App.Random()
      let orderGenerator = new App.OrderGenerator(random)
      let list = new App.List('#orders')

      // data generation - creating 20 orders
      for(let i=0; i<20; i++)
      {
          truck.createOrder(orderGenerator.getRandomOrder())
      }
      // organize list <ul> of orders to HTML markup
      truck.processOrders(function (item)
      {
          list.addItem(JSON.stringify(item),item.coffeeImage)
      })

      let myOrders = new App.Orders()
      let ordersCurrent = myOrders.getAll() // get data
      console.log(ordersCurrent)

      let newOrder = {email:"test@co.il",name:"Alex",adress:"Tel Aviv"}
      myOrders.add(newOrder)
      ordersCurrent = myOrders.getAll()
      console.log(ordersCurrent)

      let secondOrder = {email:"new@google.com", name:"Iren"}
      myOrders.add(secondOrder)
      console.log(myOrders.getAll())

      /*let thirdOrder = {phone:"8732984217", name:"Iren"}
      myOrders.add(thirdOrder)
      console.log(myOrders.getAll())*/

      console.log(App)

      console.log(orderGenerator.getRandomOrder())

      const containerItem = document.getElementById("container")
      console.log(containerItem)

      const spanItem = document.createElement("span")
      spanItem.innerHTML = '<a href="https://google.com">link</a>'

      containerItem.appendChild(spanItem)
  }
)()
