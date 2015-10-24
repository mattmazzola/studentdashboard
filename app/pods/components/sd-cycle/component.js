import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  currentItemIndex: 0,
  height: 50,
  transition: true,

  circularItems: computed('items', function() {

    return this.get('items').toArray().concat( this.get('items.firstObject') );
  }),

  currentItem: computed('currentItemIndex', function() {
    return this.get('items').objectAt(this.get('currentItemIndex'));
  }),

  currentOffset: computed('currentItemIndex', function() {
    return this.get('currentItemIndex') * this.get('height');
  }),

  inlineStyleHeight: computed('height', function() {
  	return new Ember.Handlebars.SafeString(`height: ${this.get('height')}px`);
  }),

  inlineStyleTop: computed('currentOffset', function() {
    return new Ember.Handlebars.SafeString(`top: -${this.get('currentOffset')}px`);
  }),

  nextItem: function() {
    const interval = /* Math.floor(Math.random() * 500) + */ 8000;

    Ember.run.later(this, function () {
      const index = this.get('currentItemIndex');
      const nextIndex = (index + 1) % this.get('circularItems.length');
      console.log(`nextItem: Interval: ${interval}, Index: ${nextIndex}`);
      if(nextIndex === 0) {
        this.set('transition', false);
        this.set('currentItemIndex', nextIndex);
        Ember.run.next(this, function () {
          this.set('transition', true);
          this.set('currentItemIndex', nextIndex + 1);
        });
      }
      else {
        this.set('transition', true);
        this.set('currentItemIndex', nextIndex);
      }
      this.set('currentItemIndex', nextIndex);

      this.nextItem();
    }, interval);
  },

  setupTimer: function() {
    this.nextItem();
  }.on('init')
});
