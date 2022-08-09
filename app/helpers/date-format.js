import { helper } from '@ember/component/helper';
import {dateFormat} from "../lib/date-format";

export function dateFormatHelper(args) {
  const [date] = args;
  return dateFormat(date);
}

export default helper(dateFormatHelper);
