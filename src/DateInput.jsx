import React from 'react';


const DateInput = ({handleDateChange, date}) => {
    return(
        <div className="flex items-center justify-center mt-12">
            <input onChange={handleDateChange} value={date}  className="bg-gray-600 text-white h-12 w-48 text-center" type="date" />
        </div>
    )
}

export default DateInput;