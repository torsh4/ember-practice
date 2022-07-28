import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from '../config/environment';

export default class DayForecastAdapter extends JSONAPIAdapter {
  host = 'http://dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';

  query(modelName, query, options) {
    const apiKey = encodeURIComponent(ENV.accu_api_key);

    //MOCK for development
    // return this.ajax(`/mocks/forecast.json`, 'GET', {
    //   data: {},
    // });

    return this.ajax(`${this.buildURL()}/${options.locationKey}`, 'GET', {
      data: { apikey: apiKey },
    });
  }
}
