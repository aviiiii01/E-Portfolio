import React from 'react'
import Card from './Card'
import Footer from './Footer'

const Home = () => {
return (
    <div className='bg-[#f8f8f8]'>
    <div className='flex'>
            <div className='bg-[#8e7dbe] w-1/3 h-full'><Card/></div>
    </div>
    <Footer/>
    </div>
)
}

export default Home