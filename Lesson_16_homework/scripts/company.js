(
    function()
    {
        let App = window.App || {}

        function Company(employees)
        {
            this.employees=employees
        }

        Company.prototype.hire = function(employee)
        {
            return this.employees.add(employee)
        }

        Company.prototype.fire = function(id)
        {
            return this.employees.remove(id)
        }

        Company.prototype.computeBudget = function()
        {
            let allEmployees=this.employees.getAll()
            let budget=0;
            allEmployees.forEach(function (employee)
            {
                budget+=employee.salary
            })
            return budget
        }

        Company.prototype.processEmployees = function(processingFunction)
        {
            this.employees.getAll().forEach(processingFunction)
        }

        App.Company=Company
        window.App = App
    }
)()
