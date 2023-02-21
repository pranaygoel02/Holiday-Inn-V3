import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function Stars({value,size}) {
    let stars = []
    for (let i = 0; i < value; i++) {
        stars.push(<StarIcon fontSize={size} className='text-primary'/>)
    }
    return (
        <div className='flex gap-[0.1rem] animate-up'>
            {stars}
        </div>

    )
}

export default Stars