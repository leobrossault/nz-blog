import dayjs from 'dayjs'
import 'dayjs/locale/fr.js'

import localizedFormat from 'dayjs/plugin/localizedFormat.js'
import utc from 'dayjs/plugin/utc'
import tz from 'dayjs/plugin/timezone'

dayjs.locale('fr')
dayjs.extend(localizedFormat)
dayjs.extend(utc)
dayjs.extend(tz)

export const formatDate = (date: number | string, format: string = 'L') =>
  dayjs(date).format(format)

export const formatDateFromNz = (date: number, format: string = 'L') =>
  dayjs(date).tz('Pacific/Auckland').format(format)
