import React from 'react'
import ImageIcon from './ImageIcon'

export default function AddPhotos() {
    return (
        <div className='flex flex-col items-center justify-center gap-4 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100'>
            <ImageIcon />
            <p className='text-lg font-bold text-gray-500'>
                Add Image
            </p>
        </div>
    )
}
