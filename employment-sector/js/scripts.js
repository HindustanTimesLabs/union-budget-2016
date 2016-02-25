// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		suffix : '%',
		pattern : '#.#'
	});

	formatter.format(data, 1);
	formatter.format(data, 2);
	formatter.format(data, 3);

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
var data0 = [['Year', 'Agriculture', 'Services', 'Industry'], ['2000', 59.9, 23.7, 16.4], ['2005', 56.6, 24.7, 18.7], ['2010', 53.2, 25.3, 21.5], ['2012', 48.9, 26.8, 24.3]];

//OPTIONS

//global options
var colors = ['#80a312','#da001a','#0087c1','#fabb00','#f88a00','#7f4a94'];
var curveType = 'none';
var chartArea = {
	left : 100,
	top : 50,
	right : 30,
	bottom : 100,

};
var fontName = 'Roboto';
var hAxis = {
	title : 'Year',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	},
	slantedText: false
};
var legend = {
	position : 'top',
	alignment: 'center',
	textStyle : {
		fontSize: 14
	}
};
var tooltip = {
	trigger : 'focus'
};
var vAxis = {
	gridlines : {
		color : '#eee'
	},
	ticks : [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
	title : 'Share of total employment (%)',
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
	isStacked: true
};