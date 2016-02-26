// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		prefix : '$',
		pattern : '#,###,### billion'
	});

	formatter.format(data, 1);

	var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
	chart.draw(data, options);

}

// Initialize the chart
function init() {
	google.charts.load('current', {
		'packages' : ['corechart']
	});

	google.charts.setOnLoadCallback(draw);

}


$(document).ready(init);

//DATA
var data0 = [['Country', 'Military expenditure', {role: 'style'}], ['USA', 610, '#0087c1'], ['China', 216, '#0087c1'], ['Russia', 84.5, '#0087c1'], ['Saudi Arabia', 80.8, '#0087c1'], ['France', 62.3, '#0087c1'], ['UK', 60.5, '#0087c1'], ['India', 50, '#da001a'], ['Germany', 46.5, '#0087c1'], ['Japan', 45.8, '#0087c1'], ['South Korea', 36.7, '#0087c1'], ['Brazil', 31.7, '#0087c1'], ['Italy', 30.9, '#0087c1'], ['Australia', 25.4, '#0087c1'], ['UAE (2012)', 22.8, '#0087c1'], ['Turkey', 22.6, '#0087c1']];

//OPTIONS

//global options
var colors = ['#0087c1','#da001a','#da001a','#0087c1','#0087c1','#0087c1','#0087c1','#0087c1','#0087c1'];
var chartArea = {
	left : 100,
	top : 30,
	right : 30,
	bottom : 100,

};
var fontName = 'Roboto';
var hAxis = {
	title : 'Country',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	},
	slantedText: true,
	slantedTextAngle: 30
};
var legend = {
	position : 'none'
};
var tooltip = {
	trigger : 'focus'
};
var vAxis = {
	gridlines : {
		color : '#eee'
	},
	ticks : [0, 100, 200, 300, 400, 500, 600, 700],
	title : 'Military expenditure ($ billions)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	}
};

//options sets
var options0 = {
	colors : colors,
	chartArea : chartArea,
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
};