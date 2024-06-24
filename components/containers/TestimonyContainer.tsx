import React from 'react'
import rating from '../../public/Rating.svg'
import Image from 'next/image'
import arrow from '../../public/arrow-right-1.svg'
import ceo from '../../public/CF.png'

export const TestimonyContainer = () => {
  return (
    <div className="py-20 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-full max-w-full mx-auto px-4">
      <div>
        <h2 className="text-[40px] text-center font-bold leading-[50px] mb-[32px] flex justify-center items-center flex-col">
          <span className="text-[20px] font-light">CLIENTS LOVE</span>
          Afripod Technologies
        </h2>
      </div>
      <div className="flex justify-between items-center flex-wrap -m-[15px]">
        <div className="flex-none w-[58.333333%] max-w-[58.333333%] relative min-h-[1px] px-4">
          <p className="text-[20px] leading-8 text-[#1b1c1e] relative z-[1] pt-[30px] mb-0">
            Afripod developed a custom project management system for our
            engineering team. The system they built allows our 28 engineers to
            track progress across all 75 concurrent projects. Key features like
            Gantt chart scheduling and automatic notifications have increased
            efficiency, reducing average project duration by 19%. With the
            detailed analytics dashboard, we have visibility into bottlenecks
            that have helped optimize resource allocation between projects.
          </p>
          <div className="pt-[20px] flex flex-col">
            <div className="flex items-center mb-2">
              <p className=" text-[#1b1c1e] text-[20px] leading-[26px]  font-medium mb-0 pr-[15px]">
                Cyimana Faisal
              </p>
              <p>
                <Image src={rating} alt="Review-star" />
              </p>
            </div>
            <p>Founder & CEO, Tech Firm</p>
          </div>
          <div className="mt-[30px]">
            <div className="flex capitalize mt-7 text-base text-[#fc5454] font-medium relative ">
              <a href="" className="no-underline custom-a-bg">
                View all Testimonials
              </a>

              <Image
                src={arrow}
                alt="arrow-right"
                className="ml-[5px] w-4 custom-img-filter"
              />
            </div>
          </div>
        </div>
        <div className="flex-none w-[41.666667%] max-w-[41.666667%] relative min-h-[1px] px-4 items-center align-middle">
          <Image
            src={ceo}
            alt="CEO & Founder"
            width={434}
            height={402}
            className="items-center align-middle"
          />
        </div>
      </div>
    </div>
  )
}
