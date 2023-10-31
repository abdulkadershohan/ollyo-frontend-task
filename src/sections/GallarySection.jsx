import React from 'react'
import AddPhotos from '../components/AddPhotos'
import SingleImage from '../components/SingleImage'
const DATA = [
    {
        id: 1,
        image: require('../assets/images/image-1.webp'),
    },
    {
        id: 2,
        image: require('../assets/images/image-2.webp'),
    },
    {
        id: 3,
        image: require('../assets/images/image-3.webp'),
    },
    {
        id: 4,
        image: require('../assets/images/image-4.webp'),
    },
    {
        id: 5,
        image: require('../assets/images/image-5.webp'),
    },
    {
        id: 6,
        image: require('../assets/images/image-6.webp'),
    },
    {
        id: 7,
        image: require('../assets/images/image-7.webp'),
    },
    {
        id: 8,
        image: require('../assets/images/image-8.webp'),
    },
    {
        id: 9,
        image: require('../assets/images/image-9.webp'),
    },
    {
        id: 10,
        image: require('../assets/images/image-10.jpeg'),
    },
    {
        id: 11,
        image: require('../assets/images/image-11.jpeg'),
    }
]

export default function GallarySection() {
    return (
        <div className='bg-[#fff] rounded-bl-lg rounded-br-lg p-4 border border-gray-200 shadow-sm'>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2 py-6'>
                {
                    DATA.map((item) => (
                        <SingleImage
                            {...item}
                        />
                    ))
                }
                <AddPhotos />

            </div>
        </div >
    )
}
