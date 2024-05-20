import React, { useState } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { Offer } from '../Offer'
import Image from 'next/image'

const NavMenu = () => {
    const [hoveredOfferIndex, setHoveredOfferIndex] = useState(0)
    const offers = [
      {
        icon: '',
        title: 'Web Development',
        subtitle: 'Build Next-gen Web Applications',
        services: [
          'Web Development Services',
          'Web Application Development Services',
          'Enterprise Web Application Development',
          'Progressive Web Application Development',
          'Web Portal Development Services',
          'Laravel Development Services',
          'PHP Development Services',
          'Ruby on Rails Development Services',
        ],
      },
      {
        icon: '',
        title: 'Mobile Development',
        subtitle: 'Create User-centric Mobile Experiences',
        services: [
          'iOS App Development Services',
          'Android App Development Services',
          'Cross-Platform App Development',
          'React Native Development Services',
          'Flutter App Development Services',
          'Mobile UI/UX Design Services',
        ],
      },
      {
        icon: '',
        title: 'Clone App',
        subtitle: 'Your Vision, Cloned to Perfection',
        services: [
          'Ride Sharing App Like Uber',
          'Photo Sharing App Like Instagram',
          'eCommerce App Like Amazon',
          'Food Delivery App Like Zomato',
          'Audio Streaming App Like Spotify',
          'Dating App Like Tinder',
          'Image Editing App Like Ghost Lens',
        ],
      },
    ]
    const handleOfferHover = (index: number) => {
      setHoveredOfferIndex(index)
    }

  return (
    <NavigationMenu.Root className=" relative z-[1] flex items-center justify-center">
      <NavigationMenu.List className="items-center justify-center m-0 flex list-none bg-white p-1">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="hover:text-[#E2C08C] flex items-center justify-between gap-[2px] font-normal px-3 py-2 text-[15px] leading-none outline-none">
            Company{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 flex list-none gap-5 p-[22px] sm:w-[600px] sm: sm:">
              <div>
                <h2 className="p-2">About Us</h2>
                <hr className="" />
                <ListItem title="About Royal Craft" href="/"></ListItem>
                <ListItem title="Leadership Team" href="/"></ListItem>
                <ListItem title="Awards and Certifications" href="/"></ListItem>
                <ListItem title="Client Testimonials" href="/"></ListItem>
                <ListItem title="Engagement Models" href="/"></ListItem>
              </div>
              <div>
                <h2 className="p-2">Our Work System</h2>
                <hr />
                <ListItem title="Careers" href="/"></ListItem>
                <ListItem title="Life at Royal Craft" href="/"></ListItem>
                <ListItem title="Employee Speaks" href="/"></ListItem>
                <ListItem title="Modern Infrastructure" href="/"></ListItem>
              </div>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="hover:text-[#E2C08C] flex items-center justify-between gap-[2px] font-normal px-3 py-2 text-[15px] leading-none outline-none">
            We Offer{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <div className="px-3 flex">
              <ul className="list-none w-[410px]">
                {offers.map((offer, index) => (
                  <div
                    key={index}
                    className="flex"
                    onMouseEnter={() => handleOfferHover(index)}
                    onMouseLeave={() => setHoveredOfferIndex(0)}
                  >
                    <Image
                      src={offer.icon}
                      alt="Native Development"
                      width={24}
                      height={24}
                    />
                    <ListItem title={offer.title} href="/">
                      {offer.subtitle}
                    </ListItem>
                  </div>
                ))}
              </ul>
              <ul className="list-none w-[410px]">
                {offers[hoveredOfferIndex].services.map(
                  (service: any, index: any) => (
                    <ListItem key={index} title={service} href="/"></ListItem>
                  )
                )}
              </ul>
            </div>

            {/* {offers.map((offer: any, index: any) => (
              <div
                key={index}
                onMouseEnter={() => handleOfferHover(index)}
                onMouseLeave={() => setHoveredOfferIndex(0)}
              >
                <Offer
                  key={index}
                  title={offer.title}
                  services={offer.services}
                  isHovered={index === hoveredOfferIndex}
                />
              </div>
            ))} */}
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="hover:text-[#E2C08C] flex items-center justify-between gap-[2px] font-normal  px-3 py-2 text-[15px] leading-none outline-none"
            href="/"
          >
            Our Work
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="hover:text-[#E2C08C] flex items-center justify-between gap-[2px] font-normal px-3 py-2 text-[15px] leading-none outline-none">
            Resources{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 flex list-none gap-5 p-[22px] sm:w-[600px] sm: sm:">
              <div>
                <h2 className="p-2">About Us</h2>
                <hr className="" />
                <ListItem title="About Royal Craft" href="/"></ListItem>
                <ListItem title="Leadership Team" href="/"></ListItem>
                <ListItem title="Awards and Certifications" href="/"></ListItem>
                <ListItem title="Client Testimonials" href="/"></ListItem>
                <ListItem title="Engagement Models" href="/"></ListItem>
              </div>
              <div>
                <h2 className="p-2">Our Work System</h2>
                <hr />
                <ListItem title="Careers" href="/"></ListItem>
                <ListItem title="Life at Royal Craft" href="/"></ListItem>
                <ListItem title="Employee Speaks" href="/"></ListItem>
                <ListItem title="Modern Infrastructure" href="/"></ListItem>
              </div>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="hover:text-[#E2C08C] flex items-center justify-between gap-[2px] font-normal px-3 py-2 text-[15px] leading-none outline-none"
            href="/"
          >
            App Cost Calculator
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="bg-[#fc5454] text-white h-[44px] flex items-center justify-between gap-[2px] font-normal rounded-lg px-3 py-2 text-[15px] leading-none outline-none transition-all transition ease-in-out delay-150 duration-300"
            href="/"
          >
            Contact us
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  )
}

export const ListItem = React.forwardRef(
  ({ className, children, title, ...props }: any, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        
        <a
          className={classNames(
            'hover:text-[#E2C08C] block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
            {title}
          </div>
          <p className="text-mauve11 leading-[1.4]">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
)

export default NavMenu
