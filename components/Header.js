import Image from "next/image"
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header  className='sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10 bg-white'>

            {/* LEFT */}
           { <div  className='relative h-10 cursor-pointer my-auto'>
                <Image 
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
                  layout='fill' 
                  objectFit='contain' 
                  objectPosition='left'
               />
            </div>}

            {/* MIDDLE */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm '>
                <input className='outline-none flex-grow bg-transparent pl-5 placeholder-gray-400 text-sm text-gray-600' type='text' placeholder='Start your search'/>
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>

            {/* RIGHT */}
            <div className='flex items-center space-x-4 justify-end text-gray-500 '>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer '/>
                <div className='flex items-center space-x-2 border-2 rounded-full p-2'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>

        </header>
    )
}

export default Header