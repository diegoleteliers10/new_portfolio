import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div id="services" className='mt-[3.5rem] p-[3rem]'>
      <h2 className="text-[#B5734C] text-center"> Services </h2>
      <div className='mt-10 flex gap-[4rem]'>

        <div className='bg-[#363636] p-6 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className='w-full mb-4 fill-[#13151a]'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
          <h3 className="text-center text-[#B5734C] text-xl font-bold">Desarrollo de Aplicaciones Web</h3>
          <ul className='p-4'>
            <li className='text-[12px] mb-2'>Creación de aplicaciones web personalizadas según las necesidades del cliente.</li>
            <li className='text-[12px] mb-2'>Desarrollo de interfaces de usuario intuitivas y atractivas.</li>
            <li className='text-[12px]'>Implementación de tecnologías modernas, para garantizar la funcionalidad y la experiencia óptima del usuario.</li>
          </ul>
        </div>        
        <div className='bg-[#363636] p-6 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className='w-full mb-4 fill-[#13151a]'><path d="M18 22c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10zm-5-5a1 1 0 1 1 0 2 1 1 0 1 1 0-2z"></path></svg>
          <h3 className="text-center text-[#B5734C] text-xl font-bold">Desarrollo de Aplicaciones Móviles</h3>
          <ul className='p-4'>
            <li className='text-[12px] mb-2'>Diseño y desarrollo de aplicaciones móviles para iOS y Android.</li>
            <li className='text-[12px] mb-2'>Uso de frameworks y herramientas como React Native.</li>
            <li className='text-[12px]'>Integración de funcionalidades avanzadas como notificaciones push, geolocalización, autenticación de usuarios, entre otras.</li>
          </ul>
        </div>        
        <div className='bg-[#363636] p-6 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className='w-full mb-4 fill-[#13151a]'><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
          <h3 className="text-center text-[#B5734C] text-xl font-bold">Consultoría y Mejora de Sitios Web</h3>
          <ul className='p-4'>
            <li className='text-[12px] mb-2'>Revisión básica de sitios web para identificar áreas de mejora claras y simples.</li>
            <li className='text-[12px] mb-2'>Optimización de imágenes y estructura de página para mejorar velocidad y rendimiento básico.</li>
            <li className='text-[12px]'>Asesoramiento en la implementación de prácticas de seguridad y accesibilidad web para mejorar la calidad del sitio.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services