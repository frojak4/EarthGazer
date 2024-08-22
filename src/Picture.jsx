import React from 'react';


const Picture = ({image}) => {




    return(
        <div className="flex items-center justify-center min-h-80 mt-2">
            {image && <img className="border-blue-950 border-4 max-h-96" alt="Earth" src={image}/>}
        </div>
    )
}


export default Picture;