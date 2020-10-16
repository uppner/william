function drawChart(data) {

    google.charts.load('current', { packages: ['corechart', 'line'] });
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

        var table = new google.visualization.DataTable();
        table.addColumn('datetime', 'T');
        table.addColumn('number', 'Temperatur');
        table.addColumn('number', 'Luftfuktighet');

        table.addRows([
            [new Date('2020-10-11'), 23, 65],
            [new Date('2020-10-12'), 20, 63],
            [new Date('2020-10-13'), 25, 62],
            [new Date('2020-10-14'), 19, 60],
        ]);
        var options = {
            chart: {
                title: 'Klimatet på vinden'
            },
            width: 400,
            height: 300,
            series: {
                // Gives each series an axis name that matches the Y-axis below.
                0: { axis: 'Temperatur' },
                1: { axis: 'Luftfuktighet' }
            },
            axes: {
                // Adds labels to each axis; they don't have to match the axis names.
                y: {
                    Temps: { label: 'Temperatur (Celsius)' },
                    Daylight: { label: 'Luftfuktighet (% RH)' }
                }
            }
        };

        var chart = new google.visualization.LineChart(document.getElementById('trends'));

        chart.draw(table, options);
    }
}