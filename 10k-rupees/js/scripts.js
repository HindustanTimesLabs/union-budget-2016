// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		prefix : '₹',
		pattern : '#,###'
	});

	formatter.format(data, 1);

	var chart = new google.visualization.PieChart(document.getElementById('chart'));
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
var data0 = [['Category', 'Monthly expense'], ['Food', 4031], ['Housing & household amenities', 1387], ['Clothing, footwear & personal care', 1043], ['Eating out, intoxicants & recreation', 961], ['Transport & communication', 859], ['Fuel & light', 684], ['Health', 589], ['Education', 446]];

//OPTIONS

//global options
var colors = ['#0087c1', '#da001a', '#80a312', '#fabb00', '#f88a00', '#7f4a94', '#00c19b', '#da0087'];
var curveType = 'none';
var chartArea = {
	left : 30,
	top : 30,
	right : 30,
	bottom : 30,

};
var fontName = 'Roboto';
var hAxis = {
	title : 'Year',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	},
	slantedText : true,
	slantedTextAngle : 45
};
var legend = {
	position : 'right'
};
var tooltip = {
	trigger : 'focus',
	text : 'both'
};
var vAxis = {
	gridlines : {
		color : '#eee'
	},
	ticks : [0, 50, 100, 150, 200, 250, 300],
	title : 'Avg. daily ploughing wage (₹)',
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
	vAxis : vAxis
}; 