// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		prefix : '₹',
		pattern : '#,###,### crore'
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
var data0 = [['Year', 'Household physical savings'], ['1991-92', 43531], ['1992-93', 62576], ['1993-94', 56716], ['1994-95', 66408], ['1995-96', 92866], ['1996-97', 82993], ['1997-98', 137350], ['1998-99', 171768], ['1999-00', 232248], ['2000-01', 248530], ['2001-02', 297813], ['2002-03', 310906], ['2003-04', 344327], ['2004-05', 435729], ['2005-06', 430657], ['2006-07', 510140], ['2007-08', 538137], ['2008-09', 759846], ['2009-10', 856046], ['2010-11', 1026315], ['2011-12', 1389209], ['2012-13', 1463684], ['2013-14', 1460844], ['2014-15', 1379411]];

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
	ticks : [0, 400000, 800000, 1200000, 1600000],
	title : 'Household physical savings (crore rupees)',
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