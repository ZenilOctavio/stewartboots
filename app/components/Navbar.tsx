'use client'

import Link from "next/link"
import { MapPin, Phone, Menu } from 'lucide-react'
import { useState } from "react"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { contactDictionary, mapsLink, websiteNavItems } from "../home/constants"

interface NavbarItemProps {
  content: string
  href: string
  active?: boolean
}

function WebsiteNavbarItem({ content, href, active = false }: NavbarItemProps) {
  return (
    <Link
      href={href}
      className={
        clsx(
          "capitalize text-nowrap font-pdisplay font-light tracking-widest  px-2 pb-1 text-background  ",
          { "bg-background text-backgroundSecondary font-semibold md:rounded-t": active }
        )
      }
    >{content}</Link>
  )
}

interface ExternalNavbarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  content: string
  href: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>

}


function ExternalNavbarItem({ content, Icon, ...props }: ExternalNavbarItemProps) {

  return (
    <a className="flex gap-2 text-nowrap text-background hover:scale-105 transition-transform items-center cursor-pointer md:text-md pb-2" {...props}>
      <Icon className="w-5 h-5" />
      <span>{content}</span>
    </a>
  )
}


const externalNavItems = [
  { content: contactDictionary.location.data, target: 'blank', href: mapsLink, Icon: MapPin },
  { content: contactDictionary.phone.data, href: `tel${contactDictionary.phone.data}`, Icon: Phone }
]

interface NavbarProps {
  className?: string
}

export function Navbar({ className = "" }: NavbarProps) {

  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={className + ""}
    >
      <button onClick={toggleIsOpen} className="text-background md:hidden">
        <Menu />
      </button>
      <ul
        className={
          clsx(
            "flex flex-col gap-4 absolute top-28 right-0 p-5 w-screen bg-backgroundSecondary",
            { "hidden": !isOpen },
            "md:flex md:flex-row md:static md:p-0 md:w-auto md:items-end"
          )
        }

      >
        {
          websiteNavItems.map(item => {
            console.log(pathname)
            return (
              <li
                key={item.href}
              >
                <WebsiteNavbarItem
                  {...item}
                  active={item.href == pathname}
                >

                </WebsiteNavbarItem>
              </li>
            )
          })
        }
        <div
          className="self-end flex gap-5 ml-auto"
        >
          {
            externalNavItems.map((item, index) => {
              return (
                <li key={item.href} className={index == 0 ? "ml-auto" : ""}>
                  <ExternalNavbarItem

                    {...item}
                  >

                  </ExternalNavbarItem>
                </li>
              )
            })
          }
        </div>
      </ul>
    </nav >
  )
}