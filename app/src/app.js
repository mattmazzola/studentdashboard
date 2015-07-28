/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../typings/d3/d3.d.ts"/>

$(() => {
	const height = 800;
	const width = 2000;
	const aspect = Math.floor(height / width);
	const paddingLeft = 100;
	const paddingBottom = 100;
	const classLegendX = 130;
	const rootSelector = ".sa-timeline__inner";
	const root = $(rootSelector);
	
	root.draggable({
		axis: 'x'
	});
	
	const container = d3.select(rootSelector);
	const svg = container.append("svg")
		.attr({
			width: '100%',
			viewBox: `0 0 ${width} ${height}`,
			preserveAspectRatio: 'xMidYMid'
		});
		
	const assignments = [
		{
			dueDate: '2015-07-28T00:00:00Z',
			title: 'Assignment 1',
			description: '',
			classId: 1,
		},
		{
			dueDate: '2015-07-30T00:00:00Z',
			title: 'Assignment 2',
			description: '',
			classId: 2,	
		},
		{
			dueDate: '2015-08-05T00:00:00Z',
			title: 'Assignment 3',
			description: '',
			classId: 1,	
		},
		{
			dueDate: '2015-08-10T00:00:00Z',
			title: 'Assignment 4',
			description: '',
			classId: 2,	
		}
	];
	
	const circles = svg
		.selectAll("xyz")
		.data(assignments)
		.enter()
		.append("circle")
		.attr({
			cx: (d,i) => i * 100 + classLegendX + paddingLeft,
			cy: d => height - (100 + 30 + ((d.classId === 1) ? 5  : 35)),
			r: 10
		})
		.style({
			fill: 'red'
		})
		.text(d => d.title)
	;
	
	const lines = svg
		.selectAll("xyz")
		.data(assignments)
		.enter()
		.append("line")
		.attr({
			x1: (d,i) => i * 100 + classLegendX + paddingLeft,
			y1: height - paddingBottom,
			x2: (d,i) => i * 100 + classLegendX + paddingLeft,
			y2: d => height - (100 + 30 + ((d.classId === 1) ? 5  : 35)),
			'stroke-width': 2,
			'stroke': '#ff0000'
		})
	;
	
	
	// create x-scale
	var scale = d3.scale
		.linear()
		.domain([0, 500])
		.range([classLegendX, width-classLegendX])
	;
	
	const xAxisTickFormat = d3.format("1%");
	
	// Add x axis offsets
	const xAxisTicks = d3.svg
		.axis()
		.scale(scale)
		.orient("bottom")
		.ticks(10)
	;
	
	const xAxisOffsets = d3.svg
		.axis()
		.scale(scale)
		.orient("bottom")
		.ticks(10)
		.tickFormat(n => `+${n}`)
	;
	
	const xAxisDates = d3.svg
		.axis()
		.scale(scale)
		.orient("bottom")
		.ticks(10)
		.tickFormat(n => `7/28`)
	;
	
	const xAxisDays = d3.svg
		.axis()
		.scale(scale)
		.orient("bottom")
		.ticks(10)
		.tickFormat(n => `Fri`)
	;

	// Add X-axis ticks
	svg
		.append("g")
		.attr({
			class: "axis axis--x axis--x-ticks"
		})
		.attr("transform", "translate(0," + (height - paddingBottom) + ")")
		.call(xAxisTicks)
	; 
	// Add X-axis Offsets
	svg
		.append("g")
		.attr({
			class: "axis axis--x axis--x-offsets"
		})
		.attr("transform", "translate(0," + (height - paddingBottom + 5) + ")")
		.call(xAxisOffsets)
	;
	
	// Add X-axis Offsets
	svg
		.append("g")
		.attr({
			class: "axis axis--x axis--x-dates"
		})
		.attr("transform", "translate(0," + (height - paddingBottom + 35) + ")")
		.call(xAxisDates)
	;
	
	// Add X-axis Offsets
	svg
		.append("g")
		.attr({
			class: "axis axis--x axis--x-days"
		})
		.attr("transform", "translate(0," + (height - paddingBottom + 65) + ")")
		.call(xAxisDays)
	;

	// Add Class Legend
	const classes = [
		{
			name: 'ECE200',
		},
		{
			name: 'CHEM330'
		},
		{
			name: 'PHYS200'
		},
		{
			name: 'MATH300'
		},
		{
			name: 'PSY100'
		}
	];
	
	svg
		.selectAll("xyz")
		.data(classes)
		.enter()
		.append("text")
		.attr({
			'text-anchor': 'end',
			x: classLegendX,
			y: (d, i) => height - (i * 30 + paddingBottom + 30)
		})
		.text(d => d.name)
	;
});