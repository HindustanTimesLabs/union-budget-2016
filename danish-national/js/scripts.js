// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		prefix : '₹',
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
var data0 = [['Country', 'Median hourly wage', {role:'style'}], ['Indonesia', 27.88, '#0087c1'], ['India', 36.04, '#da001a'], ['China', 63.25, '#0087c1'], ['Russia', 78.89, '#0087c1'], ['South Africa', 88.41, '#0087c1'], ['Brazil', 92.49, '#0087c1'], ['Germany', 442.05, '#0087c1'], ['UK', 516.17, '#0087c1'], ['Belgium', 523.65, '#0087c1'], ['Finland', 526.37, '#0087c1'], ['Netherlands', 590.3, '#0087c1'], ['Denmark', 763.04, '#da001a']];

//OPTIONS

//global options
var curveType = 'none';
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
	slantedText: true
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
	ticks : [0, 100, 200, 300, 400, 500, 600, 700, 800],
	title : 'Median hourly wage (₹)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	}
};

//options sets
var options0 = {
	chartArea : chartArea,
	curveType : curveType,
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
};