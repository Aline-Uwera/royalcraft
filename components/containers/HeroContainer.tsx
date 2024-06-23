import React from 'react'
import HeroImage from '../../public/HeroImage.png'
import Arrow from '../../public/arrow-right-white.svg'
import Image from 'next/image'
import GoogleRating from '../../public/google-rating.svg'
import ClutchRating from '../../public/clutch-rating.svg'
import GoodFirmsRating from '../../public/goodfirm-rating.svg'

export const HeroContainer = () => {
  return (
    <div className="flex mt-[70px] py-10 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-full max-w-full justify-center items-center mx-auto px-4">
      <div className="w-[42%] pr-3">
        <h1 className="font-semibold mb-4 text-[40px] leading-[50px]">
          Top Software <br /> Development Company
        </h1>
        <p className="mb-3 text-[18px] w-[95%] leading-6">
          Royal Craft Technologies is a leading software development company for
          more than a decade having 1200+ satisfied clients. We develop custom
          software solutions for funded startups, established brands, and
          mid-sized businesses. Having developed 300+ software solutions, we
          have expertise in creating custom solutions regardless of any
          industry. Let’s discuss your idea.
        </p>
        <div className="mb-3">
          <button
            type="button"
            className="mt-6 mb-12 text-white bg-[#e23c3c] rounded-[20px] py-3 px-7 flex justify-center items-center"
          >
            <span className="text-[22px] flex flex-col mr-5">
              Book Your Discovery Call
              <span className="text-[14px]">
                All our projects are secured by NDA
              </span>
            </span>
            <Image src={Arrow} height={18} width={30} alt="Arrow right" />
          </button>
        </div>
        <div className="flex">
          <a href="/" className="border-r pr-[30px] mr-[30px]">
            <Image src={GoogleRating} alt="Google Rating" />
          </a>
          <br />
          <a href="/" className="border-r pr-[30px] mr-[30px]">
            <Image src={ClutchRating} alt="Clutch Rating" />
          </a>
          <br />
          <a href="/">
            <Image src={GoodFirmsRating} alt="Good Firms Rating" />
          </a>
        </div>
      </div>
      <div className="pl-3">
        <Image src={HeroImage} alt="hero" />
      </div>
    </div>
  )
}
