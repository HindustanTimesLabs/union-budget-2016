// Draw the chart
function draw() {

	var data = google.visualization.arrayToDataTable(data0);

	var options = options0;

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
var data0 = [['Year', 'Collections', {role: 'tooltip'}, {role: 'annotation'}], ['1991', 7, 'Sajjan (1991) — ₹7 crore', ,], ['1992', 8, 'Beta (1992) — ₹8 crore', ,], ['1993', 22, 'Aaankhen (1993) — ₹22 crore', ,], ['1994', 60, 'Hum Aapke Hain Kaun (1994) — ₹60 crore', 'Hum Aapke Hain Kaun'], ['1995', 55, 'Dilwale Dulhania Le Jaayenge (1995) — ₹55 crore', ,], ['1996', 48, 'Raja Hindustani (1996) — ₹48 crore', ,], ['1997', 30, 'Border (1997) — ₹30 crore', ,], ['1998', 42, 'Kuch Kuch Hota Hain (1998) — ₹42 crore', ,], ['1999', 26, 'Hum Saath Saath Hain (1999) — ₹26 crore', ,], ['2000', 35, 'Kaho Na Pyar Hain (2000) — ₹35 crore', ,], ['2001', 75, 'Gadar (2001) — ₹75 crore', 'Gadar'], ['2002', 31, 'Devdas (2002) — ₹31 crore', ,], ['2003', 45, 'Koi Mil Gaya (2003) — ₹45 crore', ,], ['2004', 40, 'Veer Zara (2004) — ₹40 crore', ,], ['2005', 41, 'No Entry (2005) — ₹41 crore', ,], ['2006', 83, 'Dhoom 2 (2006) — ₹83 crore', ,], ['2007', 69, 'Om Shanti Om (2007) — ₹69 crore', ,], ['2008', 115, 'Ghajni (2008) — ₹115 crore', ,], ['2009', 202, '3 Idiots (2009) — ₹202 crore', '3 Idiots'], ['2010', 139, 'Dabangg (2010) — ₹139 crore', ,], ['2011', 142, 'Bodyguard (2011) — ₹142 crore', ,], ['2012', 198, 'Ek Tha Tiger (2012) — ₹198 crore', ,], ['2013', 281, 'Dhoom 3/Krissh (2013) — ₹281 crore', ,], ['2014', 340, 'PK (2014) — ₹340 crore', 'PK'], ['2015', 325, 'Bajrangi Bhaijaan (2015) — ₹325 crore', ,]];

//OPTIONS

//global options
var annotations = {
	textStyle : {
		fontName : 'Roboto',
		fontSize: 14,
		color : '#5A5A5A'
	}
};
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
	slantedTextAngle: 47
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
	ticks : [0, 50, 100, 150, 200, 250, 300, 350, 400],
	title : 'Collections (₹ crore)',
	titleTextStyle : {
		fontSize : 16,
		color : '#5A5A5A'
	}
};

//options sets
var options0 = {
	annotations : annotations,
	colors : colors,
	chartArea : chartArea,
	curveType : curveType,
	fontName : fontName,
	hAxis : hAxis,
	legend : legend,
	tooltip : tooltip,
	vAxis : vAxis,
};