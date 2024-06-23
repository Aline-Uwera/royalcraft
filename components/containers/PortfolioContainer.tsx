// pages/index.tsx

import type { NextPage } from 'next'
import React from 'react'
import PortfolioItem from '../ui/PortfolioItem'
// data/portfolioItems.ts

export const portfolioItems = [
  {
    title:
      'Developed On-demand Food Delivery App That Secured Funding of $1.2 Billion',
    description:
      'Glovo is one of the unicorn (secured $1.2 Billion funding) apps developed by Space-O Technologies. Apple chose Glovo for its “Best of 2016” award. This online marketplace app offers multi-category grocery product delivery and has over 30 million app downloads. TechCrunch, Financial Times, and Bloomberg have covered this application.',
    imageSrc: '/glovo.jpg',
    link: '#',
    bgColor: 'bg-yellow-50',
  },
  {
    title:
      'Developed an eLearning Platform That Received Funding of $1.4 Million',
    description:
      'Space-O Technologies developed Fyule Video Lab, a video learning platform, for students to engage with educational content. This EdTech startup secured funding of $1.4 million through an Angel syndicate, backed by High Net Worth Individuals (HNIs) that includes senior leaders from Google, Deloitte, Tata 1mg, and Axis Capital. We used Flutter, PHP, Laravel, and MySQL to develop a video learning platform for iOS, Android, and the web.',
    imageSrc: '/fyule.jpg',
    link: '#',
    bgColor: 'bg-purple-50',
  },
  {
    title:
      'Developed an eLearning Platform That Received Funding of $1.4 Million',
    description:
      'Space-O Technologies developed Fyule Video Lab, a video learning platform, for students to engage with educational content. This EdTech startup secured funding of $1.4 million through an Angel syndicate, backed by High Net Worth Individuals (HNIs) that includes senior leaders from Google, Deloitte, Tata 1mg, and Axis Capital. We used Flutter, PHP, Laravel, and MySQL to develop a video learning platform for iOS, Android, and the web.',
    imageSrc: '/Ecomchat.jpg',
    link: '#',
    bgColor: 'bg-[#eff4fc]',
  },
  {
    title:
      'Developed an eLearning Platform That Received Funding of $1.4 Million',
    description:
      'Space-O Technologies developed Fyule Video Lab, a video learning platform, for students to engage with educational content. This EdTech startup secured funding of $1.4 million through an Angel syndicate, backed by High Net Worth Individuals (HNIs) that includes senior leaders from Google, Deloitte, Tata 1mg, and Axis Capital. We used Flutter, PHP, Laravel, and MySQL to develop a video learning platform for iOS, Android, and the web.',
    imageSrc: '/sahanabook.jpg',
    link: '#',
    bgColor: 'bg-[#edfcff]',
  },
]


const PortfolioContainer = () => {
  return (
    <div className="py-20 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-full max-w-full mx-auto px-4">
      <div>
        <h2 className="text-[40px] text-center font-bold leading-[50px] mb-[32px] flex justify-center items-center flex-col">
          <span className="text-[20px] font-light">
            OUR SOFTWARE DEVELOPMENT
          </span>
          Portfolio
        </h2>
      </div>

      <div className="container mx-auto p-6 space-y-6 relative">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            id={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            link={item.link}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </div>
  )
}

export default PortfolioContainer