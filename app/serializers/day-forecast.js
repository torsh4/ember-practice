import JSONAPISerializer from '@ember-data/serializer/json-api';
import {dateFormat} from "../lib/date-format";

export default class DayForecastSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return {
      data: payload.DailyForecasts.map((dailyForecast) => {
        return {
          id: dailyForecast.Date,
          type: 'day-forecast',
          attributes: {
            date: dateFormat([dailyForecast.Date]),
            iconNumber: dailyForecast.Day.Icon,
            maxTemp: dailyForecast.Temperature.Maximum.Value,
            minTemp: dailyForecast.Temperature.Minimum.Value,
            description: dailyForecast.Day.IconPhrase,
          },
        };
      }),
    };
  }
}
