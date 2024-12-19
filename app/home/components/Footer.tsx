import Link from "next/link";
import { socialMediaLinks, websiteNavItems } from "../constants";
import { FacebookIcon, InstagramIcon } from "../icons/SocialMedia";
import { CircleFadingPlusIcon } from 'lucide-react'

const socialMediaIconMapper = (name: string) => {

  const key = name.toLowerCase()

  switch (key) {

    case 'facebook':
      return FacebookIcon
    case 'instagram':
      return InstagramIcon
    default:
      return CircleFadingPlusIcon

  }

}

export function Footer() {
  return (
    <footer className="flex w-full gap-16 px-10 py-5 bg-tertiary mt-auto border border-t-foreground">
      <section className="basis-2/6">
        <h2 className="text-2xl font-semibold">Stewart Boot</h2>
        <p className="text-footerForeground tracking-wider">&copy; Copyright 2024 Stewart Boot theme. All rights reserved.</p>
      </section>
      <section className="border border-l-foreground border-t-0 border-b-0 border-r-0 px-5 basis-2/6">
        <h3 className="text-xl font-semibold">Pages</h3>
        <ul className="mt-2 flex flex-col gap-2">
          {
            websiteNavItems.map(item => {
              return (
                <li key={item.href}>
                  <Link className="font-light text-footerForeground" href={item.href}>{item.content}</Link>
                </li>
              )
            })
          }
        </ul>
      </section>
      <section className="border border-l-foreground border-t-0 border-b-0 border-r-0 px-5 basis-2/6">
        <h3 className="text-xl font-semibold">Social Media</h3>
        <ul className="mt-2 flex flex-col gap-2">
          {
            socialMediaLinks.map((item) => {
              const Icon = socialMediaIconMapper(item.content)
              return (
                <li key={item.href} className="text-footerForeground">
                  <a className="font-light flex items-center gap-2 " href={item.href}>
                    {item.content}
                    <Icon className="w-5 h-5 text-footerForeground" />
                  </a>
                </li>
              )
            })
          }
        </ul>
      </section>
    </footer>
  )
}