import React from 'react'
import { ButtonUI } from '../ui/Button'
import bgImage from '../../public/bg-circle.png'

export const CTA = ({ title, description, buttonText }: any) => {
  return (
    <div className="pt-20 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-full max-w-full mx-auto px-4">
      <div
        className="relative rounded-[24px] p-[54px] bg-no-repeat bg-cover"
        style={{
          backgroundColor: '#EAF3FF',
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="px-[15px] w-full flex flex-col justify-center items-center">
            <p className="text-[40px] mb-4 font-semibold leading-[58px]">
              {title}
            </p>
            <p className="text-[20px] leading-[30px] text-center mx-auto max-w-[900px]">{description}</p>
          </div>
          <div className="mt-6 px-[15px] w-full flex justify-center items-center">
            <ButtonUI title={buttonText} />
          </div>
        </div>
      </div>
    </div>
  )
}
