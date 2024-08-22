import React from 'react';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";


const Buttons = ({picUp, picDown, data, pictureIndex}) => {
    return (
        <div className="min-h-10 mt-6">
            {data.length > 1 && 
            <div className="flex justify-center">
                <button className="mx-2" onClick={picDown}>
                    <GoArrowLeft className={pictureIndex > 0 ? "text-slate-200 text-4xl" : "text-gray-500 text-4xl"}/>
                    </button>
                <button className="mx-2" onClick={picUp}>
                    <GoArrowRight className={pictureIndex + 1 < data.length ? "text-slate-200 text-4xl" : "text-gray-500 text-4xl"}/>
                    </button>
            </div>}
        </div>
    )
}

export default Buttons;