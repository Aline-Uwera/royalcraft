import Image from 'next/image'
import React from 'react'
import { CTA } from '../ui/Cta'
import WhyUs from '../ui/WhyUs'

interface SoftwareSolution {
  id: number
  name: string
  iconSrc: string
}

const softwareSolutions: SoftwareSolution[] = [
  {
    id: 1,
    name: 'Enterprise resource planning software',
    iconSrc: '/crms.svg',
  },
  {
    id: 2,
    name: 'Customer relationship management software',
    iconSrc: '/erps.svg',
  },
  {
    id: 3,
    name: 'Human resource management software',
    iconSrc: '/crms.svg',
  },
  { id: 4, name: 'Content management system', iconSrc: '/erps.svg' },
  { id: 5, name: 'Learning management software', iconSrc: '/crms.svg' },
  { id: 6, name: 'Fleet management software', iconSrc: '/erps.svg' },
  { id: 7, name: 'Software as a Service Solution', iconSrc: '/crms.svg' },
  {
    id: 8,
    name: 'Supply chain management software',
    iconSrc: '/erps.svg',
  },
  { id: 9, name: 'Project management software', iconSrc: '/crms.svg' },
]

const SoftwareSolutions: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="py-20 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-full max-w-full mx-auto px-4">
        <div className="flex justify-center items-center -mx-4">
          <div className="text-left px-4 flex-grow-0 flex-shrink-0 w-[33.333333%] max-w-[33.333333%]">
            <div>
              <h2 className="text-[40px] text-left font-bold leading-[50px] mb-[32px] flex flex-col">
                <span className="text-[20px] leading-7 font-light uppercase">
                  Software Solutions
                </span>
                We Develop
              </h2>
            </div>
            <p className="text-gray-700 pr-14">
              Our experienced software developers build custom solutions, cloud
              software, & websites to help you stay ahead. Explore the list of
              software solutions that we develop.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareSolutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={solution.iconSrc}
                    alt={solution.name}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-900">
                  {solution.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <CTA
          title="Team Up With Expert Software Developers"
          description="Hire dedicated developers ready to transform your concepts into tangible solutions. Let’s talk to discuss your idea."
          buttonText="Hire Software Developers"
        />
        <WhyUs/>
      </div>
    </div>
  )
}

export default SoftwareSolutions
