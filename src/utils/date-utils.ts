import * as dateFns from 'date-fns'

export const formats: any = {
    _short: 'dd-MMM-yyyy',
    _long: 'dd-MMM-yyyy hh:mm:ssp',
    short: dateFns.format(new Date(), 'dd-MMM-yyyy'),
    long: dateFns.format(new Date(), 'dd-MMM-yyyy hh:mm:ss.SSp'),
}

export function date(type: 'short' | 'long' = 'short') {
    return formats[type]
}
