import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service store;
  @service router;
  @tracked location = '';
  @tracked dailyForecasts = [];

  @action
  async submitLocation(locationValue) {
    try {
      this.location = locationValue;
      if (this.location) {
        this.dailyForecasts = await this.store.query('day-forecast', {
          locationKey: locationValue,
        });
      }
    } catch (e) {
      console.log({ e });
    }
  }
}
