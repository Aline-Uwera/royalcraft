import React from 'react'

export const ButtonUI = ({title}:any) => {
  return (
    <div>
      <button className="bg-[#e23c3c] w-full text-[16px] text-white h-[44px] flex items-center justify-between rounded-lg px-[30px] py-4  leading-6 transition-all tracking-[1px]">
        {title}
      </button>
    </div>
  )
}
