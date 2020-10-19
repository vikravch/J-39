(
    function ()
    {
        let App = window.App || {}
                            // object Random
        function OrderGenerator(random)
        {
            this.random = random
        }

        const coffeeName = ['cappuchino', 'latte', 'espresso', 'americano', 'instant']
        const cofeeImages = ['dog1.jpg','dog2.jpg','dog3.jpg','dog4.jpg','dog5.jpg']
        const size = ['small', 'medium', 'large']
        const flavor = ['limon', 'cinnamon', 'cognac', 'marshmallow', 'mint', 'milk', 'nuts', 'vanilla']
        const emailDomain = ["mail.ru", "gmail.com", "co.il", "icloud.com", "rambler.ru"]

        OrderGenerator.prototype.getRandomOrder = function ()
        {
            let randomNameNumber = this.random.getRandomNumber(0,coffeeName.length)
            return {
                coffee:coffeeName[randomNameNumber],
                coffeeImage:cofeeImages[randomNameNumber],
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
