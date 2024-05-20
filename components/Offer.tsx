import React, { useState } from 'react'
import { ListItem } from './ui/NavMenu'

export const Offer = ({
  title,
  services,
  isHovered,
}: {
  title: string
  services: string[]
  isHovered: boolean
}) => {
  return (
    <div className='flex flex-col' >
      <div className="h-[700px]">
        <h2>{title}</h2>
      </div>
      <div className="m-0 h-[700px] flex list-none gap-5 p-[22px] sm:w-[600px] sm: sm:">
        <div>
          {isHovered && (
            <ListItem title="" href="/">
              {services.map((service: any, index: any) => (
                <li key={index}>{service}</li>
              ))}
            </ListItem>
          )}
        </div>
      </div>
    </div>
  )
}
