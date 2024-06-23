import React from 'react'
import serviceIcon from '../../public/Web-Development.svg'
import { ServiceCard } from './ServiceCard'
import { service } from '../containers/ServicesContainer'


const WhyUs = () => {
     const services = [
       {
         icon: serviceIcon,
         title: '300+ Software Projects Developed',
         description:
           'We have developed over 300 end-to-end software solutions spanning web, mobile, cloud, AI, ML, and emerging technologies.',
       },
       {
         icon: serviceIcon,
         title: '300+ Software Projects Developed',
         description:
           'We have developed over 300 end-to-end software solutions spanning web, mobile, cloud, AI, ML, and emerging technologies.',
       },
       {
         icon: serviceIcon,
         title: '300+ Software Projects Developed',
         description:
           'We have developed over 300 end-to-end software solutions spanning web, mobile, cloud, AI, ML, and emerging technologies.',
       },
       {
         icon: serviceIcon,
         title: '300+ Software Projects Developed',
         description:
           'We have developed over 300 end-to-end software solutions spanning web, mobile, cloud, AI, ML, and emerging technologies.',
       },
       {
         icon: serviceIcon,
         title: '300+ Software Projects Developed',
         description:
           'We have developed over 300 end-to-end software solutions spanning web, mobile, cloud, AI, ML, and emerging technologies.',
       },
       {
         icon: serviceIcon,
         title: '300+ Software Projects Developed',
         description:
           'We have developed over 300 end-to-end software solutions spanning web, mobile, cloud, AI, ML, and emerging technologies.',
       },
     ]
  return (
    <div className='py-16'>
      <div>
        <h2 className="text-[40px] text-center font-bold leading-[50px] mb-[32px] flex justify-center items-center flex-col">
          <span className="text-[20px] font-light">WHY CHOOSE</span>
          Space-O Technologies for Software Development?
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {services.map((service: service, index: number) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyUs