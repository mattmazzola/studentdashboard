import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sd-timeline-brush', 'Integration | Component | sd timeline brush', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sd-timeline-brush}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sd-timeline-brush}}
      template block text
    {{/sd-timeline-brush}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
