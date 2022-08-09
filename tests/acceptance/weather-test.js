import { module, test } from 'qunit';
import { click, fillIn, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Weather', function(hooks) {
  setupApplicationTest(hooks);

  test('should show 5 days', async function(assert) {
    await visit('/');
    await fillIn('[data-test-input]', '456');
    await click('[data-test-button]');
    assert.dom('[data-test-day]').exists({ count: 5 });

  });
});
