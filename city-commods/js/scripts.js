// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		prefix : '₹',
		pattern : '#.##'
	});

	formatter.format(data, 1);
	formatter.format(data, 2);
	formatter.format(data, 3);
	formatter.format(data, 4);

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
var data0 = [['City', 'Loaf of bread', 'Bottle of table wine', 'Pack of cigarettes', 'Litre of petrol'], ['Singapore', 573.95, 797.55, 590.85, 156.00], ['Paris', 391.30, 1064.05, 1002.30, 148.20], ['Oslo', 387.40, 1035.45, 614.90, 134.55], ['Zurich', 322.40, 1535.95, 1202.50, 92.95], ['Sydney', 230.10, 1640.6, 670.8, 114.40], ['New Delhi', 73.45, 1498.90, 185.25, 84.50], ['Mumbai', 69.55, 1150.50, 201.50, 74.10]];

//OPTIONS

//global options
var colors = ['#0087c1', '#da001a', '#80a312', '#fabb00', '#f88a00', '#7f4a94'];
var curveType = 'none';
var chartArea = {
	left : 100,
	top : 30,
	right : 130,
	bottom : 100,

};
var focusTarget = 'category';
var fontName = 'Roboto';
var hAxis = {
	title : 'City',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	},
	slantedText : true
};
var legend = {
	position : 'right',
	textStyle : {
		fontSize : 12
	}
};
var tooltip = {
	trigger : 'focus'
};
var vAxis = {
	gridlines : {
		color : '#eee'
	},
	ticks : [0, 500, 1000, 1500, 2000],
	title : 'Average commodity price (₹)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	}
};

//options sets
var options0 = {
	colors : colors,
	chartArea : chartArea,
	focusTarget : focusTarget,
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis
};
