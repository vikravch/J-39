(
    function ()
    {
        let App = window.App || {}

        function Random()
        {

        }

        Random.prototype.getRandomNumber = function (min, max)
        {
            if(min>=max)
                throw  new Error("Max should be more than min")
            return min + Math.round(Math.random()*(max-min))
        }

        Random.prototype.getRandomElement = function (array)
        {
            if(array == null || array==undefined)
                throw new Error("You have a trouble this your array")
            return array[this.getRandomNumber(0, array.length-1)]
        }

        App.Random = Random
        window.App = App
    }
)()
