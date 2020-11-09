(
    function ()
    {
        let App = window.App || {}

        function Table(selector, headers, keyHeader, removeFn, removeIconClass)
        {
            this.headers = headers
            this.keyHeader = keyHeader || headers[0]
            this.removeFn = removeFn
            this.removeIconClass = removeIconClass || 'fa fa-trash'
            let $table = $(selector)
            let $thead = $('<thead>')
            $table.append($thead)
            fillThead.call(this,$thead)
            this.$tbody = $('<tbody>')
            $table.append(this.$tbody)
        }

        function fillThead(thead)
        {
            let $tr=$('<tr>')
            this.headers.map(createTableHeader).forEach(function(th)
            {
                $tr.append(th)
            })

            if(this.removeFn)
            {
                $tr.append($('<th>')) //additional column for removing
            }
            thead.append($tr)

        }

        function createTableHeader(header)
        {
            return $('<th>', {text:header})
        }

        Table.prototype.addRow = function(data)
        {
            this.$tbody.append(createRow.call(this,data))
        }

        function createRow(data)
        {
            let id=data[this.keyHeader]
            let $row = $('<tr>',{id})
            this.headers.map(function(header)
            {
                return $('<td>',{text: data[header]})
            }).forEach(function(td)
            {
                $row.append(td)
            })

            if(this.removeFn)
            {
                let $iconRemove = $('<i>', {class: this.removeIconClass + ' clickable'})//<i class=></i>
                $iconRemove.on('click', function(event)
                {
                    event.preventDefault()
                    if(this.removeFn(data))
                    {
                        $row.remove()
                    }
                }.bind(this))
                let $tdRemove = $('<td>')
                $tdRemove.append($iconRemove)//<td><i class=></i></td>
                $row.append($tdRemove)//<tr><td><i class=></i></td></tr>
            }
            return $row
        }

        App.Table = Table
        window.App = App
    }
)()
