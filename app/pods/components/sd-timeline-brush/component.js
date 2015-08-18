import Ember from 'ember';
import moment from 'moment';
import d3 from 'd3';

const {
  on
} = Ember;

export default Ember.Component.extend({
  classNames: ['sd-timeline-brush'],

  setupSvg: on('didInsertElement', function () {
    const rootSelector = ".sd-timeline-brush";
    const width = 800;
    const height = 40;
  	const container = d3.select(rootSelector);
  	const svg = container.append("svg")
  		.attr({
  			width: '100%',
  			viewBox: `0 0 ${width} ${height}`,
  			preserveAspectRatio: 'xMaxYMid slice'
  		});

    // create x-scale
  	const minDomainDate = moment('2015-08-01T08:00:00Z');
  	const maxDomainDate = moment('2015-08-30T08:00:00Z');
  	// const currentDateMoment = moment().set({
  	// 	hours: 0,
  	// 	minutes: 0,
  	// 	seconds: 0,
  	// 	milliseconds: 0
  	// });

  	const xScale = d3.time.scale()
	    .domain([minDomainDate, maxDomainDate])
		  .range([0, 800])
      ;

    const brushGroup = svg.append('g');
    const brush = d3.svg.brush();
    brush.x(xScale);
    brush(brushGroup);

    brushGroup.selectAll("rect")
      .attr({
        height: 30
      });
    brushGroup.selectAll(".background")
      .style({
        fill: "#4B9E9E",
        visibility: "visible"
      });
    brushGroup.selectAll(".extent")
      .style({
        fill: "#78C5C",
        visibility: "visible"
      });
    brushGroup.selectAll(".extent")
      .style({
        fill: "#276C86",
        visibility: "visible"
      });
  })
});
