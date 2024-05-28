import React, { useState, useEffect } from 'react'
import backToTop from '../../public/back-top.svg'
import Image from 'next/image'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [bgSize, setBgSize] = useState('0%')

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const updateBgSize = () => {
    const scrollTop = window.pageYOffset
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    setBgSize(`${scrollPercent}%`)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    window.addEventListener('scroll', updateBgSize)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('scroll', updateBgSize)
    }
  }, [])

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-[70px] right-[30px] h-[52px] w-[52px] rounded-full place-items-center cursor-pointer custom-bg z-[8] shadow-[0_0_10px_rgba(0,0,0,0.2)] 
                  ${isVisible ? 'block' : 'hidden'}`}
      style={{ backgroundSize: bgSize, background:'conic-gradient(rgb(34, 36, 40) 19%, rgb(255, 255, 255) 19%)' }}
    >
      <span
        className="bg-white rounded-full grid place-items-center"
        style={{ height: 'calc(100% - 4px)', width: 'calc(100% - 4px)' }}
      >
        <Image
          src={backToTop}
          alt="back-to-top"
          width={17}
          height={20}
          className="custom-filter max-w-full"
        />
      </span>
    </div>
  )
}

export default BackToTopButton
