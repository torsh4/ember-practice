import { helper } from '@ember/component/helper';
import moment from "moment";

export function dateFormat(args) {
  const [date] = args;
  console.log({date});
  return moment(date).format('D.M.YY');
}

export default helper(dateFormat);
