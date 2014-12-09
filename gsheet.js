d3.gsheet = function (key, sheetName, callback) {

    if (arguments.length < 3) { callback = sheetName; sheetName = null; };

    var cb = "&tqx=responseHandler:d3.gsheet.google_callback",
        sheet = sheetName ? "&sheet=" + sheetName : '',
        url = "http://spreadsheets.google.com/a/google.com/tq?key=" + key + sheet + cb,
        script;

    function parse(response) {
        var cols = response.table.cols,
            rows = response.table.rows,
            data = rows.map(function(row) {
                var o = {};
                row.c.forEach(function(c, j) { o[cols[j].label] = c.v; });
                return o;
            });
        return data;
    }

    function parseRows(response) {
        var cols = response.table.cols,
            rows = response.table.rows,
            data = [cols.map(function(d, i) { return d.label ? d.label : i;  })];

        rows.forEach(function(row, i) {
            data.push( row.c.map(function(d, j) { return d ? d.v : null; }) );
        });
        return data;
    }

    d3.gsheet.google_callback = google_callback;
    function google_callback(response) {
        callback(parse(response)); // returns array of objects
//        callback(parseRows(response)); // returns array of arrays
        script.remove();
    }

    script = d3.select('head')
        .append('script')
        .attr('type', 'text/javascript')
        .attr('src', url);
}
