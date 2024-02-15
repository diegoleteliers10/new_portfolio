import React, { useState } from 'react';
import Image from 'next/image';

const ProjectsCard = ({ name, image, url, deploy, description, leng}) => {
  const [more, setMore] = useState(false);

  const toggleMore = () => {
    setMore(!more);
  };

  const handleClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`${more ? 'h-auto' : 'h-[400px]'} bg-[#363636] w-[300px] rounded-lg transition duration-200`}>
      <Image src={image} width={300} height={20} alt={name} className='w-full rounded-t-lg rounded-r-lg' />
      <div className='relative px-5 pb-3'>
        <h2 className='text-[#B5734C] font-semibold text-4xl mt-3'>{name}</h2>
        <p className={`${more ? '' : 'line-clamp-4'} font-normal text-[15px]`}>
          {description}
        </p>
        <button
          type='button'
          className='bg-[#191919] text-[#ffffff] text-[15px] rounded-md p-2'
          onClick={toggleMore}
        >
          {more ? 'See less' : 'See more'}
        </button>
        <div className='flex gap-2'>
          {leng.map((item) => (
            <p key={item.id} className='text-[12px]'>
              {item.name}
            </p>
          ))}
        </div>
        <div className='flex absolute gap-3 right-12 bottom-12'>
          <Image src='/github.svg' width={300} height={20} alt={name} className='w-[30px] cursor-pointer' onClick={()=>handleClick(url)}/>
          {deploy && <Image src='/deploy.svg' width={300} height={20} alt={name} className='w-[30px] cursor-pointer' onClick={() =>handleClick(deploy)}/>}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;