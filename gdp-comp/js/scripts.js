// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

	var formatter = new google.visualization.NumberFormat({
		prefix : '$',
		pattern : '#,###,### billion'
	});

	formatter.format(data, 1);
	formatter.format(data, 2);
	formatter.format(data, 3);
	formatter.format(data, 4);
	formatter.format(data, 5);
	formatter.format(data, 6);
	formatter.format(data, 7);
	formatter.format(data, 8);
	formatter.format(data, 9);

	var chart = new google.visualization.ScatterChart(document.getElementById('chart'));
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
var data0 = [['Year', 'United States', 'China', 'Germany', 'United Kingdom', 'India', 'Brazil', 'Korea', 'Russia', 'South Africa'], ['1992', 6539, 491, 2129, 1180, 293, 399, 350, 86, 135], ['1993', 6879, 617, 2070, 1063, 284, 448, 386, 184, 134], ['1994', 7309, 562, 2211, 1141, 333, 558, 456, 277, 140], ['1995', 7664, 732, 2594, 1236, 367, 786, 556, 313, 155], ['1996', 8100, 861, 2505, 1305, 400, 854, 598, 392, 148], ['1997', 8609, 958, 2222, 1439, 423, 887, 558, 405, 153], ['1998', 9089, 1025, 2246, 1529, 429, 867, 374, 271, 138], ['1999', 9661, 1089, 2203, 1558, 467, 602, 485, 196, 137], ['2000', 10285, 1205, 1956, 1549, 477, 657, 562, 260, 136], ['2001', 10622, 1332, 1952, 1529, 494, 560, 533, 307, 122], ['2002', 10978, 1462, 2086, 1674, 524, 511, 609, 345, 116], ['2003', 11511, 1650, 2511, 1944, 618, 559, 681, 430, 175], ['2004', 12275, 1942, 2823, 2298, 722, 670, 765, 591, 229], ['2005', 13094, 2269, 2866, 2412, 834, 892, 898, 764, 258], ['2006', 13856, 2730, 3005, 2583, 949, 1108, 1012, 990, 272], ['2007', 14478, 3523, 3445, 2963, 1239, 1396, 1123, 1300, 299], ['2008', 14719, 4559, 3770, 2786, 1224, 1695, 1002, 1661, 287], ['2009', 14419, 5060, 3427, 2311, 1365, 1667, 902, 1223, 297], ['2010', 14964, 6040, 3423, 2407, 1708, 2209, 1094, 1525, 375], ['2011', 15518, 7493, 3761, 2593, 1843, 2613, 1202, 1905, 417], ['2012', 16155, 8462, 3542, 2624, 1836, 2412, 1223, 2016, 397], ['2013', 16663, 9491, 3746, 2678, 1875, 2391, 1306, 2079, 366], ['2014', 17348, 10357, 3874, 2950, 2051, 2347, 1410, 1861, 350], ['2015', 17968, 11385, 3371, 2865, 2183, 1800, 1393, 1236, 317]];

//OPTIONS

//global options
var colors = ['#0087c1','#0087c1', '#0087c1', '#0087c1', '#da001a'];
var curveType = 'none';
var chartArea = {
	left : 100,
	top : 30,
	right : 30,
	bottom : 100,

};
var focusTarget = 'category';
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
	trigger : 'focus',
	showColorCode : true
};
var vAxis = {
	gridlines : {
		color : '#eee'
	},
	ticks : [0, 2500, 5000, 7500, 10000, 12500, 15000, 17500, 20000],
	title : 'GDP ($ billions)',
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
	focusTarget : focusTarget,
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
	lineWidth : 0,
	pointSize : 1,
	series : {
		4 : {
			pointSize: 6
		}
	}
};