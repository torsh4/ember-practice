import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-practice/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dates', function (hooks) {
  setupRenderingTest(hooks);

  test('render day forecast', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const day = {
      date: "30.8.23",
      iconNumber: 1,
      minTemp: 35,
      maxTemp: 85,
      description: "description"
    };

    this.set("dailyForecasts", [
      day
    ]);
    await render(hbs`<Dates @dailyForecasts={{this.dailyForecasts}} />`);

    assert.dom('[data-test-date]').hasText(day.date);
    assert.dom('[data-test-description]').hasText(day.description);
    assert.dom('[data-test-temp]').hasText(`${day.minTemp}-${day.maxTemp}`);

  });

  test('render 5 days forecast', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const day = {
      date: "30.8.23",
      iconNumber: 1,
      minTemp: 35,
      maxTemp: 85,
      description: "description"
    };

    this.set("dailyForecasts", [
      {...day, date: "1.8.23"},
      {...day, date: "2.8.23"},
      {...day, date: "3.8.23"},
      {...day, date: "4.8.23"},
      {...day, date: "5.8.23"},
    ]);
    await render(hbs`<Dates @dailyForecasts={{this.dailyForecasts}} />`);

    assert.dom('[data-test-day]').exists({ count: 5 });

  });

});
