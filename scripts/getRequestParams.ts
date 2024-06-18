import {
  FIVE_DAYS,
  FIVE_YEARS,
  ONE_DAY,
  ONE_MONTH,
  ONE_YEAR,
  SIX_MONTHS,
  YTD,
} from "@/consts/general.consts";
import moment from "moment";

export function getRequestParams(time) {
  const DEFAULT_FORMAT = "MM/DD/YYYY";
  const today = moment().format(DEFAULT_FORMAT);
  const endTime = `${today}%2023:59`;

  switch (time) {
    case ONE_DAY:
      return {
        startTime: today,
        endTime: `${today}%2023:59`,
        period: 1,
      };

    case FIVE_DAYS:
      const week = moment().subtract(5, "days").format(DEFAULT_FORMAT);
      return { startTime: week, endTime };

    case ONE_MONTH:
      const month = moment().subtract(1, "months").format(DEFAULT_FORMAT);

      return { startTime: month, endTime };

    case SIX_MONTHS:
      const six_months = moment().subtract(6, "months").format(DEFAULT_FORMAT);
      return { startTime: six_months, endTime };

    case YTD:
      const ytd = moment().startOf("year").format("MM/DD/YYYY");
      return { startTime: ytd, endTime };

    case ONE_YEAR:
      const year = moment().subtract(1, "years").format(DEFAULT_FORMAT);
      return { startTime: year, endTime };

    case FIVE_YEARS:
      const one_years = moment().subtract(1, "years").format(DEFAULT_FORMAT);
      return { startTime: one_years, endTime };

    default:
      throw new Error(`couldn't find `, time);
  }
}
