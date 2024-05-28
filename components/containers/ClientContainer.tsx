import Image from 'next/image'
import React from 'react'
import ClientLogo from '../../public/client-logo-01.svg'
import ClientLogo1 from '../../public/client-logo-02.svg'


export const ClientContainer = () => {
    return (
      <div className="flex py-10 justify-between items-center 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-full max-w-full mx-auto px-4">
        <div className="">Our Valuable Clients</div>
        <div className="flex flex-grow justify-around">
          <div>
            <Image src={ClientLogo} alt="client" />
          </div>
          <div>
            <Image src={ClientLogo1} alt="client" />
          </div>
          <div>
            <Image src={ClientLogo} alt="client" />
          </div>
          <div>
            <Image src={ClientLogo1} alt="client" />
          </div>
        </div>
      </div>
    )
}
