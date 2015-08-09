import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sd-search-category-preview-grade', 'Integration | Component | sd search category preview grade', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sd-search-category-preview-grade}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sd-search-category-preview-grade}}
      template block text
    {{/sd-search-category-preview-grade}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
