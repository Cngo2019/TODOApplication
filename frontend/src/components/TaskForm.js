import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
export const Form = () => { 
    const [date, setDate] = useState(null)
    const [task, setTask] = useState("")

    const handleDateChange = (date) => {
        setDate(date)
    }

    const handleTaskChange = (event) => {
        event.preventDefault()
        setTask(event.target.value)
    }

    return (
        <div>
            <div>
            <form>
                <label>
                    Date To Be Done:
                    <DatePicker onChange={handleDateChange} selected={date}/>
                </label>
                <br></br>
                <label>
                    Task:
                    <textarea type="text" name="task" onChange={handleTaskChange} value={task}></textarea>
                </label>
            </form>
            </div>
        </div>
    )
}