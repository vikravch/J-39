(
    function ()
    {
        let App = window.App
        let employees = new App.Employees()
        let company = new App.Company(employees)

        let formEmployee = new App.FormHandler("#form_employee")
        let formGeneration = new App.FormHandler('#form_generation')
        let list = new App.List('#employees')
        let random = new App.Random()
        let generator = new App.EmployeesGenerator(random)

        let navigator = new App.Navigator(['#li_new_employee','#li_generation', '#li_list_employees'],0)

        formEmployee.addHandler(function (employee)
        {
            let res = company.hire(employee)
            if(res)
            {
                list.addItem(JSON.stringify(employee))
            }

            return res ? '' : ' employee with id ' + employee.id + ' already exists'
        })

        formGeneration.addHandler(function (genData)
        {
            for(let i=0; i<genData.n_employees; i++)
            {
                let employee = generator.createEmployee(parseInt(genData.n_digits), parseInt(genData.min_salary), parseInt(genData.max_salary))

                if(company.hire(employee))
                {
                    list.addItem(JSON.stringify(employee))
                }
            }
        })

        list.removeItem(function(itemStr)
        {
            let employee = JSON.parse(itemStr)
            if(!confirm('you are going to fire employee id:' + employee.id))
            {
                return false
            }
           return company.fire(employee.id)
        })

    }
)()
