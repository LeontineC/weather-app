import React from 'react'

//timezone  timezone_offset


const CurrentTime = ({ thetimezone }) => {

    

    const currentTime = new Date().toLocaleString('en-CA', {
        timeZone: [thetimezone],
        hour: '2-digit',
        minute: '2-digit',
        }
    )



    return (
        <div>
            {currentTime}
        </div>
    )
}

export default CurrentTime
