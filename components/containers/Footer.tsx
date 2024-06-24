import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className=" pt-20 pb-5 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-full max-w-full mx-auto px-4 ">
        <div className="flex -mx-4 py-16 ">
          <div className=" flex flex-col flex-grow-0 flex-shrink-0 w-[33.333333%] max-w-[33.333333%] border-r border-r-[#ddd] pr-10 pl-4">
            <h3 className="text-2xl font-medium text-[#FC7754] mb-2">
              Have Questions?
            </h3>
            <p className="text-xl">Get in touch with us</p>
            <p className="text-3xl font-medium  mb-2">
              <a
                href="tel:+250780508308"
                className="hover:text-[#FC7754] transition bg-transparent"
              >
                +250 780 508 308
              </a>
            </p>
          </div>
          <div className="flex flex-col flex-grow-0 flex-shrink-0 w-[33.333333%] max-w-[33.333333%] border-r border-r-[#ddd] px-10 ">
            <h3 className="text-xl font-medium  mb-2">Email:</h3>
            <p className="text-xl mb-2">
              <a
                href="mailto:sales@afripod.com"
                className="hover:text-[#FC7754]"
              >
                sales@afripod.com
              </a>
            </p>
            <p className="text-xl mb-2">
              <a href="mailto:hr@afripod.com" className="hover:text-[#FC7754]">
                hr@afripod.com
              </a>
            </p>
          </div>
          <div className="flex flex-col flex-grow-0 flex-shrink-0 w-[33.333333%] max-w-[33.333333%] pl-10 pr-4">
            <h3 className="text-xl font-medium mb-2">Skype:</h3>
            <p className="text-xl mb-2">
              <a href="http://" className="hover:text-[#FC7754] ">
                afripod.inquiry
              </a>
            </p>
            <h3 className="text-xl font-medium mt-2 mb-2">Follow Us</h3>
            <div className="flex mb-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#575757] hover:bg-[#1877F2] flex justify-center items-center h-[43px] w-[43px] text-center leading-[43px] rounded-[50%] mr-5 mb-[10px]"
              >
                <img src="/facebook.svg" alt="Facebook" className="" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#575757] hover:bg-[#0762C8] flex justify-center items-center h-[43px] w-[43px] text-center leading-[43px] rounded-[50%] mr-5 mb-[10px]"
              >
                <img src="/linked-in.svg" alt="LinkedIn" className="" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#575757] hover:bg-black flex justify-center items-center h-[43px] w-[43px] text-center leading-[43px] rounded-[50%] mr-5 mb-[10px]"
              >
                <img src="/twitter.svg" alt="Twitter" className="" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#575757] hover:bg-[#FF0000]  h-[43px] w-[43px] flex justify-center items-center rounded-[50%] mr-5 mb-[10px]"
              >
                <img src="/youtube.svg" alt="YouTube" className="" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t px-4 py-5 text-center text-[15px]">
          <p className=" float-left">
            Copyright © 2010 - 2024 Afripod. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 float-right text-right">
            <a
              href="#"
              className=" hover:underline hover:text-[#FC7754] border-r-2 border-r-[#333] pr-2"
            >
              Term of Use
            </a>
            <a
              href="#"
              className=" hover:underline hover:text-[#FC7754] border-r-2 border-r-[#333] pr-2"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className=" hover:underline hover:text-[#FC7754] border-r-2 border-r-[#333] pr-2"
            >
              Glossary
            </a>
            <a href="#" className=" hover:underline hover:text-[#FC7754]">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
