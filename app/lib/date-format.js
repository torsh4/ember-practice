import moment from "moment";

export function dateFormat(date) {
  return moment(date).format('D.M.YY');
}
