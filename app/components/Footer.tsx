import Link from "next/link";
import { websiteNavItems } from "../home/constants";
// import { socialMediaIconMapper } from "../home/constants";


export function Footer() {
  return (
    <footer className="flex flex-col gap-6 md:flex-row md:gap-16 w-full justify-between px-10 py-5 bg-tertiary mt-auto border border-t-foreground">
      <section className="basis-2/6 flex flex-col">
        <h2 className="text-xl font-semibold">Stewart Boot</h2>
        <p className="text-footerForeground tracking-wider text-sm">&copy; Copyright 2024 Stewart Boot theme. All rights reserved.</p>
        <p className="text-xs text-footerForeground tracking-wider mt-5 md:mt-auto">Website made by <a className="underline" href="https://www.linkedin.com/in/octavio-zenil-l%C3%B3pez-a6963b224/">Octavio Zenil</a></p>
      </section>
      <section className="pt-4 md:pt-0 border border-t-foreground border-l-0 md:border-l-foreground md:border-l md:border-t-0 border-b-0 border-r-0 px-5 basis-2/6">
        <h3 className="text-lg font-semibold">Pages</h3>
        <ul className="mt-2 flex flex-col gap-2">
          {
            websiteNavItems.map(item => {
              return (
                <li key={item.href}>
                  <Link className="font-light text-xs text-footerForeground" href={item.href}>{item.content}</Link>
                </li>
              )
            })
          }
        </ul>
      </section>
      {/* <section className="pt-4 md:pt-0 border border-t-foreground border-l-0 md:border-l-foreground md:border-l md:border-t-0 border-b-0 border-r-0 px-5 basis-2/6">
        <h3 className="text-lg font-semibold">Social Media</h3>
        <ul className="mt-2 flex flex-col gap-2">
          {
            socialMediaLinks.map((item) => {
              const Icon = socialMediaIconMapper(item.content)
              return (
                <li key={item.href} className="text-footerForeground">
                  <a className="text-xs font-light flex items-center gap-2 " href={item.href}>
                    <span className=" md:inline">{item.content}</span>
                    <Icon className="w-4 h-4 text-footerForeground" />
                  </a>
                </li>
              )
            })
          }
        </ul>
      </section> */}
    </footer>
  )
}