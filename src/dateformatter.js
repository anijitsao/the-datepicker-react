export function getDates(month, year) {
    console.log('code reaches here', month, year)

    if (month && year) {
        console.log('month and year received', month, year)
        // set to the first day of the month and year received
        let today = new Date(year, month, 1)

        const NUM_OF_DAYS = 31
        let monthOfDates = []

        // filling the Array with all the dates of a month
        for (let i = 0; i < NUM_OF_DAYS; i++) {
            monthOfDates.push(new Date(today.getTime() + i * 24 * 3600 * 1000))
        }

        console.log('MOnth unformatted', monthOfDates)
        return formatMonthDates(monthOfDates, today)
    }
}

// format the month of dates to a 2D array
function formatMonthDates(monthOfDates, today) {

    const NUM_OF_WEEKS = 6
    let month = []

    // set the week of the month as 'NA'
    for (let i = 0; i < NUM_OF_WEEKS; i++) {
        month.push(['NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA'])
    }

    let weekToFill = 0
    for (let i = 0; i < monthOfDates.length; i++) {
        let currentDate = monthOfDates[i]
        if (month[weekToFill] && month[weekToFill][currentDate.getDay()] == 'NA') {
            if (ifLastDay(currentDate, today)) { break; }
            month[weekToFill][currentDate.getDay()] = currentDate
            if (currentDate.getDay() == 6) {
                weekToFill = weekToFill + 1
            }
        } else {
            if (ifLastDay(currentDate, today)) { break; }
            month[weekToFill][currentDate.getDay()] = currentDate
            weekToFill = weekToFill + 1
        }
    }

    // console.log('MOnth as Formatted', month)
    return month
}

function ifLastDay(currentDate, today) {
    return currentDate.toDateString() === new Date(today.getFullYear(), today.getMonth() + 1, 1).toDateString()
}