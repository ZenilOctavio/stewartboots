'use client'
import Image from "next/image"
import { BadgeDollarSign, BookImage, Speech, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

interface AdminNavigationBarProps {
  className: string 
} 

interface AdminNavbarItemProps {
  className?: string
  content: string
  href: string
  active?: boolean
  Icon?: React.FC
} 

const adminNavbarItems = [
  {content: 'Products', href: '/admin/products', Icon: BadgeDollarSign},
  {content: 'Contact', href: '/admin/contact', Icon: Users},
  {content: 'Testimonials', href: '/admin/testimonials', Icon: Speech},
  {content: 'Images', href: '/admin/images', Icon: BookImage},
]

 function AdminNavbarItem ({className = "", content, href, Icon=()=>null, active= false}:AdminNavbarItemProps){
  const variants = {
    "px-2 py-3 ": true,
    "bg-background text-backgroundSecondary ":active,
    "text-white hover:bg-white hover:text-backgroundSecondary hover:scale-105 transition-transform shadow-sm": !active,
  }
  return(
    <li className={clsx(variants, className)}>
      <a href={href} className="w-full flex items-center justify-between gap-2 group-hover:scale-105 transition-transform">
        {content}
        <Icon/> 
      </a>
    </li>
  )
}

export default function AdminNavigationBar ({className}:AdminNavigationBarProps){
  const pathname = usePathname()
  return(
        <nav className={"bg-backgroundSecondary " + className}>
          <header>
           <Link href="/admin">
              <Image
                src="/stwboot-logo.png"
                width={400}
                alt="Stewart Boot Logo"
                height={150}
              />
            </Link> 
          </header>
          <ul className="flex flex-col gap-0 mt-2">
          {adminNavbarItems.map((item, index) => {
            return (
                <AdminNavbarItem key={index} {...item} active={pathname === item.href}/>
            )
          })}
          </ul>   
        </nav> 
  )
}