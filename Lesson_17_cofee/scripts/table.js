(
    function ()
    {
        let App = window.App || {}

        // public
        //  keys from data object    selector of <table>
        function Table(headers,      selector)
        {
            // setter of headers
            this.headers = headers
            // connect to the <table> with JQuery
            let $table = $(selector)
            //console.log($table)
            // create tag/node thead
            let $thead = $('<thead>')
            // attach thead to table
            $table.append($thead)
            // fill head row of table
            fillThead.call(this, $thead)

            // create and set tbody - global variable inside Table
            this.$tbody = $('<tbody>')
            // attach <tbody> to <table>
            $table.append(this.$tbody)

            /*let obj = {x:12,y:23,z:24}
            console.log(Object.keys(obj))*/
        }
        // private
        // create head of table
        function fillThead(thead)
        {
            // thead - tag <thead> for data
            // this.headers - all headers for each column

            // create tag/node tr with JQuery
            let $tr = $('<tr>')

            console.log(this.headers)
            // creating all <th> tags
            // key1 -> <th>key1</th>
            let arrOfTH = this.headers.map(createTableHeader)

            console.log(arrOfTH)
            // attach each th to table row
            arrOfTH.forEach(function (th)
                {
                    $tr.append(th)
                })

/*            this.headers.map(createTableHeader).forEach(function (th)
            {
                $tr.append(th)
            })*/
            // attach table row to thead
            thead.append($tr)
        }

        function createTableHeader(header)
        {
            // create new tag/node <th> with JQuery
            //return $('<th>', {text: header})//<th>header</th>
            let $newTH = $('<th>')
            $newTH.text(header)
            //$newTH.attr('id',header)
            return $newTH
        }
        // public                       object - one new order
        Table.prototype.addRow = function (data)
        {
            let $newRow = createRow.call(this, data)
            // add new <tr> to global tbody
            this.$tbody.append($newRow)
        }
        // private
        // create new tag <tr> with all data about one order
        function createRow(data)
        {
            // create new tag/node <tr> with JQuery
            let $row = $('<tr>')

            this.headers.map(function (header)
            {
                return $('<td>', {text:data[header]})
            }).forEach(function (td)
            {
                $row.append(td)
            })

            $row.attr('email',data.email)
            let $button = $('<button>',{text:"Remove"})
            $button.addClass('btn btn-danger')
            $row.append($button)

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
