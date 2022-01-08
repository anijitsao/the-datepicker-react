import React, { useState, useEffect, useCallback, useMemo } from "react"
import { getDates } from "./dateformatter"

// css
import "./datepicker.css"

const ReactSimpleDatePicker = (props) => {
    // set today as a constant
    let today = new Date()
    let allDays = getDates(today.getMonth(), today.getFullYear())

    const [monthDays, setMonthDays] = useState(allDays)
    const [activeDate, setActiveDate] = useState(today.getDate())
    const [currentMonth, setCurrentMonth] = useState(today.getMonth())
    const [currentYear, setCurrentYear] = useState(today.getFullYear())

    const MONTH_NAMES = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]
    const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    useEffect(() => {
        console.log("Call to get dates")
        setMonthDays(getDates(currentMonth, currentYear))
    }, [currentMonth, currentYear])

    // handle when a date is clicked
    const handleDateChange = useCallback(
        (event) => {
            const [week, day] = event.target.id.split("-")
            const selectedDate = new Date(monthDays[week][day])
            setActiveDate(selectedDate.getDate())

            // send the selected date as prop to the parent component
            if (monthDays[week][day] !== "NA") {
                props.onSelectedDate(selectedDate)
            }
        },
        [activeDate]
    )

    // handle when month navigation is clicked
    const handleMonthChange = useCallback(
        (event) => {
            const { id } = event.target
            if (id == "right") {
                if (currentMonth >= 11) {
                    setCurrentMonth(0)
                    setCurrentYear(currentYear + 1)
                } else {
                    setCurrentMonth(currentMonth + 1)
                }
            } else {
                if (currentMonth <= 0) {
                    setCurrentMonth(11)
                    setCurrentYear(currentYear - 1)
                } else {
                    setCurrentMonth(currentMonth - 1)
                }
            }
            setActiveDate("")
        },
        [currentMonth]
    )

    // render
    return (
        <div className="month--container">
            <div className="month--name">
                <i
                    className="fa fa fa-angle-left icon icon--left"
                    onClick={handleMonthChange}
                    id="left"
                ></i>
                {`${MONTH_NAMES[currentMonth]} ${currentYear}`}
                <i
                    className="fa fa fa-angle-right icon icon--right"
                    onClick={handleMonthChange}
                    id="right"
                ></i>
            </div>
            <div className="week--container">
                {DAY_NAMES.map((dayName) => {
                    return (
                        <div key={dayName} className="day--of--month">
                            {dayName}
                        </div>
                    )
                })}
            </div>
            {monthDays.map((week, weekIndex) => {
                return (
                    <div className="week--container" key={weekIndex}>
                        {week.map((day, dayIndex) => {
                            let dayStyle =
                                new Date(day).getDate() == activeDate
                                    ? "day--of--month active--date"
                                    : "day--of--month"
                            dayStyle =
                                day == "NA" ? "dayStyle no--hover" : dayStyle
                            return (
                                <div
                                    className={dayStyle}
                                    key={dayIndex}
                                    id={`${weekIndex}-${dayIndex}`}
                                    onClick={handleDateChange}
                                >
                                    {day !== "NA" ? day.getDate() : ""}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default ReactSimpleDatePicker
