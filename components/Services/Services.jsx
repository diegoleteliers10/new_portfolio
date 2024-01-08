import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div id="services" className='mt-[3.5rem] p-[3.5rem]'>
      <h2 className="text-[#B5734C] text-center"> Services </h2>
      <div className='mt-10 flex gap-[4rem]'>

        <div className='bg-[#363636] p-6 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className='w-full mb-4 fill-[#13151a]'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
          <h3 className="text-center text-[#B5734C] text-xl font-bold">Web Application Development</h3>
          <ul className='p-4'>
            <li className='text-[12px] mb-2'>Creation of customized web applications according to client needs.</li>
            <li className='text-[12px] mb-2'>Development of intuitive and appealing user interfaces.</li>
            <li className='text-[12px]'>Implementation of modern technologies to ensure functionality and optimal user experience.</li>
          </ul>
        </div>        
        <div className='bg-[#363636] p-6 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className='w-full mb-4 fill-[#13151a]'><path d="M18 22c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10zm-5-5a1 1 0 1 1 0 2 1 1 0 1 1 0-2z"></path></svg>
          <h3 className="text-center text-[#B5734C] text-xl font-bold">Mobile Application Development</h3>
          <ul className='p-4'>
            <li className='text-[12px] mb-2'>Design and development of mobile applications for iOS and Android.</li>
            <li className='text-[12px] mb-2'>Use of frameworks and tools like React Native.</li>
            <li className='text-[12px]'>Integration of advanced functionalities such as push notifications, geolocation, user authentication, among others.</li>
          </ul>
        </div>        
        <div className='bg-[#363636] p-6 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className='w-full mb-4 fill-[#13151a]'><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
          <h3 className="text-center text-[#B5734C] text-xl font-bold">Website Consulting and Improvement</h3>
          <ul className='p-4'>
            <li className='text-[12px] mb-2'>Basic review of websites to identify clear and simple areas of improvement.</li>
            <li className='text-[12px] mb-2'>Optimization of images and page structure to enhance speed and basic performance.</li>
            <li className='text-[12px]'>Guidance on implementing web security and accessibility practices to enhance site quality.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services