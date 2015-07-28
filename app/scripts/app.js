/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../typings/d3/d3.d.ts"/>

"use strict";

$(function () {
	var height = 800;
	var width = 2000;
	var aspect = Math.floor(height / width);
	var paddingLeft = 100;
	var paddingBottom = 100;
	var classLegendX = 130;
	var rootSelector = ".sa-timeline__inner";
	var root = $(rootSelector);

	root.draggable({
		axis: 'x'
	});

	var container = d3.select(rootSelector);
	var svg = container.append("svg").attr({
		width: '100%',
		viewBox: "0 0 " + width + " " + height,
		preserveAspectRatio: 'xMidYMid'
	});

	var assignments = [{
		dueDate: '2015-07-28T00:00:00Z',
		title: 'Assignment 1',
		description: '',
		classId: 1
	}, {
		dueDate: '2015-07-30T00:00:00Z',
		title: 'Assignment 2',
		description: '',
		classId: 2
	}, {
		dueDate: '2015-08-05T00:00:00Z',
		title: 'Assignment 3',
		description: '',
		classId: 1
	}, {
		dueDate: '2015-08-10T00:00:00Z',
		title: 'Assignment 4',
		description: '',
		classId: 2
	}];

	var circles = svg.selectAll("xyz").data(assignments).enter().append("circle").attr({
		cx: function cx(d, i) {
			return i * 100 + classLegendX + paddingLeft;
		},
		cy: function cy(d) {
			return height - (100 + 30 + (d.classId === 1 ? 5 : 35));
		},
		r: 10
	}).style({
		fill: 'red'
	}).text(function (d) {
		return d.title;
	});

	var lines = svg.selectAll("xyz").data(assignments).enter().append("line").attr({
		x1: function x1(d, i) {
			return i * 100 + classLegendX + paddingLeft;
		},
		y1: height - paddingBottom,
		x2: function x2(d, i) {
			return i * 100 + classLegendX + paddingLeft;
		},
		y2: function y2(d) {
			return height - (100 + 30 + (d.classId === 1 ? 5 : 35));
		},
		'stroke-width': 2,
		'stroke': '#ff0000'
	});

	// create x-scale
	var scale = d3.scale.linear().domain([0, 500]).range([classLegendX, width - classLegendX]);

	var xAxisTickFormat = d3.format("1%");

	// Add x axis offsets
	var xAxisTicks = d3.svg.axis().scale(scale).orient("bottom").ticks(10);

	var xAxisOffsets = d3.svg.axis().scale(scale).orient("bottom").ticks(10).tickFormat(function (n) {
		return "+" + n;
	});

	var xAxisDates = d3.svg.axis().scale(scale).orient("bottom").ticks(10).tickFormat(function (n) {
		return "7/28";
	});

	var xAxisDays = d3.svg.axis().scale(scale).orient("bottom").ticks(10).tickFormat(function (n) {
		return "Fri";
	});

	// Add X-axis ticks
	svg.append("g").attr({
		"class": "axis axis--x axis--x-ticks"
	}).attr("transform", "translate(0," + (height - paddingBottom) + ")").call(xAxisTicks);
	// Add X-axis Offsets
	svg.append("g").attr({
		"class": "axis axis--x axis--x-offsets"
	}).attr("transform", "translate(0," + (height - paddingBottom + 5) + ")").call(xAxisOffsets);

	// Add X-axis Offsets
	svg.append("g").attr({
		"class": "axis axis--x axis--x-dates"
	}).attr("transform", "translate(0," + (height - paddingBottom + 35) + ")").call(xAxisDates);

	// Add X-axis Offsets
	svg.append("g").attr({
		"class": "axis axis--x axis--x-days"
	}).attr("transform", "translate(0," + (height - paddingBottom + 65) + ")").call(xAxisDays);

	// Add Class Legend
	var classes = [{
		name: 'ECE200'
	}, {
		name: 'CHEM330'
	}, {
		name: 'PHYS200'
	}, {
		name: 'MATH300'
	}, {
		name: 'PSY100'
	}];

	svg.selectAll("xyz").data(classes).enter().append("text").attr({
		'text-anchor': 'end',
		x: classLegendX,
		y: function y(d, i) {
			return height - (i * 30 + paddingBottom + 30);
		}
	}).text(function (d) {
		return d.name;
	});
});
//# sourceMappingURL=app.js.map