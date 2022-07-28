import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-practice/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | date-format', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('date', '2022-07-20T07:00:00+03:00');
    await render(hbs`{{ date-format this.date}}`);

    assert.dom(this.element).hasText('20.7.22');
  });
});
