// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		pattern : '#.## million'
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
var data0 = [['Year', 'Small and tiny enterprises'], ['1991-92', 7.06], ['1992-93', 7.35], ['1993-94', 7.65], ['1994-95', 7.96], ['1995-96', 8.28], ['1996-97', 8.62], ['1997-98', 8.97], ['1998-99', 9.34], ['1999-00', 9.72], ['2000-01', 10.11], ['2001-02', 10.52], ['2002-03', 10.95], ['2003-04', 11.4], ['2004-05', 11.86], ['2005-06', 12.34], ['2006-07', 36.18], ['2007-08', 37.74], ['2008-09', 39.37], ['2009-10', 41.08], ['2010-11', 42.87], ['2011-12', 44.76], ['2012-13', 46.75], ['2013-14', 48.86]];

//OPTIONS

//global options
var colors = ['#0087c1','#da001a'];
var curveType = 'none';
var chartArea = {
	left : 100,
	top : 30,
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
	slantedText: true,
	slantedTextAngle: 45
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
	ticks : [0, 10, 20, 30, 40, 50],
	title : 'Number of small and tiny enterprirses (millions)',
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