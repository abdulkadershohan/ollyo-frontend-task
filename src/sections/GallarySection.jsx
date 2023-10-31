import React from 'react'
import ImageIcon from '../components/ImageIcon'
const DATA = [
    {
        id: 1,
        image: require('../images/image-1.webp'),
    },
    {
        id: 2,
        image: require('../images/image-2.webp'),
    },
    {
        id: 3,
        image: require('../images/image-3.webp'),
    },
    {
        id: 4,
        image: require('../images/image-4.webp'),
    },
    {
        id: 5,
        image: require('../images/image-5.webp'),
    },
    {
        id: 6,
        image: require('../images/image-6.webp'),
    },
    {
        id: 7,
        image: require('../images/image-7.webp'),
    },
    {
        id: 8,
        image: require('../images/image-8.webp'),
    },
    {
        id: 9,
        image: require('../images/image-9.webp'),
    },
    {
        id: 10,
        image: require('../images/image-10.jpeg'),
    },
    {
        id: 11,
        image: require('../images/image-11.jpeg'),
    }
]

export default function GallarySection() {
    return (
        <div
            className='bg-[#fff] rounded-bl-lg rounded-br-lg p-4 border border-gray-200 shadow-sm'
        >
            <div
                className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2 py-6'
            >
                {/* <div
                    className='grid-cols-4 w-64 h-64 rounded-lg overflow-hidden border-2 border-gray-200'
                >
                    <img src={require('../images/image-1.webp')} alt="sds" />
                </div> */}
                {
                    DATA.map((item) => (
                        <div
                            key={item.id}
                            className={` rounded-lg overflow-hidden border-2 border-gray-200 
                            ${item.id === 1 ? 'col-span-2 row-span-2' : ''} relative cursor-pointer
                            after:hover:opacity-100 after:transition-all after:duration-500 after:ease-in-out after:opacity-0
                             after:bg-black after:bg-opacity-50 after:absolute 
                             after:top-0 after:left-0 after:w-full after:h-full                           
                            `}
                        >
                            <img
                                src={item.image}
                                alt="sds"
                                className='w-full h-full object-cover '
                            />
                            <input type="checkbox"
                                className='absolute top-4 left-4 w-5 h-5'
                            />

                        </div>
                    ))
                }
                <div
                    className='flex flex-col items-center justify-center gap-4 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100'
                >
                    <ImageIcon />
                    <p>
                        Add Image
                    </p>
                </div>

            </div>
        </div >
    )
}
