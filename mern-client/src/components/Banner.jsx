import React from 'react'
import BannerCard from '../Home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-green-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 h-full space-y-8'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span 
                className='text-orange-600'>for the Best Prices</span></h2>
                <p className='md:w-4/5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum odit placeat 
                    cupiditate sunt veniam odio doloribus! Laudantium, eos numquam a, explicabo modi, 
                    voluptatibus consectetur harum asperiores quas atque ratione.</p>
                    <div>
                        <input type="search" name='search' id='search' placeholder='search a book' className='py-2
                        px-2 rounded-s-sm outline-none' />
                        <button className='bg-orange-600 px-6 py-2 text-white font-medium hover:bg-black
                        transition-all duration-200 ease-in'>Search</button>
                    </div>
            </div>

            {/* right side */}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner