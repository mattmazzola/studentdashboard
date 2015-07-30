import Ember from 'ember';
import d3 from 'd3';

const {
  on
} = Ember;

export default Ember.Component.extend({
  classNames: ['sa-timeline__inner'],

  setupSvg: on('didInsertElement', function () {
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




  	// create x-scale
  	const minDomainDate = moment('2015-07-25T00:00:00Z');
  	const maxDomainDate = moment('2015-08-10T00:00:00Z');
  	const currentDateMoment = moment().set({
  		hours: 0,
  		minutes: 0,
  		seconds: 0,
  		milliseconds: 0
  	});

  	var xScale = d3.time.scale()
  		.domain([minDomainDate, maxDomainDate])
  		.range([classLegendX, width-classLegendX])
  	;

  	const currentDateLine = svg
  		.append("line")
  		.attr({
  			x1: xScale(currentDateMoment),
  			y1: 0,
  			x2: xScale(currentDateMoment),
  			y2: height,
  			'stroke-width': 2,
  			'stroke': '#965b93'
  		})
    ;


  	// Add x axises
  	const xAxisTicks = d3.svg.axis()
  		.scale(xScale)
  		.orient("bottom")
  		.ticks(d3.time.days, 2)
  	;

  	const xAxisOffsets = d3.svg.axis()
  		.scale(xScale)
  		.orient("bottom")
  		.ticks(d3.time.days, 2)
  		.tickFormat(date => {
  			var duration = moment.duration(moment(date).diff(currentDateMoment));
  			var days = duration.asDays();
  			return days;
  		})
  	;

  	const xAxisDates = d3.svg
  		.axis()
  		.scale(xScale)
  		.orient("bottom")
  		.ticks(d3.time.days, 2)
  		.tickFormat(date => moment(date).format('M/d'))
  	;

  	const xAxisDays = d3.svg
  		.axis()
  		.scale(xScale)
  		.orient("bottom")
  		.ticks(d3.time.days, 2)
  		.tickFormat(date => moment(date).format('dd'))
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

  	const stripNonDate = m => {
  		return m.set({
  			hours: 0,
  			minutes: 0,
  			seconds: 0,
  			milliseconds: 0
  		});
  	};

  	const scaledDate = event => xScale(stripNonDate(moment(event.dueDate)));

  	const circles = svg
  		.selectAll("xyz")
  		.data(assignments)
  		.enter()
  		.append("circle")
  		.attr({
  			cx: scaledDate,
  			cy: d => height - (100 + 30 + ((d.classId === 1) ? 5  : 35)),
  			r: 10
  		})
  		.style({
  			fill: '#965b93'
  		})
  		.text(d => d.title)
  	;

  	const lines = svg
  		.selectAll("xyz")
  		.data(assignments)
  		.enter()
  		.append("line")
  		.attr({
  			x1: scaledDate,
  			y1: height - paddingBottom,
  			x2: scaledDate,
  			y2: d => height - (100 + 30 + ((d.classId === 1) ? 5  : 35)),
  			'stroke-width': 2,
  			'stroke': '#965b93'
  		})
  	;
  })
});
