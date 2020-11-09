(
    function ()
    {
        let App = window.App || {}

        function Table(headers, selector)
        {
            this.headers = headers
            let $table = $(selector)

            let $thead = $('<thead>')
            $table.append($thead)

            fillThead.call(this, $thead)

            this.$tbody = $('<tbody>')
            $table.append(this.$tbody)
        }

        function fillThead(thead)
        {
            let $tr = $('<tr>')
            this.headers.map(createTableHeader).forEach(function (th)
            {
                $tr.append(th)
            })
            thead.append($tr)
        }

        function createTableHeader(header)
        {
            return $('<th>', {text: header})//<th>header</th>
        }

        Table.prototype.addRow = function (data)
        {
            this.$tbody.append(createRow.call(this, data))
        }

        function createRow(data)
        {
            let $row = $('<tr>')
            this.headers.map(function (header)
            {
                return $('<td>', {text:data[header]})
            }).forEach(function (td)
            {
                $row.append(td)
            })
            return $row
        }

        App.Table = Table
        window.App = App
    }
)()

//<table>
//  <thead>
//         <th>
//  </thead>
//  <tbody>
//      <tr>
//          <td>
//      <tr>
//  </tbody>
// </table>
//parentNode.append(el1, el2, el3) - element to the end
//parentNode.prepend(el1, el2, el3) - element to the start
//node.before(el1, el2, el3)
//node.after(el1, el2, el3)
//node.replaceWith(el1, el2, el3)
