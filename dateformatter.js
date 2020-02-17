export function getDates() {
    // get the value of today
    let today = new Date()
    if (today.getDate() > 1) {
        if (today.getMonth() > 11) {

            // set to the next year January
            today = new Date(today.getFullYear() + 1, 0, 1)
        } else if (today.getMonth() < 0) {

            // set to the previous year December
            today = new Date(today.getFullYear() - 1, 11, 1)
        } else {

            // set to the first day of the month
            today = new Date(today.getFullYear(), today.getMonth(), 1)
        }
    }

    const NUM_OF_DAYS = 31
    let monthOfDates = []

    // filling the Array with all the dates of a month
    for (let i = 0; i < NUM_OF_DAYS; i++) {
        monthOfDates.push(new Date(today.getTime() + i * 24 * 3600 * 1000))
    }

    console.log('MOnth unformatted', monthOfDates)
    return formatMonthDates(monthOfDates, today)
}

// format the month of dates to a 2D array
function formatMonthDates(monthOfDates, today) {

    const NUM_OF_WEEKS = 5
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

    console.log('MOnth as Formatted', month)
    return month
}

function ifLastDay(currentDate, today) {
    return currentDate.toDateString() === new Date(today.getFullYear(), today.getMonth() + 1, 1).toDateString()
}