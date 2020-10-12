(
    function (){
        //        defined     undefined
        let App = window.App || {}

        function Rectangle(a,b){
            this.a = a
            this.b = b
            // this.color = "#123"
            this.getSquare = function (){
                return a*b
            }
            this["perimeter"] = function (){
                return (a+b)*2
            }
        }

        Rectangle.prototype.color = "#123"
        Rectangle.prototype.addAValue =
            function (addA){
                this.a+=addA
            }
        Rectangle.prototype.toStr =
            function (){
                return `a = ${this.a} b - ${this.b}`
            }

        //App.Rectangle = Rectangle
        App["Rectangle"] = Rectangle
        window.App = App
    }
)()