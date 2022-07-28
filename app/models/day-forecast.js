import Model, { attr } from '@ember-data/model';

export default class DayForecastModel extends Model {
  @attr date;
  @attr iconNumber;
  @attr maxTemp;
  @attr minTemp;
  @attr description;
}
