import React from 'react'

export default function SingleImage({ id, image }) {
    return (
        <div
            className={` rounded-lg overflow-hidden border-2 border-gray-200 
        ${id === 1 ? 'col-span-2 row-span-2' : ''} relative cursor-pointer
        after:hover:opacity-100 after:transition-all after:duration-500 after:ease-in-out after:opacity-0
         after:bg-black after:bg-opacity-50 after:absolute 
         after:top-0 after:left-0 after:w-full after:h-full                           
        `}
        >
            <img
                src={image}
                alt="sds"
                className='w-full h-full object-cover '
            />
            <input type="checkbox"
                className='absolute top-4 left-4 w-5 h-5'
            />

        </div>
    )
}
