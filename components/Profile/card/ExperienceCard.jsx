'use client'

import Image from 'next/image'

const StudyCard = ({icon,place,name,description,date}) => {
  return (
    <div className='bg-[#363636] p-[15px] w-[300px] rounded-md relative'>
      <Image src={`/${icon}`} alt="icon" width={100} height={50} className='bg-white rounded-[100%] w-10 h-10 absolute right-5'/>
      <h3 className='text-[17px] text-[#B5734C] font-medium'>{place}</h3>
      <h2 className='text-[3rem] text-[#ffffff] font-semibold'>{name}</h2>
      <p className='line-clamp-2 text-[16px] text-[#ffffff70] font-semibold'>{description}</p>
      <div className='flex items-center mt-2 gap-2'>
        <Image src={`/calendar.svg`} alt="calendar" width={20} height={20} className='h-5'/>
        <p className='text-[#B5734C80] mt-0'>{date}</p>
      </div>
      
    </div>
  )
}

export default StudyCard