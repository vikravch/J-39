(
    function ()
    {
        let App = window.App;
        let employees = new App.Employees()
        let company = new App.Company( employees)
        let formEmployee = new App.FormHandler("#form_employee")
        let formGeneration = new App.FormHandler('#form_generation')
        let table = new App.Table('#employees', ['id', 'emailAddress', 'name', 'gender', 'salary', 'title'],
                 'id', removeFn)
        let random = new App.Random()
        let generator = new App.EmployeesGenerator(random)
        new App.Navigator(['#li_new_employee', '#li_generation', '#li_list_employees'],0)
        let $total=$('#total_salary')

        formEmployee.addHandler(function (employee)
        {
            let res = company.hire(employee)
            if(res)
            {
                addEmployeeToTable(employee)
            }
            return res ? '' : ' employee with id '+employee.id + ' already exists'
        })

        formGeneration.addHandler(function (genData)
        {
            for(let i=0; i<genData.n_employees; i++)
            {
                let employee = generator.createEmployee(genData.n_digits, parseInt(genData.min_salary),
                    parseInt(genData.max_salary))
                if(company.hire(employee))
                {
                    addEmployeeToTable(employee)
                }
            }
        })

        function addEmployeeToTable(employee)
        {
            $total.text(parseInt($total.text()) + parseInt(employee.salary))
            table.addRow(employee)
        }

        function removeFn(employee)
        {
            if(!confirm('you are going to fire\nemployee id:' + employee.id))
            {
                return false
            }
            // let salary = parseInt(employee.salary)
            if(company.fire(employee.id))
            {
                reduceTotalSalary(parseInt(employee.salary))
                return true
            }
            return false
        }

        function reduceTotalSalary(salary)
        {
            $total.text(parseInt($total.text()) - salary)
        }
    }
)()
