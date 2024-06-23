// components/FeaturedIn.tsx

import Image from 'next/image'
import React from 'react'

const featuredCompanies = [
  { id: 1, name: 'TechCrunch', src: '/logos/Tech-Crunch.svg' },
  { id: 2, name: 'The Guardian', src: '/logos/The-Guardian.svg' },
  { id: 3, name: 'Bloomberg', src: '/logos/Bloomberg.svg' },
  { id: 4, name: 'BBC', src: '/logos/BBC.svg' },
  { id: 5, name: 'Business Insider', src: '/logos/Business-insider.svg' },
  { id: 6, name: 'The Telegraph', src: '/logos/The-Telegraph.svg' },
]

const FeaturedIn: React.FC = () => {
    return (
      <div className="bg-[#f6f8fb]">
        <div className="py-20 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-full max-w-full mx-auto px-4 ">
          <div>
            <h2 className="text-[40px] text-center font-bold leading-[50px] mb-[32px] flex justify-center items-center flex-col">
              <span className="text-[20px] font-light">
                Our Software Solutions
              </span>
              Recognized & Featured In
            </h2>
          </div>
          <div className="flex justify-center items-center flex-wrap">
            {featuredCompanies.map((company) => (
              <div key={company.id} className="w-[16.66%]">
                <Image
                  src={company.src}
                  alt={company.name}
                  width={200}
                  height={44}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default FeaturedIn
