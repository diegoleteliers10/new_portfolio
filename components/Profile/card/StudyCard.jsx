'use client'

import Image from 'next/image'
//TODO:mejorar el UI de la card, aun no me convencen los colores
const StudyCard = ({icon,place,name,description,date}) => {
  return (
    <div className='bg-[#363636] p-[1.2rem] w-[300px] rounded-md relative'>
      <Image src={`/${icon}`} alt="icon" width={400} height={50} className='bg-white rounded-[100%] w-10 h-10 absolute right-5'/>
      <h2 className='text-[2rem] text-[#B5734C] font-semibold'>{name}</h2>
      <p className='line-clamp-2 text-[16px] text-[#ffffff] font-semibold'>{description}</p>
      <h3 className='text-[13px] text-[#ffffff] font-sans mt-1'>{place}</h3>
      <div className='flex items-center mt-2 gap-2'>
        <Image src={`/calendar.svg`} alt="calendar" width={20} height={20} className='h-5'/>
        <p className='text-[#B5734C90] mt-0'>{date}</p>
      </div>
      
    </div>
  )
}

export default StudyCard