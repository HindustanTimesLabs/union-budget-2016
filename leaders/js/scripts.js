// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		prefix : '₹',
		pattern : '#,###,###'
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
var data0 = [['Leader', 'Monthly salary', {role: 'style'}], ['Xi Jinping, China', 111864, '#0087c1'], ['Pranab Mukerjee, India', 150000, '#da001a'], ['Narendra Modi, India', 160000, '#da001a'], ['Vladimir Putin, Russia', 752300, '#0087c1'], ['Mark Rutte, Neth.', 831863, '#0087c1'], ['Recep Erdogan, Turkey', 1008597, '#0087c1'], ['David Cameron, UK', 1096775, '#0087c1'], ['Angela Merkel, Germay', 1674025, '#0087c1'], ['Barack Obama, USA', 2017821, '#0087c1']];

//OPTIONS

//global options
var colors = ['#0087c1','#da001a','#da001a','#0087c1','#0087c1','#0087c1','#0087c1','#0087c1','#0087c1'];
var curveType = 'none';
var chartArea = {
	left : 100,
	top : 30,
	right : 30,
	bottom : 100,

};
var fontName = 'Roboto';
var hAxis = {
	title : 'Leader',
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
	ticks : [0, 600000, 1200000, 1800000, 2400000],
	title : 'Monthly salary (₹)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	}
};

//options sets
var options0 = {
	colors : colors,
	chartArea : chartArea,
	curveType : curveType,
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
};