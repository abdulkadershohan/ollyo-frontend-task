import React from 'react'

export default function Navbar() {
    return (
        <div
            className='bg-[#fff] rounded-tl-lg rounded-tr-lg p-4 border border-gray-200 '
        >
            <div
                className='flex items-center justify-between gap-2 px-2'
            >
                <div className='flex items-center gap-2'>
                    <input type='checkbox'
                        checked={true}
                        id='checkbox'
                        className='w-5 h-5'

                    />
                    <label htmlFor="checkbox"
                        className='text-lg font-bold '
                    >
                        3 Files Selected
                    </label><br></br>
                </div>
                <p
                    className='text-lg font-bold text-red-500 cursor-pointer'
                >
                    Delete files
                </p>

            </div>

        </div >
    )
}
