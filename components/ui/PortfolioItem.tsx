import Image from 'next/image'
import React from 'react'

interface PortfolioItemProps {
  id: number
  title: string
  description: string
  imageSrc: string
  link: string
  bgColor: string
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  title,
  description,
  imageSrc,
  link,
  bgColor,
}) => {
  const isOdd = id % 2 !== 0

  return (
    <div className={`py-9 mt-2 mb-12 relative`}>
      <div
        className={`${bgColor} absolute m-auto  top-0 bottom-0 w-[70%] rounded-[20px] -z-10 ${
          isOdd ? 'left-0' : 'right-0'
        }`}
      ></div>
      <div
        className={`flex items-center -mx-4 ${isOdd ? 'flex-row-reverse' : ''}`}
      >
        <div className="flex justify-center px-4 flex-grow-0 flex-shrink-0 w-1/2 max-w-[50%]">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={500}
            className="w-full rounded-[30px]"
          />
        </div>
        <div className="pl-12 pr-4 flex-grow-0 flex-shrink-0 w-1/2 max-w-[50%]">
          <h2 className="text-2xl p-2 font-bold text-gray-800">{title}</h2>
          <p className="text-gray-700 mb-3 pl-2">{description}</p>
          <a href={link} className="text-red-500 hover:underline mt-5 ml-2">
            See Project Details →
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
