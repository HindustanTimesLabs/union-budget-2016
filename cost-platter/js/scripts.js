// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		suffix : '%',
		pattern : '#.#'
	});
	formatter.format(data, 1);

	var chart = new google.visualization.LineChart(document.getElementById('chart'));
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
var data0 = [['Year', 'Retail food inflation', 'Finance minister', {role: 'tooltip'}, {role: 'annotation'}], ['1991-92', 15.7, 0, 'Manmohan Singh', 'Manmohan Singh'], ['1992-93', 10.1, 0, 'Manmohan Singh', ,], ['1993-94', 7.1, 0, 'Manmohan Singh', ,], ['1994-95', 11.9, 0, 'Manmohan Singh', ,], ['1995-96', 11, 0, 'Manmohan Singh', ,], ['1996-97', 9.3, 0, 'P Chidambaram', 'P Chidambaram'], ['1997-98', 5.2, 0, 'P Chidambaram', ,], ['1998-99', 14.6, 0, 'Yashwant Sinha', 'Yashwant Sinha'], ['1999-00', 0.3, 0, 'Yashwant Sinha', ,], ['2000-01', 1.5, 0, 'Yashwant Sinha', ,], ['2001-02', 2.9, 0, 'Yashwant Sinha', ,], ['2002-03', 2.5, 0, 'Yashwant Sinha', ,], ['2003-04', 3.7, 0, 'Jaswant Singh', 'Jaswant Singh'], ['2004-05', 2.2, 0, 'P Chidambaram', 'P Chidambaram'], ['2005-06', 3.8, 0, 'P Chidambaram', ,], ['2006-07', 8.9, 0, 'P Chidambaram', ,], ['2007-08', 8.4, 0, 'P Chidambaram', ,], ['2008-09', 12.3, 0, 'Pranab Mukherjee', 'Pranab Mukherjee'], ['2009-10', 15.2, 0, 'Pranab Mukherjee', ,], ['2010-11', 9.9, 0, 'Pranab Mukherjee', ,], ['2011-12', 6.3, 0, 'Pranab Mukherjee', ,], ['2012-13', 11.9, 0, 'P Chidambaram', 'P Chidambaram'], ['2013-14', 12.3, 0, 'P Chidambaram', ,], ['2014-15', 6.5, 0, 'Arun Jaitley', 'Arun Jaitley']];

//OPTIONS

//global options
var annotations = {
	style : 'line',
	textStyle : {
		fontName : 'Roboto',
		fontSize: 16,
		color : '#5A5A5A'
	}
};
var colors = ['#0087c1', '#000', '#80a312', '#fabb00', '#f88a00', '#7f4a94'];
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
	slantedText : true,
	slantedTextAngle : 50,
};
var focusTarget = 'category';
var legend = {
	position : 'none',
	textStyle : {
		fontSize : 14
	}
};
var tooltip = {
	trigger : 'focus'
};
var vAxis = {
	gridlines : {
		color : '#eee'
	},
	ticks : [0, 4, 8, 12, 16],
	title : 'Retail food inflation (%)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	},
	baselineColor : '#fff'
};

//options sets
var options0 = {
	annotations : annotations,
	colors : colors,
	chartArea : chartArea,
	fontName : fontName,
	focusTarget : focusTarget,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis
};
