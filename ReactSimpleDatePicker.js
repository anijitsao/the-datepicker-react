import React, {useState, useEffect} from 'react'
import { getDates } from './dateformatter'

// css
import './datepicker.css'

const ReactSimpleDatePicker = (props) => {
    let monthDays = getDates()
    const [activeDate, setActiveDate] = useState(new Date().getDate())


    // render
    return (
        <div className="month--container">
			{
				monthDays.map((week, weekIndex)=>{
					return (
						<div className="week--container" key={weekIndex}>
							{
								week.map((day, dayIndex)=>{
									const dayStyle = new Date(day).getDate() == activeDate ? 'day--of--month active--date' : 'day--of--month'
									return (
										<div className={dayStyle} key={dayIndex}>{day !== 'NA' ? new Date(day).getDate() : ''}
										</div>
									)
								})
							}
						</div>
					)

				})

			}
		</div>
    )
}

export default ReactSimpleDatePicker;