import React from 'react'
import { ServiceCard } from '../ui/ServiceCard'
import serviceIcon from '../../public/Web-Development.svg'

export type service = {
  icon: any
  title: string
  description: string
}

export const ServicesContainer = () => {
  const services = [
    {
      icon: serviceIcon,
      title: 'Custom Software Development',
      description:
        'Looking to develop a custom software solution as per your business needs? Contact us. We understand your challenges, business models, and USP and create a secure custom software solution for any OS, browser, and device.',
    },
    {
      icon: serviceIcon,
      title: 'UI/UX Design Development',
      description:
        'Don’t let poor design drive your users to competitors. Our dedicated UI/UX design team has the skills to design brand-strengthening interfaces that attract users. If you are looking to create a user-centric design, partner with us.',
    },
    {
      icon: serviceIcon,
      title: 'Software Consulting',
      description:
        'Need guidance? But, not sure how to proceed? We offer a free consultation service, where we understand your requirements and goals. We suggest the strategy roadmap, technology stack, and features to integrate into your software.',
    },
    {
      icon: serviceIcon,
      title: 'Enterprise Software Development',
      description:
        'Get custom enterprise software that streamlines your business operations and ensures scalability. We build software solutions like ERP, SCM, CRM, or CMS that meet your organization’s specific requirements.',
    },
    {
      icon: serviceIcon,
      title: 'Mobile App Development',
      description:
        'Whether you want to build an app for Android, iOS, or cross-platform, we ensure your app is user-friendly, and provides value to its users. Hire our mobile app developers who have experience in developing more than 4400 mobile apps.',
    },
    {
      icon: serviceIcon,
      title: 'Web Development',
      description:
        'From eCommerce sites to informational portals, we ensure your web presence is responsive and designed to convert visitors into loyal customers. Having delivered 350+ web solutions, we assist you to build an online identity for your product.',
    },
    {
      icon: serviceIcon,
      title: 'Software Modernization',
      description:
        'Is your current software outdated? We assess your current software, identify areas of improvement, and use modern technologies and methodologies to ensure you remain competitive and efficient.',
    },
    {
      icon: serviceIcon,
      title: 'Software Integration',
      description:
        'Resolve the problem of data discrepancies across different systems. We ensure that all your tools and systems communicate effectively with each other, eliminating redundancies, streamlining operations, and enhancing overall efficiency.',
    },
    {
      icon: serviceIcon,
      title: 'Hire Software Developers',
      description:
        'Do you have a project in mind but lack the necessary tech expertise in-house? Hire our top-tier talent on a flexible basis. Whether it’s for a short-term project or a long-term collaboration, we ensure your projects are executed with precision.',
    },
  ]
  return (
    <div className="pt-20 pb-[50px] 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-full max-w-full mx-auto px-4 ">
      <div>
        <h2 className="text-[40px] text-center font-bold leading-[50px] mb-[32px] flex justify-center items-center flex-col">
          <span className="text-[20px] font-light">
            OUR SOFTWARE DEVELOPMENT
          </span>
          Services
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
