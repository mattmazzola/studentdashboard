import Ember from 'ember';
import timeline from './chart';

const {
  on
} = Ember;

export default Ember.Component.extend({
  classNames: ['sa-timeline__container'],

  setupSvg: on('didInsertElement', function () {
    const events = this.get('events');

  	const assignments = events.map(event => {
      let assignment = event.toJSON();
      assignment.id = event.get('id');
      return assignment;
    });

    const classes = ['ECE200', 'CHEM330', 'PSY100', 'MATH300', 'PHYS200'].map(x => { return { name: x }; });

    const rootElement = this.$()[0];
    const chart = timeline();
    chart(rootElement);
    chart.classes(classes);
    chart.data(assignments, d => d.id);
    chart.update();
  })
});
