(
    function ()
    {
        let App = window.App || {}

        function OrderGenerator(random)
        {
            this.random = random
        }

        const coffeeName = ['cappuchino', 'latte', 'espresso', 'americano', 'instant', 'moca', 'russiano']
        const size = ['small', 'medium', 'large']
        const flavor = ['limon', 'cinnamon', 'cognac', 'marshmallow', 'mint', 'milk', 'nuts', 'vanilla']
        const emailDomain = ["mail.ru", "gmail.com", "co.il", "icloud.com", "rambler.ru"]

        OrderGenerator.prototype.getRandomOrder = function ()
        {
            return {
                coffee:this.random.getRandomElement(coffeeName),
                email:"name" + this.random.getRandomNumber(1, 50)
                + "@" + this.random.getRandomElement(emailDomain),
                size:this.random.getRandomElement(size),
                flavor:this.random.getRandomElement(flavor),
                strength:this.random.getRandomNumber(1, 100)
            }
        }

        App.OrderGenerator = OrderGenerator
        window.App = App
    }
)()
