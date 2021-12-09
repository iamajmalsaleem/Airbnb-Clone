import Image from "next/image"
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

function Header({placeholder}) {

    const router = useRouter();

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState(1)

    const resetInput = () => {
        setSearchInput("")
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests
            }
        })
    }
    
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }

    return (
        <header  className='sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10 bg-white'>

            {/* LEFT */}
            <div onClick={()=>router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image 
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
                  layout='fill' 
                  objectFit='contain' 
                  objectPosition='left'
                />
            </div>

            {/* MIDDLE */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm '>
                <input 
                   className='outline-none flex-grow bg-transparent pl-5 placeholder-gray-400 text-sm text-gray-600' 
                   type='text' 
                   placeholder={placeholder || 'Start your search'}
                   value = {searchInput}
                   onChange={(e)=>setSearchInput(e.target.value)}
                />
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

            {searchInput && (
                <div className='flex flex-col col-span-3 sm:mx-auto'>
                  <DateRangePicker
                     ranges={[selectionRange]} 
                     minDate={new Date()}
                     rangeColors={['#FD5B61']}
                     onChange={handleSelect}
                  />
                  <div className='flex items-center mb-4 border-b '>
                      <h2 className='text-2xl font-semibold flex-grow'>Number of guests</h2>
                      <UsersIcon className='h-5' />
                      <input
                        value={noOfGuests}
                        min={1}
                        onChange={(e)=>setNoOfGuests(e.target.value)}
                        type='number' 
                        className='outline-none w-12 pl-3 text-lg text-red-400'
                      />
                  </div>
                  <div className='flex'>
                      <button className="flex-grow texy-gray-500" onClick={resetInput}>Cancel</button>
                      <button className="flex-grow text-red-400" onClick={search}>Search</button>
                  </div>
                </div>  
            )}

        </header>
    )
}

export default Header
