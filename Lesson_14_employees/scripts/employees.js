(
    function ()
    {
        let App = window.App || {}

        function Employees()
        {
            this.data = {}
        }

        Employees.prototype.add=function(employee)
        {
            if(this.data[employee.id])
                return false
            this.data[employee.id] = employee
            return true
        }

        Employees.prototype.get = function(id)
        {
            return this.data[id]
        }

        Employees.prototype.getAll =function()
        {
            return Object.values(this.data)
        }

        Employees.prototype.remove = function(id)
        {
            if(!this.data[id])
                return false
            delete this.data[id]
        }

        App.Employees = Employees
        window.App = App
    }
)()
