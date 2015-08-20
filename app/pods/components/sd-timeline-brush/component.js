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
  	const currentDateMoment = moment().set({
  		hours: 0,
  		minutes: 0,
  		seconds: 0,
  		milliseconds: 0
  	});

  	const xScale = d3.time.scale()
	    .domain([minDomainDate, maxDomainDate])
		  .range([0, 800])
      ;

    const brushGroup = svg.append('g');
    brushGroup.classed("sd-timeline-brush", true);

    const brush = d3.svg.brush();
    brush.x(xScale);
    brush(brushGroup);

    brushGroup.selectAll("rect")
      .attr({
        height: 30
      });
    brushGroup.selectAll(".background")
      .style({
        visibility: "visible"
      });
    brushGroup.selectAll(".extent")
      .style({
        visibility: "visible"
      });
    brushGroup.selectAll(".resize rect")
      .style({
        visibility: "visible"
      });

    const fakeEvents = this.get('events');

    brushGroup.selectAll('rect .events')
      .data(fakeEvents)
      .enter()
      .append('rect')
        .classed('event', true)
        .attr({
          x: d => xScale(moment(d.dueDate)),
          y: 0,
          width: 1,
          height: 30
        })
        .style("pointer-events", "none")
      ;

    brush.on("brushend", () => {
      let ext = brush.extent();
      let [brushStart, brushEnd] = ext;

      var filtered = fakeEvents.filter(d => {
        return (moment(d.dueDate) > brushStart && moment(d.dueDate) < brushEnd);
      });

      brushGroup.selectAll("rect.event")
        .classed("selected", false)
      ;

      brushGroup.selectAll("rect.event")
        .data(filtered, d => { return d.id; })
        .classed("selected", true)
      ;

      this.sendAction('action', { start: brushStart, end: brushEnd });
    });


  })
});
