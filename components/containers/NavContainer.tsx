import React from 'react'
import NavMenu from '../ui/NavMenu'
import Image from 'next/image'
import Logo from '../../public/Logo.png'	

export const NavContainer = () => {
  return (
    <div className="flex w-full justify-between">
      <div className='flex flex-col items-center justify-center h-10'>
        <Image src={Logo} alt="logo" width={24} height={24} />
        <p className='text-[20px] font-extrabold h-5'>Royal Craft</p>
      </div>
        <NavMenu />
    </div>
  )
}
